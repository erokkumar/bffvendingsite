import React, { useState, useEffect } from 'react'
import coffee from '../assets/Machine_photo.png'
import coffee2 from '../assets/Coffee_logo.png'  // second image
import Bean1 from '../assets/bean1.png'
import Bean2 from '../assets/bean2.png'

import { motion, AnimatePresence } from 'framer-motion'

const Hero = () => {

    const images = [coffee, coffee2]; // image list
    const [index, setIndex] = useState(0);

    // Auto change every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='bg-gradient-to-b from-gray-100 to-gray-700 mt-14'>
            <div className='max-w-7xl mx-auto grid md:grid-cols-2 place-items-center h-[700px] md:h-[650px] relative pt-10 md:pt-0'>

                {/* text section */}
                <div className='space-y-5 px-4 md:px-0'>
                    <motion.h3
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='text-amber-900 font-semibold font-cursive text-lg lg:text-xl'>
                        Welcome to BFF Vending Machine
                    </motion.h3>

                    <motion.h1
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className='text-4xl md:text-6xl font-bold font-cursive2'>
                        Experience Smart <span className='text-amber-900'>Vending</span> with BFF
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 0.6 }}
                    >
                     BFF Vending provides smart, fully automated machines that deliver fresh drinks and snacks quickly and reliably. Designed for modern workplaces, offices, and colleges, our solutions ensure convenient, hassle-free service around the clock.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.4, delay: 0.8 }}
                        className='flex gap-2'>
                        <a href="#menu">
                            <button className='bg-amber-900 text-white px-3 py-2 rounded-md'>
                                View Menu
                            </button>
                        </a>
                        <a href="#about1">
                            <button className='bg-transparent border border-amber-900 text-amber-900 rounded-md px-3 py-2'>
                                Our Story
                            </button>
                        </a>
                    </motion.div>
                </div>

                {/* AUTO-CHANGING IMAGE SECTION */}
                <div className="flex justify-center items-center">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={index}
                            src={images[index]}
                            alt="coffee"
                            className="w-[420px] h-[300px] md:w-[500px] md:h-[400px] object-contain"
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.7 }}
                            transition={{ duration: 1 }}
                        />
                    </AnimatePresence>
                </div>

                {/* Beans decoration */}
                <motion.img
                    initial={{ opacity: 0, x: 400, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 45 }}
                    transition={{ duration: 1.8, delay: 0.8 }}
                    src={Bean2} alt="" className='absolute hidden md:block bottom-20 left-50 x-10 w-20 rotate-45' />

                <motion.img
                    initial={{ opacity: 0, x: 600, y: 200, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    transition={{ duration: 1.8, delay: 0.8 }}
                    src={Bean1} alt="" className='absolute hidden md:block top-14 left-0 w-20' />

                <motion.img
                    initial={{ opacity: 0, x: -100, y: 100, scale: 0.7 }}
                    whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 45 }}
                    transition={{ duration: 1.8, delay: 0.8 }}
                    src={Bean2} alt="" className='absolute hidden md:block w-20 top-0 right-0 -rotate-45' />
            </div>
        </div>
    )
}

export default Hero
