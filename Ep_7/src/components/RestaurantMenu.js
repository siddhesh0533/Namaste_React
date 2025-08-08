import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const{resId} = useParams();

    const [resMenu, setResMenu] = useState(null)

    useEffect(() => {
      fetchData()
    }, [])

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=" + resId)

        const json = await data.json();

        // console.log(json)

        setResMenu(json?.data)
    }

    if (resMenu === null) {
        return <Shimmer/>
    }

    const{ name, costForTwo, cuisines, avgRating }= resMenu.cards[2]?.card?.card?.info;

    const {itemCards} = resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(itemCards);
    
    

    return (
        <div className="res-data">
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <h3>{avgRating}</h3>
                <h3>Rs. {costForTwo/100} for two</h3>
            </div>
            <div>{cuisines}</div>
            <div>
                <h2>Menu</h2>
                <ul>
                    {itemCards?.map((item)=>(
                        <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;