const CategoryMenu=({data})=>{
    console.log("CategoryMenu data:", data);
    return(
        <div className="flex flex-col">
            {data.map((item,index)=>{
                return <h1 key={index}>{item.card.card.title}</h1>;
            })}
        </div>
    );
};
export default CategoryMenu;