import { GroceryData } from "../utilities/Grocerydata";
import Groceryoption from "./Groceryoption";

export default function Groceryoptions() {
  return (
    <div className="container mx-auto w-[92%] pt-5 md:w-[80%]">
      <div className="pt-6 text-xl font-bold sm:pt-9 sm:text-2xl">
        Shop groceries on instamart!
      </div>
      <div className="flex gap-3 overflow-x-auto p-1 sm:gap-4">
        {" "}
        {GroceryData.map((val) => {
          return <Groceryoption key={val.id} GroceryData={val} />;
        })}
      </div>
    </div>
  );
}
