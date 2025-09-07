const Online=({data})=>{
    const OnlineCards=data?.data?.cards?.[2]?.card?.card;
    if(!OnlineCards)
        return <h1>Loading...</h1>;
    return(
        <div className="mt-8">
            <h1 className="text-2xl font-extrabold font-sans">{OnlineCards.title}</h1>
        </div>
    )
};
export default Online;