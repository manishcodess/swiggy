
import RestCard from "./RestCard";
import { Restaurantdatamore } from "../utilitiesmore/Restaurantdatamore";

export default function Restaurantscards() {
  return (
    <div className="flex flex-wrap gap-1">
      {Restaurantdatamore?.map((item) => (
        <RestCard key={item?.info?.id} restprop={item} />
      ))}
    </div>
  );
}
