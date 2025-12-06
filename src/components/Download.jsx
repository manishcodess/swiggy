export default function Swiggy() {
  return (
    <div className="p-4 bg-orange-50 text-center">
      <p className="text-lg font-semibold mb-4">
        For better experience, download the Swiggy app now
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="https://play.google.com/store/apps/details?id=in.swiggy.android"
          target="_blank"
        >
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Get it on Google Play"
          />
        </a>

        <a
          href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920"
          target="_blank"
        >
          <img
            className="w-40"
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
          />
        </a>
      </div>
    </div>
  );
}
