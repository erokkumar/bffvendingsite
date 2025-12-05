import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ open, setOpen }) => {
    return (
        <AnimatePresence mode='wait'>
            {
                open && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.3 }}
                        className='absolute top-20 left-0 w-full h-screen z-20'>
                        <div className='text-xl font-semibold uppercase bg-amber-950 text-white py-10 m-6 rounded-3xl'>
                            <ul className='flex flex-col justify-center items-center gap-10'>
                                <a href="/"><li onClick={() => setOpen(false)} className='cursor-pointer'>Home</li></a>
                                <a href="#menu"><li onClick={() => setOpen(false)} className='cursor-pointer'>Menu</li></a>
                                <a href="#about"><li onClick={() => setOpen(false)} className='cursor-pointer'>About</li></a>
                                <a href="#testimonial"><li onClick={() => setOpen(false)} className='cursor-pointer'>Feedback</li></a>
                                <a href="#contact"><li onClick={() => setOpen(false)} className='cursor-pointer'>Contact</li></a>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

ResponsiveMenu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default ResponsiveMenu;
