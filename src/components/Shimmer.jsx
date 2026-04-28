export default function Shimmer() {
  const placeholderCount = 12;
  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {Array.from({ length: placeholderCount }).map((_, idx) => (
        <div key={idx} className="w-[280px] mb-2">
          <div className="w-70 h-45 rounded-xl bg-gray-300 animate-pulse"></div>
          <div className="w-[95%] mx-auto mt-3">
            <div className="w-full h-6 bg-gray-300 animate-pulse"></div>
            <div className="w-full h-6 bg-gray-300 mt-2 animate-pulse"></div>
            <div className="w-full h-6 bg-gray-300 mt-2 animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
