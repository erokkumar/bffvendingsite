import React from 'react'
import Lottie from 'lottie-react';
import coffee from '../assets/Coffeeanime.json'
import { motion } from 'framer-motion'; 

const About = () => {
  return (
    <div 
      id='about' 
      className='md:py-20 py-40 bg-gradient-to-b from-gray-100 to-gray-700 mt-14'
    >
      
      <motion.h1 
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1.5, delay:0.5}}
        className='text-amber-900 font-cursive text-5xl text-center'
      >
        About Us
      </motion.h1>

      <div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto'>

        {/* Lottie Animation */}
        <motion.div
          initial={{opacity:0,scale:0.5}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:1.5, delay:0.5}}
        >
          <Lottie animationData={coffee} className='md:w-[600px]' />
        </motion.div>

        {/* Text Section */}
        <div className='space-y-4 px-4 md:px-0'>
          <motion.h1 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1.5, delay:0.5}}
            className='text-2xl font-cursive2 text-amber-900'
          >
            Passion for Perfect BFF vending
          </motion.h1>

          <motion.p 
            initial={{opacity:0,y:100}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:1.5, delay:0.6}}
            className='font-cursive2'
          >
           Established in 2021, BFF Vending set out with one purpose—to elevate every coffee moment. What began as a passion for rich aroma and authentic taste has grown into a brand dedicated to delivering exceptional coffee experiences. We focus on crafting blends that are bold, fresh, and perfectly balanced, ensuring every cup delights the senses. At BFF Vending, coffee isn’t just a beverage—it’s a daily ritual, a source of energy, and a moment of comfort. Our commitment is simple: to bring you coffee that inspires, refreshes, and delivers quality in every sip.
          </motion.p>
        </div>

      </div>
    </div>
  )
}

export default About
