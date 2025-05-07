"use client";
import React from 'react'
import { motion } from 'framer-motion';
import OurWorkSection from '@/components/OurWork';
import FooterSection from '@/components/FooterSection';


export default function PortfolioPage() {
    return (
        <>
            <section className=''>
                <section className="relative py-20 sm:py-24 flex items-center justify-center bg-[#0C2B5F] dark:bg-[#65A4D626] px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-2xl sm:text-3xl text-white font-bold leading-snug sm:leading-tight">
                                Innovation Delivered, Results Achieved
                            </h1>
                            <p className="text-white mt-3 sm:mt-4 text-xs sm:text-sm px-2">
                                Explore our transformative projects across IT, cybersecurity, crypto, and creative ventures.
                            </p>
                        </motion.div>
                    </div>

                    {/* Animated background elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#65A4D6]/20 dark:from-[#0C2B5F]/30 rounded-full filter blur-3xl animate-pulse-slow" />
                        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-l from-[#0C2B5F]/20 dark:from-[#65A4D6]/30 rounded-full filter blur-3xl animate-pulse-slow delay-1000" />
                    </div>
                </section>

                <OurWorkSection />
                <div className='flex items-center justify-center px-50 text-center font-bold text-2xl py-20 text-[#0C2B5F] dark:text-[#FFFFFF]'>
                    <h3>{'"'}Marshmallow.Projects transformed our cybersecurity strategy. Their team is proactive, transparent, and results-driven. We{"'"}ve partnered with them for three projects and counting!{'"'}</h3>
                </div>
                <FooterSection />
            </section>
        </>
    )
}