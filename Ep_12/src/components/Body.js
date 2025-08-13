import RestroCard, { withPromotedLable } from "./RestroCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { RESTAURANT_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [originalRestro, setOriginalRestro] = useState([]);
    const [topRestro, setTopRestro] = useState([]);
    const [count, setCount] = useState(0);
    const [searchtext, setsearchtext] = useState("");

    const RestroCardPromoted = withPromotedLable(RestroCard);


    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST_URL);

        const json = await data.json();

        console.log(json);

        setTopRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setOriginalRestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>you'r offline</h1>
    }

    if (topRestro?.length === 0) {
        return <Shimmer />
    }

    return (
        <div>
            <div className="flex items-center gap-2.5 p-5  ">
                <div className="flex items-center">
                    <input type="text" className="p-2.5 border" value={searchtext} onChange={(e) => { setsearchtext(e.target.value) }} />
                    <button className="m-1 p-2.5 bg-black text-white" onClick={() => {
                        const filterResto = originalRestro.filter((res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase()));
                        setTopRestro(filterResto)
                    }}>search</button>
                </div>
                <button className="m-1 p-2.5 bg-black text-white" onClick={() => {
                    const updatedList = topRestro.filter(
                        (res) => res.info.avgRating > 4.3);
                    setTopRestro(updatedList);
                }}
                >Top Restro</button>
                <button className="m-1 p-2.5 bg-black text-white" onClick={() => {
                    setTopRestro(originalRestro);
                }}
                >Show All</button>
                <div className="flex items-center">
                    <button className="m-1 p-2.5 bg-black text-white" onClick={() => {
                        setCount(pre => pre + 1);
                    }}> + </button>
                    <div className="bg-black text-white p-2.5 border">{count}</div>
                    <button className="m-1 p-2.5 bg-black text-white" onClick={() => {
                        setCount(pre => pre - 1);
                    }}> - </button>
                </div>
            </div>
            <div className="flex flex-wrap justify-center">
                {topRestro?.map((res) => (
                    <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
                        {!res.info.aggregatedDiscountInfoV3 ? <RestroCardPromoted resData={res} /> :
                            <RestroCard resData={res} />}</Link>
                ))}
            </div>
        </div >
    )
}

export default Body;