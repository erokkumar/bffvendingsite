import React from 'react'
import Img1 from '../assets/machine1.png'
import Img2 from '../assets/Machine_photo.png'
import Img3 from '../assets/largemachine.png'
import Img4 from '../assets/smole.webp'
import Img5 from '../assets/large.webp'
import { motion } from 'framer-motion'

const MenuData = [
  {
    id: 1,
    img: Img3,
    name: "Coffee machine",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 2,
    img: Img1,
    name: "Coffee machine only use office",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 3,
    img: Img2,
    name: "Snacks Vending machine",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 4,
    img: Img4,
    name: "Coffee machine",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet.",
  },
  {
    id: 5,
    img: Img5,
    name: "Beverage Vending Machine",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
  },
  {
    id: 6,
    img: Img2,
    name: "BFF Vending Machine",
    description: "Lorem ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet ipsum dolor sit amet",
  },
];

const Menu = () => {
  return (
    <div id='menu' className='py-20'>
      <div className='max-w-7xl mx-auto'>

        {/* Heading */}
        <div className='text-center mb-20'>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className='text-4xl font-bold font-cursive text-amber-900'
          >
           Smart Vending Machines Designed for Your Needs
          </motion.h1>
        </div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center'
        >

          {MenuData.map((menu) => (
            <div
              key={menu.id}
              className='rounded-2xl bg-white hover:bg-amber-900 transition-all hover:text-white relative shadow-xl group max-w-[300px] p-4 '
            >

              {/* PERFECT IMAGE BOX */}
              <div className="h-[180px] flex justify-center items-center overflow-hidden">
                <img
                  src={menu.img}
                  alt=""
                  className={`
                    duration-300 group-hover:scale-110 group-hover:rotate-3
                    ${menu.id === 1 ? "max-w-[200px]" : "max-w-[150px]"}
                  `}
                />
              </div>

              {/* CARD CONTENT */}
              <div className='text-center mt-2'>
                <h1 className='text-xl font-bold'>{menu.name}</h1>
                <p className='text-gray-500 group-hover:text-white text-sm mt-1'>
                  {menu.description}
                </p>
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default Menu
