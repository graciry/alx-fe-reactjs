import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#3E2723] text-white py-8">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        {/* Contact Info */}
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Reach Us</h3>
          <p>
            Email:{" "}
            <a
              href="mailto:ngunyigwothaya@gmail.com"
              className="text-[#C68E17] hover:text-[#F3E1D4] transition"
            >
              ngunyigwothaya@gmail.com
            </a>
          </p>
          <p className="mt-1">
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-[#C68E17] hover:text-[#F3E1D4] transition"
            >
              +254 793 928 330
            </a>
          </p>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} Pure Treats Cakes and Bakery. All
            Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
