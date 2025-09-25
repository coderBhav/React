import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
const useRestaurantMenu=(resId)=>{
    const [resinfo,setResInfo]=useState(null);
    useEffect(() => {
        const fetchMenu = async () => {
        try {
            const res = await fetch(`${MENU_URL}${resId}`);
            const data = await res.json();
            setResInfo(data?.data);
        } catch (error) {
            console.error("Failed to fetch menu:", error);
        }
        };
        fetchMenu();
    }, [resId]);
    return resinfo;
}

export default useRestaurantMenu;