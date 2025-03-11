import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-gradient-to-r from-purple-600 to-blue-500 text-white text-center">
      {/* Animated Text */}
      <motion.h1
        className="text-6xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to <span className="text-yellow-400">Good Vibes</span> 🚀
      </motion.h1>

      {/* Floating Button */}
		<Link to="/events">
		  <motion.button
			className="absolute bottom-10 px-6 py-3 mt-4 text-lg font-semibold text-white bg-yellow-400 rounded-full shadow-lg"
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
		  >
			Get Started
		  </motion.button>    
		</Link>
    </section>

  );
};

export default Hero;
