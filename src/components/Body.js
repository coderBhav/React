import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body=()=>{
    return(
        <div className="container">
            <input className="text" type="text" placeholder="Search for restaurant, cuisines, Food"/>
            <div className="res-container">
                {
                    resList.map((restaurant)=>(
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    )
};
export default Body;