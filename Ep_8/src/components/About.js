import React, { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

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
                <UserClass name={"second"} location={"Home2"} />
                <UserClass name={"third"} location={"Home2"} />
                <div><UserClass name={"fourth"} location={"Home2"} /></div>
            </div>
        )
    }
}

export default About;