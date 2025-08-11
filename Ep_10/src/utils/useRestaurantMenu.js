import { RES_MENU_URL } from "./constants"
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) =>{

    const [resMenu, setResMenu] = useState(null)

    useEffect(() => {
      fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch (RES_MENU_URL + resId);
        const json = await data.json();
        setResMenu(json.data);
    }
    

    return resMenu;
}

export default useRestaurantMenu;