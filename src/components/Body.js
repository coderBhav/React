import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useCheckOnline from "../utils/useCheckOnline";
const Body=()=>{
    // local state-variable
    const [topResList,settopResList]=useState([]);
    const [Copy,setCopy]=useState([]);
    const [Type,setType]=useState("");
    useEffect(()=>{
        getData();
    },[]);
    const getData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const getJson=await data.json();
        const cards = getJson?.data?.cards || [];
        const restaurantsCard = cards.find(
            (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        const restaurants = restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        settopResList(restaurants);
        setCopy(restaurants);
    };
const getStatus=useCheckOnline();
if(!getStatus)
    return <h1>You are offline</h1>
else{
    return topResList.length===0 ? (
        <Shimmer/>
    ):(
        <div className="container">
            <div className="search">
                <input className="text" type="text" placeholder="Search for restaurant, cuisines, Food" value={Type} onChange={(e)=>{
                    setType(e.target.value);
                }}/>
                <button onClick={()=>{
                    const resFilter=topResList.filter((res)=>res.info.name.toLowerCase().includes(Type.toLowerCase()));
                    setCopy(resFilter);
                }
                }>Search</button>
            </div>
            <button className="btn" onClick={()=>{
                    const topRes=topResList.filter((res)=>res.info.avgRating>4);
                    settopResList(topRes);
                }}>Top Restaurants</button>
            <div className="top-div">
                <h1 className="top-name">Top restaurant chains in Chhindwara</h1>
                <button className="r-btn">right</button>
            </div>
            <div className="res-container">
                {
                    Copy.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}
};
export default Body;