import React from "react";
import { ALL_NEW_DATA } from "../data";
import Item from "./Item";

const New = () => {
  return (
    <div className="font-quest">
      <h2 className="flex text-2xl justify-center font-noto pt-8">All New</h2>

      <div className="flex flex-col items-center">
        {ALL_NEW_DATA.map(({ name, price, img }) => (
          <Item name={name} price={price} img={img} />
        ))}
      </div>
    </div>
  );
};

export default New;
