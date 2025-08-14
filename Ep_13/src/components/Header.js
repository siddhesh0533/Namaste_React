import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

    const [buttoname, setButtoname] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);
    

    return (
        <div className="flex justify-between shadow-[0_4px_12px_rgba(255,0,0,0.3)]">
            <div className="w-25">
                <img src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex ">
                    <li className="p-2 m-2 list-none">Online status: {onlineStatus ? "✅" : "❌"}</li>
                    <li className="p-2 m-2 list-none"><Link to={'/'}>Home</Link></li>
                    <li className="p-2 m-2 list-none"><Link to={'/contact'}>Contact US</Link></li>
                    <li className="p-2 m-2 list-none"><Link to={'/about'}>About Us</Link></li>
                    <li className="p-2 m-2 list-none"><Link to={'/grocery'}>Grocery </Link></li>
                    <li className="p-2 m-2 list-none"><Link to={'/cart'}>Cart ({cartItems?.length})</Link></li>
                    <button className="m-1 p-2.5 bg-black text-white" onClick={() => { buttoname === "Login" ? setButtoname("Logout") : setButtoname("Login") }}>{buttoname}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;