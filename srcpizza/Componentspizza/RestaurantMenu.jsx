//pizza hut menu(we come here first parent)

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MenuCard from "./MenuCard";
import { Pizzadata } from "../Utilitiespizza/Pizzadata";


export default function RestaurantMenu() {
  const { id } = useParams(); // route: /city/delhi/:id
  console.log("Route id:", id);

  const [restData, setRestData] = useState([]);

  useEffect(() => {
    // using local JSON instead of fetch
    const allCards =
      Pizzadata?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
      [];

    // keep only sections which have a "title" inside card.card
    const filterData = allCards.filter((item) => "title" in (item?.card?.card || {}));

    setRestData(filterData);
  }, []);

  console.log("Menu sections:", restData);

  return (
    <div className="w-[80%] mx-auto mt-20">
      {restData.map((menuSection) => (
        <MenuCard
          key={menuSection?.card?.card?.title}
          menuItems={menuSection?.card?.card}
        />
      ))}
    </div>
  );
}
