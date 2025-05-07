"use client";
import { useState } from "react";
import Image from "next/image";

export default function OurWorkSection() {
  const categories = [
    "IT & Cybersecurity",
    "Digital Marketing",
    "App Development",
    "Graphic & Web Design",
    "Currency Exchange",
  ];

  const [selected, setSelected] = useState(categories[0]);

  return (
    <section className="px-4 sm:px-16 py-20 bg-white dark:bg-[#181A20]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0C2B5F] dark:text-[#f5f5f5] mb-4">
          Our Work
        </h2>
        <p className="text-sm sm:text-base text-gray-700 dark:text-[#cbcbcb] mb-10">
          From web development to blockchain solutions, we empower businesses globally.
        </p>

        {/* Category Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-16">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`py-2 px-3 rounded-lg text-sm text-center cursor-pointer transition 
                ${selected === item
                  ? "bg-[#0C2B5F] text-white"
                  : "border border-black text-black dark:text-white dark:border-[#797979] dark:bg-[#65A4D626]"}
              `}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 6 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-lg overflow-hidden shadow-md border">
              <Image
                src="/eustudy.png"
                alt="Card Image"
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="bg-[#0C2B5F] dark:bg-[#65A4D626] text-white py-4">
                <h3 className="text-lg font-semibold">EU Study</h3>
                <p className="text-sm mt-1">Abroad Study Partner</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
