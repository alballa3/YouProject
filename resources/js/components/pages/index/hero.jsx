"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const useTypingEffect = (text, delay = 100) => {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return currentText
}

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showMore, setShowMore] = useState(false)
  const typedText = useTypingEffect("URBAN COMFORT", 150)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const images = [
    "https://preview.redd.it/can-somebody-explain-to-me-why-he-keeps-wearing-this-hoodie-v0-7u5wxfma7mw91.jpg?width=640&crop=smart&auto=webp&s=3d547acd6e7f21784b15ce1bb9e8442c536797a0",
    "https://media.gq.com/photos/589de2a996e688570cf2eb5e/master/w_1600%2Cc_limit/kanye-gym-style-new1.jpg",
    "https://i.dailymail.co.uk/1s/2019/07/09/02/15801404-0-image-a-46_1562635354529.jpg",
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative  flex flex-col items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image */}
      <img
        src="/placeholder.svg?height=1080&width=1920&text=Urban+Background"
        alt="Urban background"
        layout="fill"
        objectFit="cover"
        className="opacity-60"
        priority
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between py-12">
        <motion.div
          className="lg:w-1/2 text-left mb-12 lg:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-4 leading-none">{typedText}</h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 max-w-xl font-light">
            Redefining casual wear with premium hoodies that blend comfort and cutting-edge urban aesthetics.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-black hover:bg-gray-200 transition-colors duration-300 text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105">
              Explore Collection
            </button>
            <button
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black transition-colors duration-300 text-lg px-8 py-4 rounded-full font-semibold transform hover:scale-105"
              onClick={() => setShowMore(!showMore)}
            >
              Read More
            </button>
          </div>
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="relative w-full h-[400px] sm:h-[500px] rounded-lg overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`Featured hoodie ${currentImageIndex + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Read More Section */}
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 w-full bg-white text-black py-12"
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-lg mb-4">
                Born from a passion for comfort and style, our brand has been at the forefront of urban fashion since
                its inception. We believe that clothing should not only look good but feel good too.
              </p>
              <p className="text-lg mb-4">
                Our team of designers work tirelessly to create hoodies that not only meet the highest standards of
                quality but also push the boundaries of style. From the selection of premium materials to the final
                stitching, every step of our process is infused with care and attention to detail.
              </p>
              <p className="text-lg">
                Join us in our journey to redefine casual wear and experience the perfect blend of comfort and style.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <ChevronDown size={32} className="text-white" />
      </motion.div>

      {/* Modern geometric shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500 opacity-10 rounded-full blur-3xl"></div>

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent opacity-70"></div>

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <motion.line
          x1="0"
          y1="100%"
          x2="100%"
          y2="0"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.line
          x1="0"
          y1="0"
          x2="100%"
          y2="100%"
          stroke="white"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.2 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </section>
  )
}

