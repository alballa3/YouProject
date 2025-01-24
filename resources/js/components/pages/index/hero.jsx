"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowRight,
    ShoppingBag,
    ChevronLeft,
    ChevronRight,
    Truck,
    RefreshCcw,
    ThumbsUp,
} from "lucide-react";

const products = [
    {
        name: "Urban Zip Hoodie",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        price: "$79.99",
        description: "Sleek and comfortable, perfect for city life.",
    },
    {
        name: "Street Comfort Pullover",
        image: "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        price: "$69.99",
        description: "Casual style meets ultimate comfort.",
    },
    {
        name: "Nigga Plush Hoodie",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtJSndCw7tnLgUzpolwGlKxiEYbdhEt9PxGA&s",
        price: "$89.99",
        description: "Cool Guy Who love You :)",
    },
];

const useTypingEffect = (text, speed = 50) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return displayedText;
};

export default function HeroSection() {
    const [currentProductIndex, setCurrentProductIndex] = useState(0);
    const typedText = useTypingEffect("Your Original Unity");

    const nextProduct = useCallback(() => {
        setCurrentProductIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, []);

    const prevProduct = useCallback(() => {
        setCurrentProductIndex(
            (prevIndex) => (prevIndex - 1 + products.length) % products.length
        );
    }, []);

    useEffect(() => {
        const interval = setInterval(nextProduct, 5000);
        return () => clearInterval(interval);
    }, [nextProduct]);

    return (
        <section className="relative min-h-screen bg-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('/assets/subtle-pattern.png')] opacity-5"></div>

            {/* Content Section */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col lg:flex-row items-center justify-between">
                {/* Left Section */}
                <motion.div
                    className="lg:w-1/2 text-black mb-12 lg:mb-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
                            {typedText}
                        </span>
                        <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-gray-600">
                        Simple Yet powerful
                        </span>
                    </h1>
                    <p className="text-xl mb-8 text-gray-600">
                        Experience the perfect blend of comfort and cutting-edge
                        urban aesthetics with our premium hoodies.
                    </p>
                    <div className="flex flex-wrap gap-4 mb-8">
                        <motion.button
                            className="group bg-black text-white hover:bg-gray-800 transition-colors duration-300 text-lg px-8 py-4 rounded-full font-semibold flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Shop Now
                            <ShoppingBag className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                        <motion.button
                            className="group bg-transparent border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-lg px-8 py-4 rounded-full font-semibold flex items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Our Story
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </div>
                    <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                        <Feature icon={<Truck />} text="Free Shipping" />
                        <Feature icon={<RefreshCcw />} text="30-Day Returns" />
                        <Feature
                            icon={<ThumbsUp />}
                            text="Satisfaction Guaranteed"
                        />
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    className="w-full lg:w-1/2 max-w-xl mx-auto p-4"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <ProductCarousel
                        products={products}
                        currentProductIndex={currentProductIndex}
                        setCurrentProductIndex={setCurrentProductIndex}
                    />
                </motion.div>
            </div>
        </section>
    );
}

const Feature = ({ icon, text }) => (
    <div className="flex items-center">
        <span className="w-5 h-5 mr-2">{icon}</span>
        {text}
    </div>
);

const ProductCarousel = ({ products, currentProductIndex, setCurrentProductIndex }) => {
    return (
        <div className="relative">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentProductIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full aspect-square sm:aspect-video lg:aspect-[3/4]"
                >
                    <img
                        src={products[currentProductIndex]?.image || "/placeholder.svg"}
                        alt={products[currentProductIndex]?.name || "Product"}
                        className="rounded-lg shadow-2xl w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {products.map((_, index) => (
                    <motion.button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === currentProductIndex
                                ? "bg-black"
                                : "bg-gray-300"
                        }`}
                        onClick={() => setCurrentProductIndex(index)}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.8 }}
                    />
                ))}
            </div>
        </div>
    );
};
