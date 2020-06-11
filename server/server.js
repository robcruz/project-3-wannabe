// import 'dotenv/config.js';
import http from 'http';
import express from 'express';
import session from 'express-session';
import passport from 'passport';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';


import morgan from 'morgan'
import dbConnection from './database'
import user from './routes/user'

import { session as MongoStore } from 'connect-mongo'





const app = express();;
const upload = require("./upload");
const cors = require("cors");
const server = http.createServer(app);
const io = require('socket.io').listen(server);

const PORT = process.env.PORT || 8000;





// Middleware


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
// Expose the node_modules folder as static resource
// (to access socket.io.js in the browser) - THIS!!!
app.use('/static', express.static('node_modules'));

const withDB = async (operations, res) => {
    try {
        const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
        const db = client.db('my-blog');

        await operations(db);

        client.close();
    } catch (error) {
        res.status(500).json({ message: 'Error connecting to db', error });
    }
}

app.use('/user', user)

app.get('/api/articles/:name', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({ name: articleName })
        res.status(200).json(articleInfo);
    }, res);
})

app.post('/api/articles/:name/upvote', async (req, res) => {
    withDB(async (db) => {
        const articleName = req.params.name;

        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                upvotes: articleInfo.upvotes + 1,
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
});

app.post('/api/articles/:name/add-comment', (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection('articles').findOne({ name: articleName });
        await db.collection('articles').updateOne({ name: articleName }, {
            '$set': {
                comments: articleInfo.comments.concat({ username, text }),
            },
        });
        const updatedArticleInfo = await db.collection('articles').findOne({ name: articleName });

        res.status(200).json(updatedArticleInfo);
    }, res);
});

// app.listen(PORT, () => console.log('Listening on port 8000'));

require('./routes/IORoutes')(io);

server.listen(PORT, () => { console.log('==> 🌎  Listening on port %s.', PORT) });


//upload

// var corsOptions = {
//     origin: "*",
//     optionsSuccessStatus: 200
// };
//
// server.use(cors(corsOptions));
//
// server.post("/upload", upload);
//
// server.listen(8000, () => {
//     console.log("Server started!");
// });
