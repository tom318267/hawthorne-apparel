import React from "react";

const Sale = () => {
  return (
    <div className="font-quest">
      <div className="w-full flex">
        <div className="bg-gray py-6 text-lg w-1/2 flex justify-center">
          <h2 className="w-1/4 text-center flex">Suits starting at $100</h2>
        </div>
        <div className="bg-white py-6 text-lg w-1/2 flex justify-center">
          <h2 className="w-1/4 text-center flex">Designer suits 20% off</h2>
        </div>
      </div>

      <div className="flex justify-center bg-clearance bg-cover bg-center">
        <div className="flex justify-center text-xl py-20 bg-overlay w-full h-auto">
          <h2 className="w-1/3 text-center text-white">
            Check out our clearance items!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Sale;
