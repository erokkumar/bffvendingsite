import React from "react";
import Slider from "react-slick";

// LOCAL MP4 VIDEOS — Must exist in: src/assets/videos/
import video1 from "../assets/videos/Facebook_2.mp4";
import video2 from "../assets/videos/Facebook_3.mp4";
import video3 from "../assets/videos/Facebook.mp4";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

// Video data array
const VideoData = [
  { id: 1, name: "Aman", video: video1 },
  { id: 2, name: "Rohit", video: video2 },
  { id: 3, name: "BFF", video: video3 },
  { id: 4, name: "BFF", video: video3 }
];

const Testimonials = () => {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 10000,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div id="testimonial" className="py-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-center text-amber-900 text-4xl font-bold font-cursive mb-10"
        >
         Feedback
        </motion.h1>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <Slider {...settings}>
            {VideoData.map((item) => (
              <div key={item.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-6 px-4 mx-4 rounded-xl bg-amber-900/10 relative">

                  {/* Video */}
                  <video
                    src={item.video}
                    controls
                    className="rounded-xl w-full h-60 object-cover"
                  ></video>

                  {/* Name */}
                  <h1 className="text-xl font-bold text-black/80 mt-3 text-center font-cursive2">
                    {item.name}
                  </h1>

                  {/* Decorative Quote */}
                  <span className="text-amber-900/20 text-9xl font-serif absolute top-0 right-0 leading-none">
                    ,,
                  </span>

                </div>
              </div>
            ))}
          </Slider>
        </motion.div>

      </div>
    </div>
  );
};

export default Testimonials;
