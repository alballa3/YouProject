"use client";

import { useEffect, useState } from "react";
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
import { useForm, usePage } from "@inertiajs/react";
import LatestProducts from "@/components/pages/product/product";
import moment from "moment";



export default function ProductPage() {
    const [selectedSize, setSelectedSize] = useState("");
    const [mainImage, setMainImage] = useState(""); // Initialize as empty
    const { data, setData, post, processing, errors } = useForm({
        rating: 5,
        text: "This product is Great"
    });
    const { product } = usePage().props;
    useEffect(() => {
        setMainImage(product.image[0]); // Set the main image to the first image in the array

    }, [])
    const handleSubmitReview = async (e) => {
        e.preventDefault();
        post(`/product/${product.id}`, {
            preserveScroll: true,
        })
        console.log(data)

    };

    if (!product) {
        return (
            <Layout>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <p>Loading product...</p>
                </div>
            </Layout>
        );
    }

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
                                {product.image.map((image, index) => (
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
                                                src={image.startsWith("https") ? image : `/storage/${image}`}

                                                alt={product.name}
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
                                src={mainImage.startsWith("https") ? mainImage : `/storage/${mainImage}`}
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
                                        className={`${product.argReviews > rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                            } h-5 w-5 flex-shrink-0`}
                                        aria-hidden="true"
                                    />
                                ))}
                                <p className="sr-only">
                                    {product?.argReviews} out of 5 stars
                                </p>
                                <a
                                    href="#reviews"
                                    className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    {product?.totalReviews} reviews
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
                                                className={`${selectedSize === size
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
                <LatestProducts />
                {/* Reviews section */}
                <div className="mt-16 lg:mt-24" id="reviews">
                    <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
                        Customer Reviews
                    </h2>
                    <div className="mt-6 border-t border-gray-200 pt-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <p className="text-3xl font-bold text-gray-900 mr-2">
                                    {Number(product.argReviews).toFixed()}
                                </p>
                                <div className="flex items-center">
                                    {[0, 1, 2, 3, 4].map((rating) => (
                                        <Star
                                            key={rating}
                                            className={`${product.argReviews > rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                                } h-5 w-5 flex-shrink-0`}
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-gray-500">
                                {/* Based on {product.reviews} reviews */}
                            </p>
                        </div>

                        <div className="mt-8">
                            {product.reviews && product.reviews.map((review) => (
                                <div
                                    key={review.id}
                                    className="border-b border-gray-200 py-6"
                                >
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-medium text-gray-900">
                                                {review.user.name}
                                            </h3>
                                            <p className="text-sm text-gray-500">
                                                {moment(review.created_at).fromNow()}
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            {[0, 1, 2, 3, 4].map((rating) => (
                                                <Star
                                                    key={review.rating}
                                                    className={`${review.rating > rating
                                                        ? "text-yellow-400"
                                                        : "text-gray-300"
                                                        } h-5 w-5 flex-shrink-0`}
                                                    aria-hidden="true"
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-4 text-base text-gray-900">
                                        {review.text}
                                    </p>

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
                                    value={data.rating}
                                    onChange={(e) =>
                                        setData("rating", Number(e.target.value))
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
                                    value={data.text}
                                    onChange={(e) =>
                                        setData("text", e.target.value)
                                    }
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Write your review here..."
                                ></textarea>
                            </div>
                            {errors.error && <p className=" text-red-500">{errors.error}</p>}
                            <div className="mt-4">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Submit Review
                                </button>
                            </div>
                            {/* <ToastContainer/> */}
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
