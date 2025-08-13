import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import ResCategory from "./ResCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resMenu = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if (resMenu === null) {
        return <Shimmer />
    }

    const { name, costForTwo, cuisines, avgRating } = resMenu?.cards[2]?.card?.card?.info;

    const { itemCards } = resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(itemCards);

    const categories = resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    // console.log(resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    // console.log(categories);




    return (
        <div className="text-center my-6">
            <div className="font-bold text-3xl">
                <h1>{name}</h1>
            </div>
            <div className="font-semibold text-lg flex justify-center">
                <h3 className="m-2">{avgRating} ⭐ star</h3>
                <h3 className="m-2">Rs. {costForTwo / 100} for two</h3>
            </div>
            <div>{cuisines.join(", ")}</div>
            <div>
                {categories.map((category, index) => (
                    <ResCategory data={category?.card?.card} key={category?.card?.card?.categoryId} showItems={index === showIndex ?true : false} setShowIndex = {()=>setShowIndex(index)} />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;