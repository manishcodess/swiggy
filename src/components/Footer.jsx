export default function Footer() {
  return (
    <div className="bg-gray-900 h-50 w-full text-amber-50 text-4xl">
    <div className="flex flex-col justify-center items-center h-full">
        <p className="text-2xl font-bold mb-4">Get The Swiggy App now!</p>
        <div className="flex gap-4">
            <button className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded text-sm font-semibold text-gray-900">
                Download for iOS
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 px-6 py-2 rounded text-sm font-semibold text-gray-900">
                Download for Android
            </button>
        </div>
    </div>
    </div>
  );
}
