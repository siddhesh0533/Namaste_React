import { createContext } from "react";

const userContext = createContext({
    loggedinuser : "default_User"
})

export default userContext;