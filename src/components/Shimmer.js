const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-6">
      {Array(6).fill("").map((_, i) => (
        <div
          key={i}
          className="w-60 h-64 bg-gray-200 animate-pulse rounded-xl shadow"
        >
          <div className="h-36 bg-gray-300 rounded-t-xl"></div>
          <div className="p-3 space-y-2">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-2/3"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;