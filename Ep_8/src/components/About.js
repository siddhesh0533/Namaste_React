import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return(
        <div>
            <h1>About Page</h1>
            <User name={"sid"} location={"Home"}/>
            <UserClass name={"nid"} location={"Home2"}/>
        </div>
    )
}

export default About;