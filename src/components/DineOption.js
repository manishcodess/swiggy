import { dineoutRestaurants } from "../utilities/Dinedata";
import DineCard from "./DineCard";

export default function DineOption() {
  return (
    <div className="mx-auto mt-12 mb-16 w-[92%] md:mt-20 md:w-[80%]">
      <p className="text-2xl font-bold sm:text-3xl">
        Discover best restaurants on Dineout
      </p>
      <div className="mt-5 flex flex-nowrap gap-4 overflow-x-auto pb-2">
        {dineoutRestaurants.map((RestData) => (
          <DineCard key={RestData?.info?.id} RestData={RestData}></DineCard>
        ))}
      </div>
    </div>
  );
}
