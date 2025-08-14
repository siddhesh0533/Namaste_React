import userContext from "../utils/userContext";
import Shimmer from "./Shimmer";
import { useContext } from "react";

const Contact = () => {

    const { loggedinuser, setUserName } = useContext(userContext);

    return (
        <>
            <div className="font-bold">Contact Us</div>

            <h1>{loggedinuser}</h1>
            <button onClick={() => setUserName("nid")}>
                Change Name
            </button>
        </>
    )
}

export default Contact;