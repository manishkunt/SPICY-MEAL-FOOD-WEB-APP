const ShimmerList = () => {
  return (
    <div className="dark:bg-black min-h-screen">
      <div className="w-6/12 m-auto pt-10">
      <div className="flex flex-wrap justify-center pt-16">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="m-4 p-4 bg-gray-200 dark:bg-slate-700 w-full h-14 rounded-sm animate-pulse"
            ></div>
          ))}
      </div>
    </div>
    </div>
    
  );
};
export default ShimmerList;
