const CategoryMenu=({data})=>{
    console.log("CategoryMenu data:", data);
    return(
        <div className="flex flex-col gap-4 bg-gray-200">
            {data.map((categ,index)=>{//all title 
                return (
                    <div className="bg-white p-4 dark:bg-black" key={index}>
                        <h1 className="font-extrabold dark:text-white">{categ.card.card.title} ({categ.card.card.itemCards.length})</h1>
                        <div className="flex flex-col">
                            {categ.card.card.itemCards.map((item,ind)=>{
                                return(
                                    <div className="flex" key={ind}>
                                        <div className="flex flex-col">
                                            <h1 className="dark:text-white">{item.card.info.name}</h1>
                                            <p className="dark:text-white">{item.card.info.price}</p>
                                            <p className="dark:text-white">{item.card.info.ratings.aggregatedRating.rating}</p>
                                            <p className="truncate dark:text-white">{item.card.info.description}</p>
                                        </div>
                                        <div>
                                            <img src={item.card.info.imageId}/>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
export default CategoryMenu;