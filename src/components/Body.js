import RestaurantCard, { RestaurantCardWithHOC } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Mind from "./Mind";
import useCheckOnline from "../utils/useCheckOnline";
import Online from "./Online";

const Body = () => {
  // local state-variable
  const [api, setApi] = useState([]);
  const [topResList, setTopResList] = useState([]);
  const [copy, setCopy] = useState([]);
  const [type, setType] = useState("");
  const DiscountCard = RestaurantCardWithHOC(RestaurantCard);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const getJson = await data.json();
    setApi(getJson);

    const cards = getJson?.data?.cards || [];
    const restaurantsCard = cards.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const restaurants =
      restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants ||[];
    setTopResList(restaurants);
    setCopy(restaurants);
  };

  const getStatus = useCheckOnline();
  if (!getStatus) return <h1 className="text-center text-red-600 mt-10">You are offline ❌</h1>;

  return topResList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-36 py-4">
      
      {/*<div className="flex items-center space-x-2 mb-6">
        <input
          type="text"
          placeholder="Search for restaurant, cuisines, Food"
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          onClick={() => {
            const resFilter = topResList.filter((res) =>
              res.info.name.toLowerCase().includes(type.toLowerCase())
            );
            setCopy(resFilter);
          }}
          className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Search
        </button>
        <button
          onClick={() => {
            const topRes = topResList.filter((res) => res.info.avgRating > 4);
            setTopResList(topRes);
          }}
          className="px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Top Restaurants
        </button>
      </div>*/}
      <div className="mb-6">
        <Mind data={api} />
      </div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-extrabold font-sans">{api?.data?.cards?.[1]?.card?.card?.header?.title}</h1>
      </div>
      <div className="flex overflow-x-auto p-2 scrollbar-hide border-b-2 border-gray-200 pb-12">
        {copy.map((restaurant) => (
          restaurant?.info?.aggregatedDiscountInfoV3 ? (<DiscountCard key={restaurant.info.id} resData={restaurant} />):
          (<RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
        ))}
      </div>
      <Online data={api}/>
    </div>
  );
};

export default Body;