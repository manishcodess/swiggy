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
      <header className="bg-[#ff5709] py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="py-2">
            <img
              className="w-40 h-12"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
              alt="Swiggy logo"
            />
          </div>
          <div className="text-white font-semibold flex items-center gap-4">
            <a
              className="p-2   "
              target="_blank"
              href="https://www.swiggy.com/corporate/"
            >
              Swiggy Corporate
            </a>
            <a
              className="p-2 "
              target="_blank"
              href="https://partner.swiggy.com/login#/swiggy"
            >
              Partner with you
            </a>
            <a
              className="border-b-amber-100 rounded-2xl border p-2 "
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

      <section className="bg-[#ff5900] py-16 relative">
        <img
          className="hidden md:block w-52 absolute top-4 left-4"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="veggies decoration"
        />
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-white font-bold text-4xl md:text-5xl max-w-3xl mx-auto">
            Order food & groceries. Discover the best restaurants near you.
          </h1>
          <form
            id="search2"
            className="flex flex-col md:flex-row items-center gap-4 justify-center mt-6"
            onSubmit={handleSearch}
            role="search"
            aria-label="Find restaurants and items"
          >
            <input
              type="text"
              placeholder="Location (e.g. Delhi)"
              className="bg-amber-50 rounded-xl px-3 py-2 w-64"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              aria-label="Location"
            />
            <input
              type="text"
              placeholder="Search for restaurant, item or more"
              className="bg-amber-50 rounded-xl px-3 py-2 w-80"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              aria-label="Search query"
            />
            <button
              className="bg-black text-white rounded-xl px-4 py-2"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <img
          className="hidden md:block w-48 absolute top-4 right-4"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="sushi decoration"
        />
      </section>

      <div className="bg-[#ff5900]">
        <div className="flex justify-around container mx-auto px-4">
          <Link to="/restaurant">
            <img
              className="h-72 w-73"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            />
          </Link>
          <a href="https://www.swiggy.com/restaurants">
            <img
              className="h-72 w-73"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
              alt=""
            />
          </a>
          <Link to="/">
            <img
              className="h-72 w-73"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}
