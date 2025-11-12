import { imageGridCards } from "../utilities/Fooddata"
//imagegrid is object so ,import {imagegridcards}
import Foodoption from "./Foodoption"

//link={} bcs it is js expresion of conttaction
export default function Foodoptions(){

    return(<div className=" h-104 w-[80%]  container mx-auto">
        <div className=" p-4 font-bold text-2xl " >Order Our Best Food Options!</div>
        <div className="flex flex-wrap overflow-x-hidden gap-5"> { imageGridCards.map((val)=>{ return <Foodoption key={val.id} link={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/'+val?.imageId}/> })}</div>
      
    </div>)
}
//link={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${val?.imageId}`}
