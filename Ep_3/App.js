import React from "react";
import ReactDOM from "react-dom/client"

const Heading0 =()=> (<h1 className="boy">i'm a boy</h1>)
const val = 1000;

// const heading = React.createElement("h1", {id: "heading", sid:"my name"}, "HELLO WORLD USING REACT");
// console.log(headind);
const Heading = () => (<div>
    <h1>im a heading component</h1>
    {val+1}
    {20+90}
    {Heading0()}
</div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);