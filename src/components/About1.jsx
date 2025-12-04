import React from 'react'
import Bg from '../assets/back.png'
import { motion } from 'framer-motion'
import DemoVideo from '../assets/BFF-COFFEE -VENDING.mp4'

const bgImage = {
  backgroundImage: `url(${Bg})`,
  backgroundColor: "#270c03",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const About1 = () => {
  return (
    <div id="about1" className="md:py-20 py-32" style={bgImage}>

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="text-amber-900 font-cursive text-5xl text-center mb-10"
      >
       What We Stand For
      </motion.h1>

      {/* Main Content Row */}
      <div className="flex flex-col md:flex-row-reverse items-center max-w-7xl mx-auto gap-10">

        {/* RIGHT: Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="flex justify-center w-full "
        >
          <video
            src={DemoVideo}
            controls          // <-- Play / Pause button
            autoPlay          // <-- Starts automatically
            loop              // <-- Repeats
            playsInline       // <-- Mobile fix
            className="w-[1200px] md:w-[1300px] lg:w-[1300px] rounded-xl shadow-xl"
          />
        </motion.div>

        {/* LEFT: Text */}
        <div className="space-y-4 px-4 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            className="text-3xl font-cursive2 text-amber-900"
          >
       Dedicated to Exceptional Coffee and Vending Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-lg leading-relaxed font-cursive2 text-black"
          >
            At BFF Vending, we stand for quality, innovation, and trust. Our mission is to make premium coffee and convenient vending solutions accessible to everyone—anytime, anywhere. We believe in delivering machines that combine smart technology, durability, and user-friendly design, ensuring reliable performance every day.

We are committed to offering fresh, great-tasting coffee and beverages that uplift workplaces, energize teams, and enhance everyday moments. With a focus on excellence and customer satisfaction, BFF Vending continues to push boundaries, creating solutions that are efficient, modern, and built for the future.
          </motion.p>
        </div>

      </div>
    </div>
  )
}

export default About1
