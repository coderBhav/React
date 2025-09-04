import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId}=useParams();
  const resinfo = useRestaurantMenu(resId);

  if (!resinfo) return <Shimmer />;

  const itemCards = resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards;

  if (!itemCards || itemCards.length === 0) {
    return <div>No menu items found.</div>;
  }

  return (
    <div className="menu-items">
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - ₹{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;