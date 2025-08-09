import { useState } from "react";

const User = ({ name, location }) => {
    const [count] = useState(0);
    const [count2] = useState(1);
    return (
        <div>
            <h3>Count: {count}</h3>
            <h3>Count2: {count2}</h3>
            <h1>Name: {name}</h1>
            <h2>Location: {location}</h2>
            <h2>Contact: 1234567890</h2>
            <hr />
        </div>
    )
}

export default User;