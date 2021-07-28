import React from "react";

const Footer = () => {
  return (
    <div className="bg-black w-full flex justify-evenly font-quest text-white">
      <div className="flex flex-col p-8 list-none">
        <li>Home</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Contact</li>
      </div>
      <div className="flex flex-col p-8 list-none">
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Twitter</li>
      </div>
      <div className="flex flex-col p-8 list-none">
        <li>Terms of Use</li>
        <li>Affiliates</li>
        <li>Private Policy</li>
        <li>Support</li>
      </div>
    </div>
  );
};

export default Footer;
