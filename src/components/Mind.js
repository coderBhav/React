import MindCard from "./MindCard";

const Mind = ({ data }) => {
  const cardData = data?.data?.cards?.[0]?.card?.card;

  if (!cardData) {
    return <h2>Loading...</h2>;
  }

  const { header, gridElements } = cardData;

  return (
    <div className="mb-6 flex flex-col space-y-3 border-b-2 border-gray-100">
      <h1 className="text-xl font-extrabold font-sans dark:text-white">{header?.title}</h1>
      <div className="flex overflow-x-auto space-x-4 p-2 scrollbar-hide">
        {gridElements?.infoWithStyle?.info?.map((item) => (
          <MindCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Mind;
