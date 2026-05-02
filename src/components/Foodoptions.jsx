import { Fooddata } from "../utilities/Fooddata";
import Foodoption from "./Foodoption";
// ../ means go back 1 folder means from component to src then utilities/fooddata
//./ means foodoption file is present in currecnt folder components

//link={} bcs it is js expresion of conttaction
export default function Foodoptions() {
  return (
    <div className="container mx-auto w-[92%] py-4 md:w-[80%]">
      <div className="p-4 text-xl font-bold sm:text-2xl">
        Order Our Best Food Options!
      </div>
      <div className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-5">
        {" "}
        {Fooddata.map((val) => {
          return (
            <Foodoption
              key={val.id}
              link={
                "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
                val?.imageId
              }
            />
          );
        })}
      </div>
    </div>
  );
}
//link={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${val?.imageId}`}
