import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name:"sid",
            location:"dighashi"
        }
        console.log(this.props.name + " userclass constuctor");
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/siddhesh0533")

        const json = await data.json();

        console.log(json)
        console.log(this.props.name+ " userclass mount")
        this.setState(json);
    }
    
    render() {
        console.log(this.props.name + " userclass render");
        
        const { name, location, avatar_url } = this.state;
        return (
            <div>
                <h1>Name: {name}</h1>
                <img src={avatar_url}/>
                <h2>Location: {location}</h2>
                <h2>Contact: 1234567890</h2>
                <hr />
            </div>
        );
    }
}

export default UserClass;