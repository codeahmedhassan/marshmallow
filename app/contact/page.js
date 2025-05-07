"use client";
import React from 'react'
import { motion } from 'framer-motion';
import FooterSection from '@/components/FooterSection';

export default function ContactPage() {
    return (
        <>
            <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0C2B5F] dark:bg-[#65A4D626] overflow-hidden">
                <div className="max-w-4xl mx-auto text-center z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-tight">
                            Let{"'"}s Build Something Together
                        </h1>
                        <p className="text-white mt-4 text-sm sm:text-base lg:text-lg">
                            Reach out for inquiries, collaborations, or support. We{"'"}re here to help!
                        </p>
                    </motion.div>
                </div>

                {/* Animated background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-[#65A4D6]/20 dark:from-[#0C2B5F]/30 rounded-full filter blur-3xl animate-pulse-slow" />
                    <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-l from-[#0C2B5F]/20 dark:from-[#65A4D6]/30 rounded-full filter blur-3xl animate-pulse-slow delay-1000" />
                </div>
            </section>

            <section className="bg-white dark:bg-[#181A20] py-20 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2B5F] dark:text-[#f5f5f5] mb-3">
                        Send Us a Message
                    </h2>
                    <p className="text-gray-600 dark:text-[#c0c0c0] mb-10 text-xs sm:text-sm">
                        We respond within 24 hours.
                    </p>

                    <form className="space-y-4">
                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full sm:w-1/2 border border-gray-300 px-4 py-3 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2B5F]"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full sm:w-1/2 border border-gray-300 px-4 py-3 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2B5F]"
                            />
                        </div>
                        <textarea
                            placeholder="Message"
                            rows="5"
                            className="w-full border border-gray-300 px-4 py-3 rounded text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0C2B5F]"
                        ></textarea>

                        <div className="flex items-center justify-center sm:justify-end mt-8">
                            <button
                                type="submit"
                                className="bg-gradient-to-r from-[#65A4D6] to-[#0C2B5F] text-white font-semibold py-2 px-6 rounded-lg text-sm hover:bg-[#093066] transition duration-300"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </section>

            <FooterSection />

        </>
    )
}