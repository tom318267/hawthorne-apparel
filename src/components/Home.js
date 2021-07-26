import React from "react";

const Home = () => {
  return (
    <div className="bg-home w-full h-screen bg-cover bg-center">
      <div className="bg-overlay w-full h-screen">
        <div className="flex flex-col justify-center items-center text-center h-screen">
          <h1 className="text-white animate__animated animate__fadeInUp text-5xl sm:text-6xl md:text-7xl leading-tight sm:leading-normal md:leading-normal lg:leading-normal xl:leading-normal font-oran font-bold tracking-tight uppercase mb-1">
            Dress To Impress
          </h1>
          <p className="sub-heading text-white font-noto font-thin text-xl w-1/2 mb-5">
            We're here to help you look your best!
          </p>
          <button className="bg-white hvr-fade font-petrona text-xl font-semibold p-3 w-1/3 rounded-full">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
