import { motion } from "framer-motion";

export default function ImageSection() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.img
        src="https://communionhub.org/static/media/hero-2.1736b71541634509a875.avif"
        alt="Communion Hub Hero"
        className="w-3/4 md:w-1/2 rounded-2xl"
        
        initial={{
          opacity: 0,
          scale: 0.75,
          rotate: -10,
          borderRadius: 32,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        }}
        animate={{
          opacity: 1,
          scale: 0.9,
          rotate: 0,
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.35)",
        }}
        whileHover={{
          scale: 0.95,
          rotate: 2,
          boxShadow: "0px 15px 45px rgba(0, 0, 0, 0.5)", // ✨ Thicker shadow on hover
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
