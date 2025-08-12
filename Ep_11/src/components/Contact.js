import userContext from "../utils/userContext";
import Shimmer from "./Shimmer";
import { useContext } from "react";

const Contact = () => {

    const {loggedinuser} = useContext(userContext);

    return(
        <>
        <div>Contact Us</div>

        <h1>{loggedinuser}</h1>
        </>
    )
}

export default Contact;