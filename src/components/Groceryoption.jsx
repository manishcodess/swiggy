export default function Groceryoption({ GroceryData }) {
  //using props sent whole obj
  return (
    <div className="min-w-[110px] rounded-4xl sm:min-w-[130px]">
      <div className="m-3 h-28 w-24 rounded-4xl bg-amber-100 sm:m-5 sm:h-35 sm:w-30">
        <img
          className="h-full w-full object-contain"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
            GroceryData.imageId
          }
          alt="grocery item"
        />
      </div>

      <h1 className="text-center text-sm sm:text-base">
        {GroceryData?.action?.text}{" "}
      </h1>
    </div>
  );
}
