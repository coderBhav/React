import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurantMenu(resId);

  if (!resinfo) return <Shimmer />;

  const itemCards =
    resinfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards;

  if (!itemCards || itemCards.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10 text-lg">
        No menu items found 🍽️
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Restaurant Name */}
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Menu
      </h2>

      {/* Menu Items */}
      <ul className="space-y-4">
        {itemCards.map((item) => {
          const { id, name, price, description, imageId, defaultPrice } =
            item.card.info;

          return (
            <li
              key={id}
              className="flex justify-between items-center border-b pb-4"
            >
              {/* Left side: Info */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">
                  ₹{(price || defaultPrice) / 100}
                </p>
                {description && (
                  <p className="text-sm text-gray-600">{description}</p>
                )}
              </div>

              {/* Right side: Image + Button */}
              {imageId && (
                <div className="relative w-24 h-20">
                  <img
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_150,c_fit/${imageId}`}
                    alt={name}
                    className="w-full h-full object-cover rounded-lg shadow"
                  />
                  <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white text-green-600 border border-green-500 px-3 py-1 text-sm rounded-md hover:bg-green-50">
                    ADD +
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;