import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import CategoryMenu from "./CategoryMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);
  if (!resinfo) return <Shimmer />;

 const menuCategory = 
  resinfo?.cards
  ?.flatMap(c => c?.groupedCard?.cardGroupMap?.REGULAR?.cards || []) // sab cards collect karo
  .filter(c => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  return (
    <div className="flex flex-col max-w-3xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-extrabold">{resinfo?.cards?.[0]?.card?.card?.text}</h1>
      <div className="flex flex-col gap-2 border-2 border-gray-200 h-auto p-4 rounded-2xl shadow-xl/30 shadow-gray-500">
        <h1 className="font-bold">{resinfo?.cards?.[2]?.card?.card?.info?.avgRating} ({resinfo?.cards?.[2]?.card?.card?.info?.totalRatingsString}) • {resinfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</h1>
        <p className="font-bold text-orange-500 text-sm underline">{resinfo?.cards?.[2]?.card?.card?.info?.cuisines.join(",")}</p>
        <div className="flex gap-4">
          <p className="text-sm font-bold">Outlet</p>
            <p className="text-sm text-gray-500">{resinfo?.cards?.[2]?.card?.card?.info?.areaName}</p>
        </div>
        <p className="text-sm font-bold">{resinfo?.cards?.[2]?.card?.card?.info?.sla?.slaString}</p>
      </div>
      <h1>Menu</h1>
      <CategoryMenu data={menuCategory}/>
    </div>
    
  );
};

export default RestaurantMenu;