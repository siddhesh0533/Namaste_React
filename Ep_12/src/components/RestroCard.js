import { ASSETS_URL } from "../utils/constants";

const RestroCard = (props) => {

    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData?.info;

    return (
        <div className="m-3 p-3.5 w-55 h-120 bg-gray-100 border border-transparent transition-[border] duration-200 ease-in-out shadow-none rounded-[5px] hover:cursor-pointer hover:border-black hover:shadow-[0_4px_12px_rgba(0,0,0,0.3)]">
            <img className="w-[100%] rounded-[5px]" src={ASSETS_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} star</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    )
};

export const withPromotedLable = (RestroCard) => {
    return (props) => {
        return (
            <>
                <label className="mt-3 ml-3 absolute bg-black text-white rounded-sm text-sm p-0.5">Promoted</label>
                <RestroCard {...props} />
            </>
        )
    }
}

export default RestroCard;