import RestroCard from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [originalRestro] = useState();
    const [topRestro, setTopRestro] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetchData();
    }, [])
    
    const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0760&lng=72.8777&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        setTopRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    if (topRestro.length === 0) {
        return <Shimmer/>
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="btn" onClick={() => {
                    const updatedList = topRestro.filter(
                        (res) => res.info.avgRating > 4.3); 
                    setTopRestro(updatedList);
                }}
                >Top Restro</button>
                <button className="btn" onClick={() => {
                    setTopRestro(originalRestro);
                }}
                >Show All</button>
                <div className="counting">
                    <button className="btn" onClick={() => {
                        setCount(pre => pre + 1);
                    }}> + </button>
                    <div className="c">{count}</div>
                    <button className="btn" onClick={() => {
                        setCount(pre => pre - 1);
                    }}> - </button>
                </div>
            </div>
            <div className="res-card-container">
                {topRestro.map((res) => (
                    <RestroCard key={res.info.id} resData={res} />
                ))}
            </div>
        </div >
    )
}

export default Body;