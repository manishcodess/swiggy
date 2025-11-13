import { GroceryData } from "../utilities/Grocerydata"
import Groceryoption from "./Groceryoption"

export default function Groceryoptions(){

    return(<div className=" h-104 w-[80%] container mx-auto pt-5 ">
        <div className=" pt-9 font-bold text-2xl " >Shop groceries on instamart!</div>
        <div className=" flex  overflow-y-hidden gap-4 p-1"> { GroceryData.map((val)=>{ return <Groceryoption key={val.id}  GroceryData={val}  />})}</div>
      
    </div>)
}