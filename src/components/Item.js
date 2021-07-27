import React from "react";

const Item = ({ name, price, img }) => {
  return (
    <div class="p-10">
      <div class="max-w-xs rounded overflow-hidden shadow-lg font-quest">
        <img class="w-full" src={img} alt="Mountain" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
          <p class="text-gray-700 text-base mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <p className="font-bold">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
