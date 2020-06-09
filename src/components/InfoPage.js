import React from "react";
import { Tabs, Tab, Panel } from '@bumaga/tabs'
import Collapsible from 'react-collapsible';



export default props => (

    <div className="infohelp">

        <h1 className="infostyle">How Does SwapMe Work?</h1>

        <hr></hr>


        <Tabs>
            <div>
                <Tab><button>About</button></Tab>
                <Tab><button>Rules</button></Tab>
                <Tab><button>Contact</button></Tab>
            </div>


            <Panel>

                <h2>About SwapMe</h2>
                <p> Swap Me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>


            </Panel>

            <Panel>

                <h2>The Rules</h2>
                <Collapsible className="infoheader" trigger=" Step 1: click on me ">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>

                <br></br>

                <Collapsible className="infoheader" trigger=" Step 2: click on me " bac>
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>

                <br></br>

                <Collapsible className="infoheader" trigger=" Step 3:  click on me ">
                    <p>This is the collapsible content. It can be any element or React component you like.</p>
                    <p>It can even be another Collapsible component. Check out the next section!</p>
                </Collapsible>

            </Panel>

            <Panel>
                <h2>Contact Us</h2>
                <form class="form">
                    <p type="Name:"><input placeholder="Write your name here.."></input></p>
                    <p type="Email:"><input placeholder="Let us know how to contact you back.."></input></p>
                    <p type="Message:"><input placeholder="What would you like to tell us.."></input></p>
                    <button>Send Message</button>

                </form>


            </Panel>


        </Tabs>

    </div>

);



export const Body2 = () => (

    <div>
        <div>hi</div>
    </div>
);

export const Body3 = () => (
    <div>
        <div>hi</div>
    </div>
);