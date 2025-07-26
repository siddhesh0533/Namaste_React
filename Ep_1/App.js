
const parent = React.createElement("div", { id: "parent" },
    [React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 <tag>"),
        React.createElement("h1", {}, "I am h1 <tag>")]
    ),
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I am h1 <tag>"),
        React.createElement("h1", {}, "I am h1 <tag>")]
    )]
);


console.log(parent);



// const heading = React.createElement("h1", {id: "heading", sid:"my name"}, "HELLO WORLD USING REACT");
// console.log(headind);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);