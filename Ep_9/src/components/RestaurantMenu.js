import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {

    const{resId} = useParams();

    const resMenu = useRestaurantMenu(resId);

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
            <div>{cuisines.join(", ")}</div>
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