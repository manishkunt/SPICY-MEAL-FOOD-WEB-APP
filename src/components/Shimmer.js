const Shimmer = () => {
  return (
    <div className="dark:bg-black">
      <div className="w-10/12 mx-auto">
      <div className="flex justify-between pt-6 ">
        <div className="flex">
          <div className="w-52 h-12  bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
          <div className="ml-4 w-20 h-12 bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
        </div>
        <div className="w-52 h-12  bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
      </div>
      <div className="flex flex-wrap justify-center pt-16">
        {Array(20)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="m-4 p-4 bg-gray-200 dark:bg-slate-700 w-64 h-80 rounded-3xl animate-pulse"
            ></div>
          ))}
      </div>
    </div>
    </div>
    
  );
};

export default Shimmer;
