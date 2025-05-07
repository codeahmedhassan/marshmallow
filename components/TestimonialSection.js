"use client";
import { useState, useEffect } from "react";

export default function TestimonialSection() {
    const testimonials = [
        {
            quote:
                "Marshmallow.Projects transformed our payment infrastructure, cutting processing time by 50%.",
            author: "Jane Doe, CTO @FintechCo",
        },
        {
            quote: "Their team is highly professional and committed to excellence.",
            author: "John Smith, CEO @Retailify",
        },
        {
            quote: "Exceptional service and a strong understanding of modern systems.",
            author: "Sarah Lee, Founder @HealthStart",
        },
        {
            quote: "Reliable, efficient, and a joy to work with!",
            author: "Mike Chan, Director @EduSolve",
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
        <section className="py-20 px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-[#F5F5F5] mb-8">
                    Why Clients Trust Us
                </h2>
                <p className="text-lg text-gray-700 italic mb-4 transition-opacity dark:text-[#F5F5F5] duration-500 ease-in-out">
                    {testimonials[current].quote}
                </p>
                <p className="flex flex-wrap justify-end text-xs text-gray-500">{testimonials[current].author}</p>
                <div className="flex justify-center mt-6 space-x-2">
                    {testimonials.map((_, i) => (
                        <span
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300 ${i === current ? "bg-blue-900" : "bg-gray-300"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
