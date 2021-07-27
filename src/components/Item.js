import React from "react";

const Item = ({ name, price, img }) => {
  return (
    <div class="p-10">
      <div class="max-w-xs rounded overflow-hidden shadow-lg">
        <img class="w-full" src={img} alt="Mountain" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{name}</div>
          <p class="text-gray-700 text-base mb-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <p>${price}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
