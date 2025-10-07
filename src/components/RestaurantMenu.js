import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import CategoryMenu from "./CategoryMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch(`/menus/menu_${resId}.json`);
        console.log(res.status);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const data = await res.json();
        setMenuData(data);

      } catch (err) {
        console.error("Error fetching menu:", err);
      }
    };
    fetchMenu();
  }, [resId]);

  if (!menuData) return <Shimmer />;

  return (
    <div className="flex flex-col dark:bg-black dark:text-white">
      <h1 className="text-3xl font-extrabold">{menuData.restaurantName}</h1>

      {/* Example: Show some restaurant info */}
      <div className="p-4 border-2 border-gray-200 rounded-2xl mb-4">
        <p>Rating: {menuData.avgRating}</p>
        <p>Cuisines: {menuData.cuisines.join(", ")}</p>
        <p>Cost for Two: {menuData.costForTwo}</p>
      </div>

      <h2 className="text-2xl font-bold mb-2">Menu</h2>
      <CategoryMenu data={menuData.categories} />
    </div>
  );
};

export default RestaurantMenu;