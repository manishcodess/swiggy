import { useMemo, useState } from "react";
import RestCard from "./RestCard";
import { Restaurantdatamore } from "../utilitiesmore/Restaurantdatamore";

function parseCostForTwo(costText) {
  const parsed = Number(String(costText || "").replace(/[^\d]/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
}

function toPriceBand(cost) {
  if (cost <= 250) return "low";
  if (cost <= 350) return "mid";
  return "high";
}

export default function Restaurantscards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dishTerm, setDishTerm] = useState("");
  const [ratingFilter, setRatingFilter] = useState(false);
  const [vegOnly, setVegOnly] = useState(false);
  const [maxDelivery, setMaxDelivery] = useState("all");
  const [priceBand, setPriceBand] = useState("all");
  const [sortBy, setSortBy] = useState("none");

  const filteredRestaurants = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();
    const normalizedDish = dishTerm.trim().toLowerCase();

    let result = [...(Restaurantdatamore || [])].filter((item) => {
      const info = item?.info || {};
      const name = (info?.name || "").toLowerCase();
      const cuisines = (info?.cuisines || []).join(" ").toLowerCase();
      const avgRating = Number(info?.avgRating || 0);
      const deliveryTime = Number(info?.sla?.deliveryTime || 0);
      const cost = parseCostForTwo(info?.costForTwo);
      const isVeg = Boolean(info?.veg) || cuisines.includes("veg");

      const nameMatch =
        normalizedSearch.length === 0 ||
        name.includes(normalizedSearch) ||
        cuisines.includes(normalizedSearch);
      const dishMatch =
        normalizedDish.length === 0 ||
        cuisines.includes(normalizedDish) ||
        name.includes(normalizedDish);
      const ratingMatch = !ratingFilter || avgRating >= 4.2;
      const vegMatch = !vegOnly || isVeg;
      const deliveryMatch =
        maxDelivery === "all" || deliveryTime <= Number(maxDelivery);
      const priceMatch = priceBand === "all" || toPriceBand(cost) === priceBand;

      return (
        nameMatch &&
        dishMatch &&
        ratingMatch &&
        vegMatch &&
        deliveryMatch &&
        priceMatch
      );
    });

    if (sortBy === "fastest") {
      result.sort(
        (a, b) =>
          Number(a?.info?.sla?.deliveryTime || 999) -
          Number(b?.info?.sla?.deliveryTime || 999),
      );
    } else if (sortBy === "rating") {
      result.sort(
        (a, b) =>
          Number(b?.info?.avgRating || 0) - Number(a?.info?.avgRating || 0),
      );
    } else if (sortBy === "price") {
      result.sort(
        (a, b) =>
          parseCostForTwo(a?.info?.costForTwo) -
          parseCostForTwo(b?.info?.costForTwo),
      );
    }

    return result;
  }, [
    searchTerm,
    dishTerm,
    ratingFilter,
    vegOnly,
    maxDelivery,
    priceBand,
    sortBy,
  ]);

  return (
    <div className="w-[92%] mx-auto mt-8 mb-8">
      <h1 className="text-3xl font-bold mb-4">Restaurants</h1>

      <div className="grid md:grid-cols-2 gap-3 mb-3">
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 text-lg"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search restaurants or cuisines"
        />
        <input
          className="border border-gray-300 rounded-lg px-4 py-2 text-lg"
          type="text"
          value={dishTerm}
          onChange={(e) => setDishTerm(e.target.value)}
          placeholder="Search dishes (by dish/cuisine keyword)"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3 mb-5">
        <label className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-2 rounded-lg">
          <input
            type="checkbox"
            checked={ratingFilter}
            onChange={() => setRatingFilter((prev) => !prev)}
          />
          Rating 4.2+
        </label>

        <label className="flex items-center gap-2 text-sm bg-gray-100 px-3 py-2 rounded-lg">
          <input
            type="checkbox"
            checked={vegOnly}
            onChange={() => setVegOnly((prev) => !prev)}
          />
          Veg only
        </label>

        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={maxDelivery}
          onChange={(e) => setMaxDelivery(e.target.value)}
        >
          <option value="all">Delivery: Any</option>
          <option value="20">Within 20 mins</option>
          <option value="30">Within 30 mins</option>
          <option value="40">Within 40 mins</option>
        </select>

        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={priceBand}
          onChange={(e) => setPriceBand(e.target.value)}
        >
          <option value="all">Price: All</option>
          <option value="low">Low</option>
          <option value="mid">Mid</option>
          <option value="high">High</option>
        </select>

        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="none">Sort: Recommended</option>
          <option value="fastest">Fastest delivery</option>
          <option value="rating">Highest rated</option>
          <option value="price">Price low to high</option>
        </select>
      </div>

      <p className="text-gray-600 mb-5">
        {filteredRestaurants.length} restaurants found
      </p>

      {filteredRestaurants.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <p className="text-xl font-semibold">No matches found</p>
          <p className="text-gray-600 mt-1">
            Try changing search text, filters, or sort options.
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap gap-4">
          {filteredRestaurants.map((item) => (
            <RestCard key={item?.info?.id} restprop={item} />
          ))}
        </div>
      )}
    </div>
  );
}
