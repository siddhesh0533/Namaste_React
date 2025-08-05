import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

    const [buttoname, setButtoname] = useState("Login");

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>Contact US</li>
                    <li>About Us</li>
                    <li>Cart</li>
                    <button className="btn" onClick={()=>{buttoname=== "Login"? setButtoname("Logout") : setButtoname("Login")}}>{buttoname}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;