import React, { useState } from "react";
import emailjs from "emailjs-com";
import Chocochip from "../assets/Chocochip.jpg";
import Crolls from "../assets/Crolls.jpg";
import browniess from "../assets/browniess.jpg";
import cslices from "../assets/cslices.jpg";
import muffins from "../assets/muffins.jpg";
import donuts from "../assets/donuts.jpg";

const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const products = [
        {
            name: "Chocolate Chip Cookies",
            description: "Freshly baked with gooey chocolate chips.",
            image: Chocochip,
        },
        {
            name: "Cinnamon Rolls",
            description: "Warm, soft, and filled with cinnamon goodness.",
            image: Crolls,
        },
        {
            name: "Gourmet Brownies",
            description: "Rich and decadent with a fudgy texture.",
            image: browniess,
        },
        {
            name: "Cake Slices",
            description: "Delicious slices of our signature cakes.",
            image: cslices,
        },
        {
            name: "Muffins",
            description: "Perfectly fluffy and packed with flavor.",
            image: muffins,
        },
        {
            name: "Donuts",
            description: "Deliciously glazed and irresistibly soft, perfect for any time of day.",
            image: donuts,
        },
    ];

    const handleOrderNow = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();

        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const amount = e.target.amount.value.trim();
        const deliveryPlace = e.target.deliveryPlace.value.trim();
        const message = e.target.message.value.trim() || "No additional details provided";

        if (!name || !email || !amount || !deliveryPlace) {
            alert("All fields marked with * are required.");
            return;
        }

        emailjs
            .send(
                "service_hx3jbrr",
                "template_0029lbz",
                {
                    name,
                    email,
                    product: selectedProduct?.name,
                    amount,
                    deliveryPlace,
                    message,
                },
                "Zv4TIncqK112ftgqa"
            )
            .then(
                () => {
                    alert(`Order for ${selectedProduct.name} has been successfully placed!`);
                    handleCloseModal();
                },
                (error) => {
                    console.error("Error:", error.text);
                    alert("Failed to send order. Please try again.");
                }
            );
    };

    return (
        <section className="py-16 bg-[#F5F5DC] text-[#4E342E]">
            <div id="products" className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-[#D6A679]">
                    Our Delicious Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 object-cover rounded-lg mb-6"
                            />
                            <h3 className="text-xl font-semibold text-[#4E342E] mb-2">
                                {product.name}
                            </h3>
                            <p className="text-center text-[#7E7B7B] mb-4">
                                {product.description}
                            </p>
                            <button
                                onClick={() => handleOrderNow(product)}
                                className="px-6 py-3 bg-[#D6A679] text-white font-semibold rounded-md shadow-md hover:bg-[#B78461] transition duration-200"
                            >
                                Order Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
                        <button
                            onClick={handleCloseModal}
                            className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
                        >
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold text-center text-[#4E342E] mb-4">
                            Order {selectedProduct.name}
                        </h2>
                        <form onSubmit={handleSubmitOrder}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-[#4E342E] font-semibold">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-[#D6A679]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-[#4E342E] font-semibold">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-[#D6A679]"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="amount" className="block text-[#4E342E] font-semibold">
                                    Amount*
                                </label>
                                <input
                                    type="number"
                                    id="amount"
                                    name="amount"
                                    min="1"
                                    defaultValue="1"
                                    required
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-[#D6A679]"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="deliveryPlace"
                                    className="block text-[#4E342E] font-semibold"
                                >
                                    Delivery Place*
                                </label>
                                <input
                                    type="text"
                                    id="deliveryPlace"
                                    name="deliveryPlace"
                                    required
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-[#D6A679]"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="message"
                                    className="block text-[#4E342E] font-semibold"
                                >
                                    Additional Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:ring-2 focus:ring-[#D6A679]"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#D6A679] text-white py-2 rounded-lg hover:bg-[#4E342E] transition"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Products;
