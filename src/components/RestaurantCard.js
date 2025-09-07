import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    areaName,
    id,
  } = resData?.info;
  const { slaString} = resData?.info?.sla || {}; 
  return (
    <Link to={`/restaurant/${id}`}className="block hover:scale-95 transition-transform duration-200">
      <div className="bg-white rounded-2xl overflow-hidden w-72">
        <img className="h-44 w-64 object-cover rounded-2xl" src={CDN_URL + cloudinaryImageId} alt={name}/>
          <div className="w-54 m-3">
            <h3 className="text-lg font-bold truncate ">{name}</h3>
            <h3 className="font-semibold">⭐{avgRating}{" "}• {slaString}</h3>
            <p className="font-medium text-gray-500 truncate">{cuisines.join(", ")}</p>
            <p className="font-medium text-gray-500 mt-1">{areaName}</p>
          </div>
      </div>
    </Link>
  );
};

export const RestaurantCardWithHOC=(RestaurantCard)=>{
  return(props)=>{
    const discountInfo = props.resData?.info?.aggregatedDiscountInfoV3;
    return(
      <div className="relative w-72 flex-shrink-0 hover: scale-95 transition-transform duration-200">
        <p className="font-lg font-extrabold text-white absolute top-36 left-2 z-20">{discountInfo.header} {discountInfo.subHeader}</p>
        <RestaurantCard {...props}/>
      </div>
    );
};
};

export default RestaurantCard;
