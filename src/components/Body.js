import RestaurantCard, { RestaurantCardWithHOC } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Mind from "./Mind";
import useCheckOnline from "../utils/useCheckOnline";
import Online from "./Online";
import swiggy from "../data/swiggy.json";

const Body = () => {
  const [api, setApi] = useState({});
  const [topResList, setTopResList] = useState([]);
  const [copy, setCopy] = useState([]);
  
  //console.log(swiggy);

  const DiscountCard = RestaurantCardWithHOC(RestaurantCard);
  useEffect(() => {
    const data = swiggy;
    setApi(data);

    const cards = data?.data?.cards || [];
    const restaurantsCard = cards.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setTopResList(restaurants);
    setCopy(restaurants);
  }, []); 

  const getStatus = useCheckOnline();
  if (!getStatus)
    return (
      <h1 className="text-center text-red-600 mt-10">
        You are offline ❌
      </h1>
    );

  return topResList.length === 0 ? (
    <div className="flex flex-col items-center justify-center mt-20">
      <Shimmer />
      <p className="text-gray-500 mt-4">Could not load restaurants.</p>
      {/* You can remove this button since no fetch retry is needed */}
    </div>
  ) : (
    <div className="px-36 py-4 dark:bg-black">
      <div className="mb-6">
        <Mind data={api} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-extrabold font-sans dark:text-white">
          {api?.data?.cards?.[1]?.card?.card?.header?.title}
        </h1>
      </div>
      <div className="flex overflow-x-auto p-2 scrollbar-hide border-b-2 border-gray-200 pb-12">
        {copy.map((restaurant) =>
          restaurant?.info?.aggregatedDiscountInfoV3 ? (
            <DiscountCard key={restaurant.info.id} resData={restaurant} />
          ) : (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )
        )}
      </div>
      <Online data={api} />
    </div>
  );
};

export default Body;
