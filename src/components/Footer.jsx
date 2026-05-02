export default function Footer() {
  return (
    <div className="w-full bg-gray-900 px-4 py-8 text-amber-50">
      <div className="flex h-full flex-col items-center justify-center">
        <p className="mb-4 text-center text-xl font-bold sm:text-2xl">
          Get The Swiggy App now!
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <button className="rounded bg-amber-500 px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-600">
            Download for iOS
          </button>
          <button className="rounded bg-amber-500 px-6 py-2 text-sm font-semibold text-gray-900 hover:bg-amber-600">
            Download for Android
          </button>
        </div>
      </div>
    </div>
  );
}
