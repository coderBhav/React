import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId, name, cuisines, avgRating, areaName, totalRatingsString, id}=resData?.info;
    const {sla} = resData?.info;
    const {slaString, lastMileTravelString} = sla;
    const {link}=resData?.cta;
    return(
        <Link to={`/restaurant/${id}`} className="view">
          <div className="res-cards">
            <img className="im" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="res-name">{name}</h3>
            <h4 className="rating">⭐ {avgRating} ({totalRatingsString})</h4>
            <h4 className="time">{slaString} • {lastMileTravelString}</h4>
            <h4 className="cuisines">{cuisines.join(",")}</h4>
            <h4 className="area">{areaName}</h4>
        </div>
        </Link>
    )
};
export default RestaurantCard;