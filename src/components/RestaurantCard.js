import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId, name, cuisines, avgRating, areaName, totalRatingsString}=resData?.info;
    const {sla} = resData?.info;
    const {slaString, lastMileTravelString} = sla;
    const {link}=resData?.cta;
    return(
        <div className="res-cards">
            <img className="im" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="res-name">{name}</h3>
            <h4 className="rating">⭐ {avgRating} ({totalRatingsString})</h4>
            <h4>{slaString} • {lastMileTravelString}</h4>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4 className="area">{areaName}</h4>
            <a href={link}>View Menu</a>
        </div>
    )
};
export default RestaurantCard;