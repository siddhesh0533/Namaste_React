import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
import userContext from "../utils/userContext.js";


class About extends Component {
    constructor(props){
        super(props);

        console.log("About constructor");
        
    }

    componentDidMount(){
        console.log("About Mount");
    }

    render() {
        console.log("About Render");
        return (
            <div>
                <h1>About Page</h1>
                <UserClass name={"first"} location={"Home2"} />
                <userContext.Consumer>
                    {({loggedinuser})=>(
                        <h1>{loggedinuser}</h1>
                    )}
                </userContext.Consumer>
            </div>
        )
    }
}

export default About;