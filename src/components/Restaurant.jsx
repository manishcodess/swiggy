import { useEffect, useState } from "react";
import RestCard from "../components/RestCard";

import Shimmer from "./Shimmer";
export default function Restaurant(){
   
    const [RestData, setRestData] = useState([])
 
    useEffect(()=>{
    
     async function fetchData() {
        
        const proxyServer = "https://thingproxy.freeboard.io/fetch/";

      //search https://www.swiggy.com/dapi/res....
        const swiggyAPI ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true";
        const response = await fetch("/src/data/swiggy.json");

        const data = await response.json();
        setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        //RestData=[{},{},{}]
     }

     fetchData();
    },[])

if(RestData.length==0){
    return(<Shimmer/>)
}

console.log(RestData);


    return (
        <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
            this are restaurants whihc are not shwoing apiii
            
            { //RestData=[{},{},{}]
                RestData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}>restaurantssss</RestCard>)
            }

        </div>
    )

}


//Due to Cord policy error......

// import { useEffect, useState } from "react";

// export default function Restaurant(){
    
//     const [RestData,setRestData]=useState([])

//     useEffect(()=>{
//         async function fetchdata() {
//             const response=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true");
//             const data=await response.json();
//             setRestData(data);
            
//         }
//         fetchdata();

//     },[]) //[]means run for 1 time when fetch

//     console.log(RestData);
// }