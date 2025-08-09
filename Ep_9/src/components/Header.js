import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [buttoname, setButtoname] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online status: {onlineStatus? "✅" : "❌"}</li>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/contact'}>Contact US</Link></li>
                    <li><Link to={'/about'}>About Us</Link></li>
                    <li><Link to={'/grocery'}>Grocery </Link></li>
                    <li>Cart</li>
                    <button className="btn" onClick={()=>{buttoname=== "Login"? setButtoname("Logout") : setButtoname("Login")}}>{buttoname}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;