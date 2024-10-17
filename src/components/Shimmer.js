const Shimmer = () => {
  return (
    <div className="dark:bg-black">
      <div className="w-10/12 mx-auto">
        <div className="flex justify-between pt-6">
          <div className="flex">
            <div className="w-52 h-12 bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
            <div className="ml-4 w-20 h-12 bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
          </div>
          <div className="w-52 h-12 bg-gray-200 dark:bg-slate-700 rounded-lg"></div>
        </div>
        <div className="pt-16">
          <div className="grid grid-cols-1 below-sm:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-screen-lg mx-auto">
            {Array(20)
              .fill("")
              .map((_, index) => (
                <div key={index}>
                  <div className="bg-gray-200 dark:bg-slate-700 w-full h-44 rounded-3xl animate-pulse"></div>
                  <div className="mt-3 ml-2 bg-gray-200 dark:bg-slate-700 w-44 h-5 rounded-3xl animate-pulse"></div>
                  <div className="mt-2 ml-2 bg-gray-200 dark:bg-slate-700 w-32 h-5 rounded-3xl animate-pulse"></div>
                  <div className="mt-2 ml-2 bg-gray-200 dark:bg-slate-700 w-48 h-3 rounded-3xl animate-pulse"></div>
                  <div className="mt-2 ml-2 mb-8 bg-gray-200 dark:bg-slate-700 w-24 h-3 rounded-3xl animate-pulse"></div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
