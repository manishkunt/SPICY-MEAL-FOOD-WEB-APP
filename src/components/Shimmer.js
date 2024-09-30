const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(20)
        .fill("")
        .map((_, index) => (
          <div key={index} className="m-8 p-4 bg-gray-200 w-64 h-96"></div>
        ))}
    </div>
  );
};

export default Shimmer;
