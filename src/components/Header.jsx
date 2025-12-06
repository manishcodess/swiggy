
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div className="bg-[#ff5709] flex justify-around py-7">
        <div className="py-3"> <img className="w-40 h-12  " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" /> </div>
        <div className="text-white font-bold flex justify-center gap-7 p-3 items-center" >
          <a className="p-2   " target="_blank" href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
          <a className="p-2 " target="_blank" href="https://partner.swiggy.com/login#/swiggy">Partner with you</a>
          <a className="border-b-amber-100 rounded-2xl border p-2 " target="_blank" href="https://partner.swiggy.com/login#/swiggy"> Get the app</a>
          <a className="bg-black rounded-2xl p-2" target="_blank" href="https://partner.swiggy.com/login#/swiggy"> Sign in</a>
        </div>
      </div>


      <div className="bg-[#ff5900] pt-16 pb-8  flex items-center relative" >
        <img className="w-62 h-112 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />
         <div className="mx-60">
            <div className=" text-white font-bold text-5xl  h-30 container text-center  " >Order Food & groceries. Discover Best Restaurants.Swiggy it!</div>
            <div id="search2" className="flex gap-7 mx-42">
                <input type="text" placeholder="Delhi.India" className=" bg-amber-50 rounded-xl w-70 h-15 px-3 " />
                <input type="text" placeholder="search for restaurant,item or more" className=" bg-amber-50 rounded-xl w-120 px-3 border-amber-50 " />
            </div>
         </div>
        <img className="w-62 h-112 absolute top-0 right-0 " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />
      </div>



      <div className="bg-[#ff5900] h-82">
        <div className="flex justify-around mx-80 w-[60%]" >
          
           <Link to="/restaurant" >
             <img className="h-72 w-73" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" />
           </Link>
           <a href="https://www.swiggy.com/restaurants">
            <img className="h-72 w-73" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
           </a>
           <Link to="/">
            <img  className="h-72 w-73"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
          </Link>
        </div>
        
      </div>
    </>
  );
}
