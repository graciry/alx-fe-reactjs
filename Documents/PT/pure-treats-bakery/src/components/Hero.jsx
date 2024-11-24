import React from "react";
import dough from "../assets/dough.jpg";

const Hero = () => {
    return (
        <section
            className="relative h-screen bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${dough})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E] via-[#D6A679] to-transparent opacity-90"></div>

            {/* Content */}
            <div id="home" className="relative z-10 flex items-center justify-start h-full px-10 lg:px-20">
                <div className="max-w-xl">
                    <h1 className="text-5xl font-bold leading-tight text-[#F5F5DC]">
                        Welcome to Pure Treats Cakes & Bakery
                    </h1>
                    <p className="mt-4 text-lg text-[#F5F5DC]">
                        Indulge in our freshly baked delights: Chocolate Chip Cookies, Cinnamon Rolls, Gourmet Brownies, Cake Slices, and Muffins. Your happiness is our top priority.
                    </p>
                    <a href="#menu">
                        <button className="mt-6 px-6 py-3 bg-[#D6A679] text-[#4E342E] font-semibold rounded shadow-lg hover:bg-[#b78461]">
                            Explore Our Menu
                        </button>
                    </a>

                </div>
            </div>
        </section>
    );
};

export default Hero;
