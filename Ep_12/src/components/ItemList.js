import { handle } from "express/lib/application";
import { ASSETS_URL } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    // console.log(items);

    const dispatch = useDispatch()

    const handleAddItem =(item)=>{
        dispatch(addItem(item))
    }

    return (
        <div>
            {items.map((item) => (

                <div key={item.card.info.id} className="p-2 m-2 border-b text-left flex justify-between">
                    <div className="w-10/12">
                        <div className="py-3">
                            <span>{item?.card?.info?.name}</span>
                            <span> - Rs. {item?.card?.info?.price / 100}</span>
                        </div>
                        <p className="text-xs">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-2/12">
                        <div className="absolute">
                            <button className="p-2 bg-white shadow-lg m-auto" onClick={()=>handleAddItem(item)}>Add</button>
                        </div>
                        <img className="w-full" src={ASSETS_URL + item?.card?.info?.imageId} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemList