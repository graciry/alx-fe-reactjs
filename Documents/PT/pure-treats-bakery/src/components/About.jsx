import React from "react";

// Importing the background image (ingredients)
import bakes from "../assets/bakes.jpg";

const About = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bakes})` }}>
      {/* Overlay to make text readable */}
      <div id="about" className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text content */}
      <div className="relative z-10 text-center text-white container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-[#D6A679] mb-6">About Pure Treats Cakes and Bakery</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Welcome to <strong>Pure Treats Cakes and Bakery</strong>, where every bite is a moment of happiness. We specialize in creating delicious, high-quality baked goods made with only the finest ingredients. Whether you're craving warm cinnamon rolls, decadent chocolate chip cookies, or custom cakes for your special occasion, we've got something to delight every taste.
        </p>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          We believe in baking with love, care, and a personal touch. Our small family bakery started with a passion for crafting treats that make memories. Today, we continue to deliver high-quality desserts with the same dedication to taste, freshness, and craftsmanship.
        </p>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Come visit us and taste the difference—each treat is made to be savored!
        </p>
      </div>
    </section>
  );
};

export default About;
