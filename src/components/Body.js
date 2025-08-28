import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";
import { useState } from "react";
const Body=()=>{
    const[topResList,settopResList]=useState(resList);
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