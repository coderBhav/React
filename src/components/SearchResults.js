import swiggy from "../data/swiggy.json";

const SearchResults = ({food}) => {
    if(food === ""){
        return null;
    }
    const data = swiggy;
    const cards = data?.data?.cards || [];
    const restaurantsCard = cards.find(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    const restaurants = restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
    const filteredRestaurants = restaurants.filter((res) =>
    res?.info?.name?.toLowerCase().includes(food.toLowerCase()));
    
    if (filteredRestaurants.length === 0) {
        return <p>No matches for <i>"{food}"</i></p>;
    }
    return (
        <ul>
        {filteredRestaurants.map(res => (
            <li key={res?.info.id}>
            {res?.info.name}
            </li>
        ))}
        </ul>
    );
};

export default SearchResults;