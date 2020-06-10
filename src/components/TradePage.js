import React from "react";
import Upload from "./Upload";
import "./Upload.css";




export default props => (

    <div className="Username">
        <h1 className="namestyle">Upload Your Item(s) Here!</h1>
        <div className="Dashboard">


            <div>
                <h1>Upload</h1>

                <div className="App">
                    <div className="Card">
                        <form className="form">
                            <input type="Name" placeholder="Please enter Name of Item and your Trade"></input>
                        </form>

                        <Upload />



                    </div>
                </div>
            </div>

        </div>


    </div>


);

