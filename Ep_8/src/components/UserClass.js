import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 1
        }
    }

    render() {
        const { name, location } = this.props;
        const {count, count2} = this.state;
        return (
            <div>
                <h3>Count: {count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count + 1,
                    });
                }}>count++</button>
                <h3>Count2: {count2}</h3>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
                <h2>Contact: 1234567890</h2>
                <hr />
            </div>
        );
    }
}

export default UserClass;