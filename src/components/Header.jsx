import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

{
  /* <a> (anchor tag) → for external websites
👉 <Link> → for internal navigation inside a React app */
}
export default function Header() {
  const { currentUser, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("Delhi");

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchText.trim();
    if (query) {
      navigate(`/restaurant?q=${encodeURIComponent(query)}`);
      return;
    }

    navigate("/restaurant");
  };

  return (
    <>
      <header className="bg-[#ff5709] py-3 sm:py-4">
        <div className="container mx-auto flex flex-col gap-3 px-4 md:flex-row md:items-center md:justify-between">
          <div className="py-2">
            <img
              className="h-10 w-auto sm:h-12"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
              alt="Swiggy logo"
            />
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white sm:gap-3 sm:text-base md:w-auto md:justify-end">
            <a
              className="p-2"
              target="_blank"
              href="https://www.swiggy.com/corporate/"
            >
              Swiggy Corporate
            </a>
            <a
              className="p-2"
              target="_blank"
              href="https://partner.swiggy.com/login#/swiggy"
            >
              Partner with you
            </a>
            <a
              className="rounded-2xl border border-amber-100 p-2"
              target="_blank"
              href="https://partner.swiggy.com/login#/swiggy"
            >
              {" "}
              Get the app
            </a>
            {isAuthenticated ? (
              <>
                <span className="bg-black rounded-2xl p-2">
                  Hi, {currentUser?.name}
                </span>
                <button
                  className="border border-black rounded-2xl p-2 text-black bg-white"
                  onClick={logout}
                  type="button"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="bg-black rounded-2xl p-2" to="/login">
                  Sign in
                </Link>
                <Link
                  className="border border-white rounded-2xl p-2"
                  to="/signup"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <section className="relative bg-[#ff5900] py-10 sm:py-16">
        <img
          className="absolute top-4 left-4 hidden w-52 md:block"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="veggies decoration"
        />
        <div className="container mx-auto px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Order food & groceries. Discover the best restaurants near you.
          </h1>
          <form
            id="search2"
            className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:items-center md:flex-row"
            onSubmit={handleSearch}
            role="search"
            aria-label="Find restaurants and items"
          >
            <input
              type="text"
              placeholder="Location (e.g. Delhi)"
              className="w-full rounded-xl bg-amber-50 px-3 py-2 sm:w-80 md:w-64"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              aria-label="Location"
            />
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="w-full rounded-xl bg-amber-50 px-3 py-2 sm:w-80 md:w-96"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              aria-label="Search query"
            />
            <button
              className="w-full rounded-xl bg-black px-4 py-2 text-white sm:w-auto"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <img
          className="absolute top-4 right-4 hidden w-48 md:block"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="sushi decoration"
        />
      </section>

      <div className="bg-[#ff5900]">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 pb-6 sm:flex-row sm:gap-6">
          <Link to="/restaurant">
            <img
              className="h-auto w-full max-w-xs sm:max-w-[260px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
              alt="Food delivery banner"
            />
          </Link>
          <a href="https://www.swiggy.com/restaurants">
            <img
              className="h-auto w-full max-w-xs sm:max-w-[260px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
              alt="Instamart banner"
            />
          </a>
          <Link to="/">
            <img
              className="h-auto w-full max-w-xs sm:max-w-[260px]"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
              alt="Dineout banner"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
