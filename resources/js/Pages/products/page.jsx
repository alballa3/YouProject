"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Star,
    ShoppingCart,
    Heart,
    Truck,
    RefreshCcw,
    Shield,
    ThumbsUp,
    ThumbsDown,
} from "lucide-react";
import Layout from "@/components/layout";

const product = {
    name: "Urban Zip Hoodie",
    price: 79.99,
    rating: 4.5,
    reviews: 128,
    description:
        "Experience ultimate comfort with our Urban Zip Hoodie. Crafted from premium materials, this hoodie combines style with functionality, perfect for your urban adventures.",
    features: [
        "Made with 80% organic cotton and 20% recycled polyester",
        "Soft brushed interior for extra comfort",
        "Ribbed cuffs and hem for a snug fit",
        "Kangaroo pocket for convenience",
        "YKK zipper for durability",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy"],
    images: [
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
    ],
};

const reviews = [
    {
        id: 1,
        rating: 5,
        content:
            "This hoodie is amazing! The quality is top-notch, and it's so comfortable. I wear it all the time.",
        author: "Emily S.",
        date: "May 15, 2023",
        helpful: 24,
        notHelpful: 2,
    },
    {
        id: 2,
        rating: 4,
        content:
            "Great hoodie overall. The fit is perfect, but I wish there were more color options.",
        author: "Michael R.",
        date: "April 30, 2023",
        helpful: 18,
        notHelpful: 1,
    },
    {
        id: 3,
        rating: 5,
        content:
            "I love how eco-friendly this hoodie is! It's soft, warm, and stylish. Definitely worth the price.",
        author: "Sarah L.",
        date: "June 2, 2023",
        helpful: 31,
        notHelpful: 0,
    },
];

export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [mainImage, setMainImage] = useState(product.images[0]);
    const [reviewContent, setReviewContent] = useState("");
    const [reviewRating, setReviewRating] = useState(5);

    const handleSubmitReview = (e) => {
        e.preventDefault();
        // Here you would typically send the review to your backend
        console.log("Review submitted:", {
            content: reviewContent,
            rating: reviewRating,
        });
        // Reset form
        setReviewContent("");
        setReviewRating(5);
    };

    return (
        <Layout>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
                    {/* Image gallery */}
                    <motion.div
                        className="flex flex-col-reverse"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="hidden mt-6 w-full max-w-2xl mx-auto sm:block lg:max-w-none">
                            <div
                                className="grid grid-cols-4 gap-6"
                                aria-orientation="horizontal"
                                role="tablist"
                            >
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setMainImage(image)}
                                        className="relative h-24 bg-white rounded-md flex items-center justify-center text-sm font-medium uppercase text-gray-900 cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                    >
                                        <span className="sr-only">
                                            {product.name} image {index + 1}
                                        </span>
                                        <span className="absolute inset-0 rounded-md overflow-hidden">
                                            <img
                                                src={
                                                    image || "/placeholder.svg"
                                                }
                                                alt=""
                                                className="w-full h-full object-center object-cover"
                                                layout="fill"
                                            />
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="w-full aspect-w-1 aspect-h-1">
                            <img
                                src={mainImage || "/placeholder.svg"}
                                alt={product.name}
                                className="w-full h-full object-center object-cover sm:rounded-lg"
                                width={600}
                                height={600}
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Product info */}
                    <motion.div
                        className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
                            {product.name}
                        </h1>

                        <div className="mt-3 flex items-center justify-between">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl text-gray-900">
                                ${product.price}
                            </p>
                            <div className="flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                    <Star
                                        key={rating}
                                        className={`${
                                            product.rating > rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        } h-5 w-5 flex-shrink-0`}
                                        aria-hidden="true"
                                    />
                                ))}
                                <p className="sr-only">
                                    {product.rating} out of 5 stars
                                </p>
                                <a
                                    href="#reviews"
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    {product.reviews} reviews
                                </a>
                            </div>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <p className="text-base text-gray-900">
                                {product.description}
                            </p>
                        </div>

                        <div className="mt-6">
                            <h3 className="text-sm font-medium text-gray-900">
                                Features
                            </h3>
                            <ul className="mt-2 space-y-2">
                                {product.features.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center"
                                    >
                                        <Shield className="h-5 w-5 text-green-500 mr-2" />
                                        <span className="text-sm text-gray-500">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <form className="mt-6">
                            {/* Colors */}
                            <div>
                                <h3 className="text-sm font-medium text-gray-900">
                                    Color
                                </h3>
                                <div className="mt-2">
                                    <div className="flex items-center space-x-3">
                                        {product.colors.map((color) => (
                                            <button
                                                key={color}
                                                type="button"
                                                className={`relative p-0.5 rounded-full flex items-center justify-center focus:outline-none ${
                                                    selectedColor === color
                                                        ? "ring-2 ring-offset-2 ring-gray-900"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    setSelectedColor(color)
                                                }
                                            >
                                                <span className="sr-only">
                                                    {color}
                                                </span>
                                                <span
                                                    aria-hidden="true"
                                                    className={`h-8 w-8 border border-black border-opacity-10 rounded-full ${
                                                        color.toLowerCase() ===
                                                        "black"
                                                            ? "bg-gray-900"
                                                            : color.toLowerCase() ===
                                                              "gray"
                                                            ? "bg-gray-400"
                                                            : "bg-blue-900"
                                                    }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Sizes */}
                            <div className="mt-6">
                                <h3 className="text-sm font-medium text-gray-900">
                                    Size
                                </h3>
                                <div className="mt-2">
                                    <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
                                        {product.sizes.map((size) => (
                                            <button
                                                key={size}
                                                type="button"
                                                className={`${
                                                    selectedSize === size
                                                        ? "bg-gray-900 text-white"
                                                        : "bg-white text-gray-900 border-gray-200 hover:bg-gray-50"
                                                } border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
                                                onClick={() =>
                                                    setSelectedSize(size)
                                                }
                                            >
                                                {size}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                >
                                    <ShoppingCart className="w-5 h-5 mr-2" />
                                    Add to cart
                                </motion.button>
                            </div>
                            <div className="mt-4">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full bg-white border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                >
                                    <Heart className="w-5 h-5 mr-2" />
                                    Add to wishlist
                                </motion.button>
                            </div>
                        </form>

                        <div className="mt-6 border-t border-gray-200 pt-6">
                            <h3 className="text-sm font-medium text-gray-900">
                                Shipping & Returns
                            </h3>
                            <div className="mt-4 space-y-3">
                                <div className="flex items-center">
                                    <Truck className="h-5 w-5 text-gray-400 mr-2" />
                                    <p className="text-sm text-gray-500">
                                        Free shipping on orders over $100
                                    </p>
                                </div>
                                <div className="flex items-center">
                                    <RefreshCcw className="h-5 w-5 text-gray-400 mr-2" />
                                    <p className="text-sm text-gray-500">
                                        Free 30-day returns
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Reviews section */}
                <div className="mt-16 lg:mt-24" id="reviews">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Customer Reviews
                    </h2>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <p className="text-3xl font-bold text-gray-900 mr-2">
                                    {product.rating}
                                </p>
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <Star
                                            key={rating}
                                            className={`${
                                                product.rating > rating
                                                    ? "text-yellow-400"
                                                    : "text-gray-300"
                                            } h-5 w-5 flex-shrink-0`}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">
                                Based on {product.reviews} reviews
                            </p>
                        </div>

                        <div className="mt-8">
                            {reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="border-b border-gray-200 py-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium text-gray-900">
                                                {review.author}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {review.date}
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <Star
                                                    key={rating}
                                                    className={`${
                                                        review.rating > rating
                                                            ? "text-yellow-400"
                                                            : "text-gray-300"
                                                    } h-5 w-5 flex-shrink-0`}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-4 text-base text-gray-900">
                                        {review.content}
                                    </p>
                                    <div className="mt-4 flex items-center space-x-4">
                                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                                            <ThumbsUp className="h-4 w-4 mr-1" />
                                            Helpful ({review.helpful})
                                        </button>
                                        <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                                            <ThumbsDown className="h-4 w-4 mr-1" />
                                            Not Helpful ({review.notHelpful})
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Add review form */}
                        <form onSubmit={handleSubmitReview} className="mt-8">
                            <h3 className="text-lg font-medium text-gray-900">
                                Write a review
                            </h3>
                            <div className="mt-4">
                                <label
                                    htmlFor="rating"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Rating
                                </label>
                                <select
                                    id="rating"
                                    name="rating"
                                    value={reviewRating}
                                    onChange={(e) =>
                                        setReviewRating(Number(e.target.value))
                                    }
                                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                >
                                    <option value={5}>5 stars</option>
                                    <option value={4}>4 stars</option>
                                    <option value={3}>3 stars</option>
                                    <option value={2}>2 stars</option>
                                    <option value={1}>1 star</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label
                                    htmlFor="review"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Review
                                </label>
                                <textarea
                                    id="review"
                                    name="review"
                                    rows={4}
                                    value={reviewContent}
                                    onChange={(e) =>
                                        setReviewContent(e.target.value)
                                    }
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Write your review here..."
                                ></textarea>
                            </div>
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit Review
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
