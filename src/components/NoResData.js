import NoRes from "../Logos/NoRes.png";

const NoResData = () => {
  return (
    <div className="flex flex-col items-center mx-auto pt-4 dark:bg-black min-h-screen">
      <div>
        <img className="w-52" src={NoRes} alt="No Results" />
      </div>
      <div>
        <h1 className="pt-4 text-center font-medium text-lg dark:text-white">
          Oops....No Restaurants Open at the moment !
        </h1>
        <h1 className="pt-6 text-center text-gray-500 font-mono dark:text-gray-400">
          Hey there! this app uses the data from Swiggy's live API's and it
          fetches only a section of
        </h1>
        <h1 className="font-mono text-gray-500 text-center dark:text-gray-400">
          the restaurants, so if they close in the night or holidays,it leads to
          THIS SITUATION !!!
        </h1>
        <h1></h1>
        <h1 className="pt-4 text-center text-gray-500 font-mono dark:text-gray-400">
          May the restaurants open again soon !!
        </h1>
      </div>
    </div>
  );
};

export default NoResData;
