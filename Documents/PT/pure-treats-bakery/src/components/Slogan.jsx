import React from "react";
import logo from "../assets/logo.jpg"; // Update with your logo path

const Slogan = () => {
  return (
    <section className="relative h-64 md:h-96 flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${logo})`, // Use your logo or background image
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 hover:bg-opacity-70"></div>

      {/* Slogan Text */}
      <div className="relative z-10 text-center">
        <h2 className="text-white text-3xl md:text-5xl font-bold italic tracking-wide">
          "Where Every Bite Brings You Joy"
        </h2>
      </div>
    </section>
  );
};

export default Slogan;
