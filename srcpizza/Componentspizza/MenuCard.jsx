// shows just Recommended

import { useState } from "react";
import RestInfo from "./RestInfo";

export default function MenuCard({ menuItems }) {
  const [isOpen, setIsOpen] = useState(true);

  // Case 1: this section has nested categories
  if ("categories" in menuItems) {
    return (
      <div className="w-full">
        <p className="text-2xl font-bold">{menuItems.title}</p>
        <div>
          {menuItems?.categories?.map((cat) => (
            <MenuCard key={cat?.title} menuItems={cat} />
          ))}
        </div>
      </div>
    );
  }

  // Case 2: collapsed state
  if (!isOpen) {
    return (
      <div className="w-full">
        <div className="flex justify-between w-full">
          <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
          <button
            className="text-5xl font-bold mr-20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "^" : "⌄"}
          </button>
        </div>
        <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
      </div>
    );
  }

  // Case 3: open section with items
  return (
    <div className="w-full">
      <div className="flex justify-between w-full">
        <p className="text-3xl font-bold mb-4">{menuItems.title}</p>
        <button
          className="text-5xl font-bold mr-20"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "^" : "˯"}
        </button>
      </div>

      <div>
        {menuItems?.itemCards?.map((item) => (
          <RestInfo
            key={item?.card?.info?.id}
            restData={item?.card?.info}
          />
        ))}
      </div>

      <div className="h-5 bg-gray-200 mt-2 mb-2"></div>
    </div>
  );
}
