import userContext from "../utils/userContext";
import { useContext } from "react";

const Contact = () => {

    const { loggedinuser, setUserName } = useContext(userContext);

    return (
        <div className="m-4 text-center">
            <div className="font-bold">Contact Us</div>

            <h1>{loggedinuser}</h1>
            <button className="m-4 p-2 bg-black text-white rounded-2xl" onClick={() => setUserName("nid")}>
                Change Name
            </button>
        </div>
    )
}

export default Contact;