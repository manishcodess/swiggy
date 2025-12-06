import Restcardsmore from "./Restcardsmore";
import {Restaurantdatamore} from "../utilitiesmore/Restaurantdatamore"
export default function Restaurantscards() {
  return (
    <div className=" flex flex-wrap gap-1">
      {Restaurantdatamore?.map((item) => (
        <Restcardsmore key={item.info.id} Restaurantdatamore={item} />
      ))}
    </div>
  );
}