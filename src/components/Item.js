import React, { useEffect } from "react";
import Aos from "aos";

const Item = ({ name, price, img }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="p-10">
      <div className="max-w-xs rounded overflow-hidden shadow-lg font-quest">
        <img className="w-full" src={img} alt="Mountain" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base mb-2">
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
