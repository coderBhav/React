import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId, name, cuisines, avgRating, areaName}=resData?.info;
    return(
        <div className="res-cards">
            <img className="im" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="res-name">{name}</h3>
            <h4 className="rating">{avgRating}</h4>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4 className="area">{areaName}</h4>
        </div>
    )
};
export default RestaurantCard;