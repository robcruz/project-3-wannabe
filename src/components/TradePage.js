import React from "react";

export default props => (
    <div className="Username">
        <h1 className="namestyle">Upload Your Items Here!</h1>
        <div className="Dashboard">

            <div>
                <h1>Swap</h1>
            </div>
            <div className="contentbox">
                <hr></hr>
                <h1>Post Items for trade here!</h1>
                <hr></hr>
                <div class="scrollable">
                    <div class="postContainer">

                        <form class="form" id="post-form">
                            <p type="Item:"><input placeholder="Item Name."></input></p>
                            <p type="Description:"><input placeholder="Item Description"></input></p>
                            <p type="Trade for:"><input placeholder="What Item would you like to trade for?"></input></p>
                            <button id="post-btn">POST ITEM</button>
                        </form>

                    </div>
                </div>


            </div>
        </div>


    </div>
);

export const Body2 = () => (

    <div>
        <h1>hi</h1>
        <div>hi</div>
    </div>
);

export const Body3 = () => (
    <div>
        <div>hi</div>
    </div>
);