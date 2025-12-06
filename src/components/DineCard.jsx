export default function DineCard({ RestData }) {
  return (
    <div className="max-w-sm flex-none ">
      <a target="_blank" href={RestData.cta.link}>

        <div className="relative"> {/*will use 3 absolute so parent is set relative  */}
          <img
            className="w-80 h-50 object-cover rounded-2xl"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt="Restaurant"
          />

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>

          <p className="absolute bottom-2 left-2 text-xl text-white z-10">
            {RestData.info.name}
          </p>
          <p className="absolute bottom-2 right-2 text-xl text-white z-10">
            {RestData?.info?.rating?.value}
          </p>
        </div>

        <div className="h-30 w-80 bg-amber-50 rounded-b-3xl p-2 text-sm">
          <div className=" w-50">{RestData.info.costForTwo}</div>
          <div className=" w-50">{RestData.info.locationInfo.distanceString}</div>
          <div className="bg-green-700 m-3 h-7 w-[80%] ml-7 rounded-2xl text-center text-amber-50 "> {RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header}</div>
        </div>
        
      </a>
    </div>
  );
}
