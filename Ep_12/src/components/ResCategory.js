import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {

    const handleclick = () => {
        setShowIndex(showItems ? null : undefined)
    }

    return (
        <div>
            <div className="w-6/12 mx-auto my-3 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between" onClick={handleclick}>
                    <span className="font-bold text-lg">{data.title} ({data?.itemCards?.length})</span>
                    <span>
                       {showItems ? "🔼" : "🔽"}
                    </span>
                </div>

                {showItems && <ItemList items={data?.itemCards} />}

            </div>
        </div>
    )
}

export default ResCategory;