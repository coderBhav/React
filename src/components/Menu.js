import { useEffect } from "react";

const Menu=()=>{
    useEffect(()=>{
        const fetchMenu=async ()=>{
            const Menudata=await fetch("https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=625927&submitAction=ENTER");
            const Menujson=await Menudata.json();
            console.log(Menujson);
        };
        fetchMenu();
    },[]);
    return(
        <div>
            <h1>Restaurants</h1>
        </div>
    );
};
export default Menu;