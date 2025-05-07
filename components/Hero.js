"use client";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0C2B5F] dark:bg-gradient-to-br dark:bg-[#65A4D626] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl w-full text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">
            <span className="inline-block">Innovate.</span>
            <span className="inline-block mx-2">Secure.</span>
            <span className="inline-block">Grow.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-gray-200 dark:text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Empowering businesses through technology and creativity, delivering tailored solutions for tomorrow’s challenges.
          </motion.p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <button className="bg-white text-[#0C2B5F] px-6 py-2 rounded-lg text-sm font-semibold transition duration-300 shadow-lg w-full sm:w-auto">
              Explore Services
            </button>
            <button className="bg-white text-[#0C2B5F] px-6 py-2 rounded-lg text-sm font-semibold transition duration-300 shadow-lg w-full sm:w-auto">
              Discover Bayko Token
            </button>
          </div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-r from-[#65A4D6]/20 dark:from-[#0C2B5F]/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-60 h-60 sm:w-72 sm:h-72 bg-gradient-to-l from-[#0C2B5F]/20 dark:from-[#65A4D6]/30 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>
    </section>
  );
}
