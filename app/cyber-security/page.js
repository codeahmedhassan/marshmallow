"use client"
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import StrategyWaveSection from '@/components/StrategySection';
import FeatureCardsSection from '@/components/CaseStudies';
import StatsSection from '@/components/StatsSection';
import FAQSection from '@/components/FAQSection';
import FooterSection from '@/components/FooterSection';

export default function CyberSecurityPage() {
    const services = [
        {
            title: "Risk Assessment & Audits",
            desc: "Identify vulnerabilities in your infrastructure with penetration testing, vulnerability scans, and dark web monitoring.",
            icon: "/risk.svg",
        },
        {
            title: "Network Security",
            desc: "Firewalls, intrusion detection systems (IDS), and zero-trust architecture implementation.",
            icon: "/network.svg",
        },
        {
            title: "Compliance Management",
            desc: "Audit preparation, policy development, and employee training for GDPR, ISO 27001, etc.",
            icon: "/compliance.svg",
        },
        {
            title: "Incident Response",
            desc: "24/7 breach containment, forensic analysis, and recovery planning.",
            icon: "/response.svg",
        },
        {
            title: "Cloud Security",
            desc: "Secure AWS/Azure/GCP environments with encryption and access controls.",
            icon: "/cloud.svg",
        },
        {
            title: "AI-Powered Threat Detection",
            desc: "Predictive analytics to stop threats before they strike.",
            icon: "/ai.svg",
        },
    ];
    return (
        <>
            <section className='dark:bg-[#181A20]'>

                <section className="relative min-h-screen flex items-center justify-center bg-[#0C2B5F] dark:bg-[#65A4D626] py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-4xl font-bold mb-6 sm:mb-8 leading-tight text-white">
                                Secure Your Digital Future
                            </h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-sm sm:text-base md:text-xl lg:text-sm text-gray-200 dark:text-gray-300 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
                            >
                                End-to-End Cybersecurity Solutions for Businesses Facing Modern Threats
                            </motion.p>

                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-2">
                                <button
                                    className="bg-gray-50 dark:bg-white text-[#0C2B5F] dark:text-[#0C2B5F] px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-xl cursor-pointer w-full sm:w-auto"
                                >
                                    Explore Case Studies
                                </button>

                                <button
                                    className="bg-gray-50 dark:bg-white text-[#0C2B5F] dark:text-[#0C2B5F] px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-xl cursor-pointer w-full sm:w-auto"
                                >
                                    Schedule a Free Consultation
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute top-0 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-r from-[#65A4D6]/20 dark:from-[#0C2B5F]/30 rounded-full filter blur-3xl animate-pulse-slow" />
                        <div className="absolute bottom-0 right-0 w-56 sm:w-72 h-56 sm:h-72 bg-gradient-to-l from-[#0C2B5F]/20 dark:from-[#65A4D6]/30 rounded-full filter blur-3xl animate-pulse-slow delay-1000" />
                    </div>
                </section>

                <section className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-28 mt-12 px-4 sm:px-6">
                    <div className="flex flex-col gap-4 lg:text-left max-w-md">
                        <h3 className="text-xl sm:text-2xl font-bold">
                            Are You Vulnerable to These Risks?
                        </h3>
                        <p>Outdated systems exposing you to ransomware attacks</p>
                        <p>Non-compliance with GDPR, HIPAA, or PCI-DSS regulations</p>
                        <p>Lack of 24/7 threat monitoring</p>
                        <p>Employee errors leading to data breaches</p>
                    </div>

                    <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
                        <Image
                            src="/cybersecurity.png"
                            alt="Logo"
                            width={512}
                            height={512}
                            className="w-full h-auto"
                        />
                    </div>
                </section>


                <section className="py-20 px-6 mt-40">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className='text-2xl mb-20 font-bold'>We are the Solution</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {services.map((service, index) => {

                                return (
                                    <div
                                        key={index}
                                        className={`bg-blue-50 dark:bg-[#65A4D626] hover:bg-blue-100 transition duration-300 p-8 shadow-sm text-center `}
                                    >
                                        <div className="flex justify-center mb-10">
                                            <Image className="dark:hidden object-contain h-24 w-24" width={1000} height={1000} src={service.icon} alt={service.title} />
                                            <Image className="hidden dark:block object-contain h-24 w-24" width={1000} height={1000} src={service.icon.replace(".svg", "").replace("/", "/dark") + ".svg"} alt={service.title} />
                                        </div>
                                        <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-2">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 text-[10px] dark:text-white text-sm">{service.desc}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
                <StrategyWaveSection />
                <FeatureCardsSection />
                <StatsSection />
                <section className="bg-[#0C2B5F] dark:bg-[#65A4D626] mx-4 sm:mx-10 my-20">
                    <div className="flex flex-col items-center py-10 px-4 sm:px-0">
                        <h3 className="text-xl sm:text-2xl font-bold text-white text-center py-6 sm:py-10">
                            Don’t Wait for a Breach to Act
                        </h3>
                        <p className="text-sm text-center text-white max-w-md">
                            Schedule Your Free Cybersecurity Audit Today
                        </p>
                        <div className="flex justify-center py-8 sm:py-10">
                            <button className="bg-white text-[#0C2B5F] font-semibold py-2 px-6 sm:px-8 rounded-xl shadow-md hover:bg-gray-100 transition duration-300 text-sm">
                                Get Protected Now
                            </button>
                        </div>
                    </div>
                </section>

                <FAQSection />
                <FooterSection />
            </section>
        </>
    )
}