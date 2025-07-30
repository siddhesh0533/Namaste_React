import React from "react";
import ReactDOM from "react-dom/client"

const heading = <h1 className="boy">i'm a boy</h1>

// const heading = React.createElement("h1", {id: "heading", sid:"my name"}, "HELLO WORLD USING REACT");
// console.log(headind);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);