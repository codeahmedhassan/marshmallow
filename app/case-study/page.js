"use client";
import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyDetails from '@/components/CaseStudyDetails';


export default function CaseStudyPage() {
    return (
        <>
            <section className=''>
                <section className="relative py-24 flex items-center justify-center bg-[#0C2B5F] dark:bg-[#65A4D626] dark:to-gray-950 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="max-w-4xl mx-auto text-center z-10 px-2 sm:px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="text-[#F5F5F5] flex flex-wrap items-center text-xs sm:text-sm tracking-wider mb-2">
                                Case Study
                            </p>
                            <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight">
                                Fortifying Fintech Security for PaySecure
                            </h1>
                        </motion.div>
                    </div>

                    {/* Animated background elements */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-r from-[#65A4D6]/20 dark:from-[#0C2B5F]/30 rounded-full filter blur-3xl animate-pulse-slow" />
                        <div className="absolute bottom-0 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-l from-[#0C2B5F]/20 dark:from-[#65A4D6]/30 rounded-full filter blur-3xl animate-pulse-slow delay-1000" />
                    </div>
                </section>

                <CaseStudyDetails />
            </section>
        </>
    );
}
