import React from "react";
import ReactDOM from "react-dom/client"

const Header = () =>{
    return(
        <div className="header">
            <div className="logo">
                <img src="https://png.pngtree.com/png-vector/20221218/ourmid/pngtree-simple-and-modern-food-logo-vector-design-png-image_6527848.png"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact US</li>
                    <li>About Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestroCard = () =>{
    return(
        <div className="res-card">
            <img className="res-img" src="https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg"/>
            <h3>Meghana Restro</h3>
            <h4>Indian, Italian</h4>
            <h4>4.4 star</h4>
        </div>
    )
}

const Body = () => {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-card-container">
                <RestroCard/>
                <RestroCard/>
            </div>
        </div>
    )
}

const App = ()=>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
        
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);