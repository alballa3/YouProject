"use client"

import { motion } from "framer-motion"
import { Home, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-6xl font-extrabold text-gray-900 sm:text-8xl">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl">Page Not Found</h2>
        <p className="mt-4 text-xl text-gray-600 max-w-md mx-auto">
          Oops! It seems like you've ventured into uncharted territory. The page you're looking for doesn't exist.
        </p>
      </motion.div>

      <motion.div
        className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Button asChild variant="default" size="lg">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/products">
            <ArrowLeft className="mr-2 h-5 w-5" />
            View Our Products
          </Link>
        </Button>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="text-gray-600">
          Need assistance?{" "}
          <Link href="/contact" className="text-black font-semibold hover:underline">
            Contact us
          </Link>
        </p>
      </motion.div>
    </div>
  )
}

