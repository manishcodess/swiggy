export default function DineCard({ RestData }) {
  return (
    <div className="max-w-sm min-w-[260px] flex-none sm:min-w-[300px]">
      <a target="_blank" href={RestData.cta.link}>
        <div className="relative">
          {" "}
          {/*will use 3 absolute so parent is set relative  */}
          <img
            className="h-52 w-full rounded-2xl object-cover sm:h-56"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              RestData?.info?.mediaFiles[0]?.url
            }
            alt="Restaurant"
          />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-black to-transparent"></div>
          <p className="absolute bottom-2 left-2 text-xl text-white z-10">
            {RestData.info.name}
          </p>
          <p className="absolute bottom-2 right-2 text-xl text-white z-10">
            {RestData?.info?.rating?.value}
          </p>
        </div>

        <div className="min-h-30 w-full rounded-b-3xl bg-amber-50 p-2 text-sm">
          <div>{RestData.info.costForTwo}</div>
          <div>{RestData.info.locationInfo.distanceString}</div>
          <div className="mx-auto mt-3 h-7 w-[90%] rounded-2xl bg-green-700 px-2 text-center text-amber-50">
            {" "}
            {RestData?.info?.offerInfoV2?.otherOffers?.offers?.[0]?.header}
          </div>
        </div>
      </a>
    </div>
  );
}
