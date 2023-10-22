import { useState } from "react";
import ItemList from "./ItemList";

const ResCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  console.log(data);
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 p-4  shadow-lg ">
        <div className="justify-between flex" onClick={handleClick}>
          <span className="text-lg font-bold">
            {data.title}({data.itemCards.length})
          </span>

          <span>🔽</span>
        </div>
        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default ResCategory;
