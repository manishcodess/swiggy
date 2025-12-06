export default function Restcardsmore({ Restaurantdatamore }) {
  return (
    <a href={Restaurantdatamore.cta.link} className="block">
      <div className="bg-slate-300 rounded-2xl m-4 w-64 text-black text-2xl cursor-pointer hover:scale-105 duration-150">

      
        <img
          className="h-48 w-64 rounded-2xl object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            Restaurantdatamore?.info?.cloudinaryImageId
          }
          alt={Restaurantdatamore?.info?.name}
        />

       
        <div className="text-left mt-3 m-2 text-xl font-bold">
          {Restaurantdatamore?.info?.name}

          <div className="text-sm font-medium">
            Rating – {Restaurantdatamore?.info?.avgRating}
          </div>

          <div className="text-sm mt-2 font-light">View more..</div>
        </div>

      </div>
    </a>
  );
}
