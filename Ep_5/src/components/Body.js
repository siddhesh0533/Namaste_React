import resList from "../utils/mockData";
import RestroCard from "./RestroCard";
import { useState } from "react";

const Body = () => {

    const [originalRestro] = useState(resList);
    const [topRestro, setTopRestro] = useState(resList);
    const [count, setCount] = useState(0);

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
                {topRestro.map((restaurant) => (
                    <RestroCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div >
    )
}

export default Body;