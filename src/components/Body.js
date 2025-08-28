import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useEffect, useState } from "react";
const Body=()=>{
    const[topResList,settopResList]=useState(resList);
    useEffect(()=>{
        getData();
    },[]);
    const getData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const getJson=await data.json();
        settopResList(getJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(getJson);
    };
    return(
        <div className="container">
            <div className="search">
                <input className="text" type="text" placeholder="Search for restaurant, cuisines, Food"/>
                <button className="btn" onClick={()=>{
                    const topRes=topResList.filter((res)=>res.info.avgRating>4);
                    settopResList(topRes);
                }}>Top Restaurants</button>
            </div>
            <div className="res-container">
                {
                    topResList.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Body;