"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link, usePage } from "@inertiajs/react"
import Layout from "@/components/layout"
// const allProducts = [
//   {
//     id: 1,
//     name: "Urban Zip Hoodie",
//     price: 79.99,
//     rating: 4.5,
//     image:
//       "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//     featured: true,
//   },
//   {
//     id: 2,
//     name: "Street Comfort Pullover",
//     price: 69.99,
//     rating: 4.2,
//     image:
//       "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
//   },
//   {
//     id: 3,
//     name: "Cozy Chic Hoodie",
//     price: 89.99,
//     rating: 4.8,
//     image:
//       "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
//   },
//   {
//     id: 4,
//     name: "Metro Fleece Jacket",
//     price: 99.99,
//     rating: 4.6,
//     image:
//       "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
//   },
//   {
//     id: 5,
//     name: "Casual Comfort Sweater",
//     price: 59.99,
//     rating: 4.3,
//     image:
//       "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//   },
//   {
//     id: 6,
//     name: "Trendy Urban Jacket",
//     price: 109.99,
//     rating: 4.7,
//     image:
//       "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
//   },
//   {
//     id: 7,
//     name: "Lightweight Summer Hoodie",
//     price: 64.99,
//     rating: 4.4,
//     image:
//       "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80",
//   },
//   {
//     id: 8,
//     name: "Eco-Friendly Sweatshirt",
//     price: 74.99,
//     rating: 4.9,
//     image:
//       "https://images.unsplash.com/photo-1572495641004-28421ae52e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
//   },
// ]

export default function ProductsPage() {

  const [sortBy, setSortBy] = useState("featured")
  const { product } = usePage().props
  console.log(product[1].image)




  const featuredProduct = product.find((product) => product.reviews_avg_rating == 5)

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl md:text-7xl">
              Our Collection
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Discover comfort and style in every piece, crafted for the urban explorer in you.
            </p>
          </motion.div>

          {featuredProduct && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-24"
            >
              <Link href={`/product/${product.id}`} className="block">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Product</h2>
                <div className="bg-white shadow-2xl rounded-2xl overflow-hidden transform transition-all hover:scale-105">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0 relative">
                      <img
                        src={featuredProduct.image || "/placeholder.svg"}
                        alt={featuredProduct.name}
                        width={600}
                        height={400}
                        className="h-96 w-full object-cover md:w-96"
                      />
                      <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <h3 className="text-3xl font-semibold text-gray-900 mb-2">{featuredProduct.name}</h3>
                        <p className="text-xl text-gray-600 mb-6">
                          Experience ultimate comfort with our featured {featuredProduct.name.toLowerCase()}. Perfect for
                          any urban adventure.
                        </p>
                        <div className="flex items-center mb-6">
                          <span className="text-3xl font-bold text-gray-900">${featuredProduct.price.toFixed(2)}</span>
                          <span className="ml-4 text-lg text-gray-600 flex items-center">
                            {featuredProduct.rating}
                            <Star className="inline-block h-6 w-6 text-yellow-400 ml-1" />
                          </span>
                        </div>
                      </div>
                      <Button className="w-full text-lg py-6" size="lg">
                        <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}



          <AnimatePresence>
            <motion.div
              // key={currentPage + sortBy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {product.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/product/${product.id}`} className="block">
                    <div className="relative w-full h-52 overflow-hidden rounded-2xl bg-gray-200 transition-all duration-300 ease-in-out group-hover:shadow-xl">
                      {/* Set a fixed height to make all images uniform */}
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300 ease-in-out"
                      />

                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 ease-in-out" />
                    </div>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors duration-300">
                        {product.name}
                      </h3>
                      <div className="mt-2 flex justify-between items-center">
                        <p className="text-2xl font-medium text-gray-900">${product.price.toFixed(2)}</p>
                        <div className="flex items-center">
                          <Star className="h-5 w-5 text-yellow-400" />
                          <p className="ml-1 text-sm text-gray-500">{product.reviews_avg_rating.toFixed(1)}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Button
                    className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white transition-colors duration-300"
                    size="lg"
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                </motion.div>
              ))}

            </motion.div>
          </AnimatePresence>

          {/* <div className="mt-16 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <Button
                variant="outline"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Previous</span>
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </Button>
              {Array.from({ length: totalPages }).map((_, index) => (
                <Button
                  key={index}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  onClick={() => paginate(index + 1)}
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {index + 1}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">Next</span>
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </nav>
          </div> */}
        </div>
      </div>
    </Layout>
  )
}

