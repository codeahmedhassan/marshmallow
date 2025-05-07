"use client";

export default function ServicesSection() {
  return (
    <>
      <section className="bg-white dark:bg-[#0A0A0A] mx-4 md:mx-9 relative flex flex-col md:flex-row items-center justify-center overflow-hidden">
        {/* Sidebar - Stack vertically on mobile */}
        <div className="bg-[#0C2B5F] flex flex-col gap-5 md:gap-10 text-white px-4 md:ps-5 py-8 md:py-12 w-full md:w-[500px] z-10 h-auto md:h-[680px]">
          {[
            "IT & Cybersecurity",
            "Digital Marketing",
            "Currency Exchange & Payment Assistance",
            "Graphic & Web Design",
            "Web & Mobile App Development",
            "Branding & Consultancy",
            "BPO & Customer Support",
          ].map((item, index) => (
            <div
              key={item}
              className={`text-base md:text-xl font-semibold ${
                index === 0
                  ? "bg-white/10 ps-3 py-3"
                  : "hover:text-blue-300 transition"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Content Section - Full width on mobile */}
        <div className="bg-[#65A4D626] w-full py-8 md:py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Protecting Businesses from Digital Threats
            </h2>
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-6 md:mb-8">
              We offer comprehensive IT solutions to safeguard your business from cyber risks. Our services ensure data protection, network security, and compliance with the latest cybersecurity standards.
            </p>

            <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white mb-2">
              Services Include:
            </h3>
            <ul className="text-gray-700 dark:text-gray-300">
              {[
                ["Network Security & Firewall Protection", "Prevent unauthorized access and cyberattacks."],
                ["Data Encryption & Compliance", "Secure sensitive data and meet regulatory standards."],
                ["Penetration Testing", "Identify and fix vulnerabilities before hackers exploit them."],
                ["Cloud Security Solutions", "Protect cloud-based applications and storage."]
              ].map(([title, description]) => (
                <li key={title} className="flex flex-col gap-1 mb-4 md:mb-5">
                  <h5 className="text-base md:text-[16px] font-semibold dark:text-white">{title}</h5>
                  <p className="text-sm">{description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 md:mt-12 text-center md:text-right px-4">
            <button className="bg-gradient-to-r from-[#4A8EF5] to-[#003D91] text-white px-6 py-2 rounded-xl cursor-pointer font-semibold shadow-lg hover:scale-105 transition text-sm md:text-base">
              Read More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}