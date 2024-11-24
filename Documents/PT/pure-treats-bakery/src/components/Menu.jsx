import React from "react";
import menu1 from "../assets/menu1.png"; // Adjust the path if your assets folder is elsewhere
import menu2 from "../assets/menu2.png";

const Menu = () => {
  return (
    <section className="py-16 bg-[#F3E1D4]">
      <div id="menu" className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#4E342E] mb-8"> OUR MENU</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image 1 with Hover Overlay */}
          <div className="relative group">
            <img
              src={menu1}
              alt="Menu Page 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-2xl font-semibold"></span>
            </div>
          </div>

          {/* Image 2 with Hover Overlay */}
          <div className="relative group">
            <img
              src={menu2}
              alt="Menu Page 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <span className="text-white text-2xl font-semibold"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
