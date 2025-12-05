import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
     const [isVisible, setIsVisible] = useState(false);

     const toggleVisibility = () => {
          if (window.scrollY > 300) {
               setIsVisible(true);
          } else {
               setIsVisible(false);
          }
     };

     const scrollToTop = () => {
          window.scrollTo({
               top: 0,
               behavior: 'smooth',
          });
     };

     useEffect(() => {
          window.addEventListener('scroll', toggleVisibility);
          return () => {
               window.removeEventListener('scroll', toggleVisibility);
          };
     }, []);

     return (
          <AnimatePresence>
               {isVisible && (
                    <motion.div
                         initial={{ opacity: 0, scale: 0.5 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.5 }}
                         className="fixed bottom-8 right-8 z-50"
                    >
                         <button
                              onClick={scrollToTop}
                              className="bg-amber-800 hover:bg-amber-900 text-white p-3 rounded-full shadow-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                              aria-label="Scroll to top"
                         >
                              <ArrowUp size={24} />
                         </button>
                    </motion.div>
               )}
          </AnimatePresence>
     );
};

export default ScrollToTop;
