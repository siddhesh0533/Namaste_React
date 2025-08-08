import React from "react";

class UserClass extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        const {name, location} = this.props;
        return (
            <div>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Contact: 1234567890</h2>
                <hr/>
            </div>
        );
    }
}

export default UserClass;