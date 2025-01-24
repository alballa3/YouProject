import { motion } from "framer-motion"
import { Shirt, Palette, Recycle, Award } from "lucide-react"

const offerings = [
  {
    icon: Shirt,
    title: "Premium Quality",
    description: "Our hoodies are crafted from the finest materials for ultimate comfort and durability.",
  },
  {
    icon: Palette,
    title: "Stylish Designs",
    description: "Stay on trend with our contemporary urban designs and color palettes.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "We use sustainable materials and processes to minimize our environmental impact.",
  },
  {
    icon: Award,
    title: "Customer Satisfaction",
    description: "Our products are backed by a satisfaction guarantee and excellent customer service.",
  },
]

export default function WhatWeOffer() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            At Urban Comfort, we're committed to providing you with the best in urban streetwear.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg shadow-md"
            >
              <offering.icon className="w-12 h-12 text-gray-900 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{offering.title}</h3>
              <p className="text-gray-600">{offering.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

