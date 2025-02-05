import { motion } from "framer-motion"
import { Leaf, Zap, Users } from "lucide-react"

export default function AboutUs() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to redefine urban style with comfort at its core. Our journey began with a simple idea:
            to create hoodies that are as comfortable as they are stylish.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://media.gq.com/photos/56cb52771388833772dbc5ea/16:9/w_1280,c_limit/GettyImages-465384280.jpg"
              alt="Our design process"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Zap className="w-6 h-6 mr-2 text-yellow-500" />
              Our Design Philosophy
            </h3>
            <p className="text-gray-600 mb-6">
              At YOU, we believe that style shouldn't compromise comfort. Our design team works tirelessly to
              blend the latest urban trends with innovative comfort technologies. The result? Hoodies that look as good
              as they feel.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
              <Leaf className="w-6 h-6 mr-2 text-green-500" />
              Sustainability Commitment
            </h3>
            <p className="text-gray-600">
              We're committed to sustainable practices. From sourcing eco-friendly materials to implementing ethical
              manufacturing processes, we strive to make a positive impact on both our customers and the planet.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center justify-center">
            <Users className="w-6 h-6 mr-2 text-blue-500" />
            Join the YOU Movement
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Experience the perfect blend of style and comfort. Discover why thousands are choosing Urban Comfort for
            their everyday wear.
          </p>
          <motion.button
            className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Collection
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

