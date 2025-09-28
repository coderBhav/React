import SearchResults from "./SearchResults";
import { Suspense } from "react";
import { useState } from "react";

const SearchBar = () => {
    const [food, setFood] = useState("");
    return(
        <div>
            <div className="flex flex-1 max-w-lg mx-6">
                <input
                type="text"
                placeholder="Search for Food"
                value={food}
                onChange={e=>setFood(e.target.value)}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:ring-offset-transparent dark:text-white"
                />
                <button className="px-4 py-2 bg-orange-500 text-white rounded-r-full hover:bg-orange-600 hover:cursor-pointer">
                Search
                </button>
            </div>
            <Suspense fallback={<h2>Loading...</h2>}>
                <SearchResults food={food} />
            </Suspense>
        </div>
    );
};
export default SearchBar;