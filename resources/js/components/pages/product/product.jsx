"use client";

import { Link, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function LatestProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const respond = fetch("/product/least", {
            method: "GET",
        });
        respond
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Latest Products
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our newest arrivals, designed for ultimate
                        comfort and style.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-lg shadow-md overflow-hidden"
                        >
                            <Link href={`/product/${product.id}`}>
                                <div className="relative h-48 sm:h-64">
                                    <img
                                        src={
                                            product.image || "/placeholder.svg"
                                        }
                                        alt={product.name || "Product image"}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                        {product.name}
                                    </h3>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xl font-bold text-gray-900">
                                            ${product.price.toFixed(2)}
                                        </span>
                                        <div className="flex items-center">
                                            <Star className="w-5 h-5 text-yellow-400 mr-1" />
                                            <span className="text-sm text-gray-600">
                                                {Number(product.reviews_avg_rating).toFixed()}
                                            </span>
                                        </div>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full bg-black text-white py-2 px-4 rounded-full font-semibold flex items-center justify-center"
                                    >
                                        <ShoppingCart className="w-5 h-5 mr-2" />
                                        Add to Cart
                                    </motion.button>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
