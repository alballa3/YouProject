"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Link } from "@inertiajs/react"
import Layout from "@/components/layout"
const allProducts = [
  {
    id: 1,
    name: "Urban Zip Hoodie",
    price: 79.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 2,
    name: "Street Comfort Pullover",
    price: 69.99,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1578681994506-b8f463449011?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 3,
    name: "Cozy Chic Hoodie",
    price: 89.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
  },
  {
    id: 4,
    name: "Metro Fleece Jacket",
    price: 99.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80",
  },
  {
    id: 5,
    name: "Casual Comfort Sweater",
    price: 59.99,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 6,
    name: "Trendy Urban Jacket",
    price: 109.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
  },
  {
    id: 7,
    name: "Lightweight Summer Hoodie",
    price: 64.99,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80",
  },
  {
    id: 8,
    name: "Eco-Friendly Sweatshirt",
    price: 74.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1572495641004-28421ae52e52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
]

export default function ProductsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(8)

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = allProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  const totalPages = Math.ceil(allProducts.length / productsPerPage)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Layout>
        <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Our Collection
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">Discover comfort and style in every piece</p>
        </div>
        <div className="flex justify-end mb-8">
          <Select onValueChange={(value) => setProductsPerPage(Number(value))}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Products per page" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4">4 per page</SelectItem>
              <SelectItem value="8">8 per page</SelectItem>
              <SelectItem value="12">12 per page</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {currentProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group"
            >
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
  src={product.image || "/placeholder.svg"}
  alt={product.name}
  className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-300"
/>

              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link href={`/product/${product.id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.rating.toFixed(1)}
                    <Star className="inline-block h-4 w-4 text-yellow-400 ml-1" />
                  </p>
                </div>
                <p className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</p>
              </div>
              <Button className="w-full mt-4 bg-black hover:bg-gray-800 text-white" size="sm">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <Button
              variant="outline"
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
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
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
            >
              <span className="sr-only">Next</span>
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </Button>
          </nav>
        </div>
      </div>
    </div>
    </Layout>
  )
}

