import Image from "next/image";

export default function ServicesSection() {
    const services = [
        {
            title: "Comprehensive Expertise",
            desc: "Whether it’s securing your business, scaling your brand, or developing world-class applications, we cover all aspects of technology, marketing, and finance under one roof.",
            icon: "/stars.svg",
        },
        {
            title: "Security First Approach",
            desc: "Our cybersecurity solutions ensure your business stays protected against ever-evolving threats, keeping your data and operations secure.",
            icon: "/lock.svg",
        },
        {
            title: "Global Financial Solutions",
            desc: "With Currency Exchange & Payment Assistance, we make international transactions smooth and hassle-free.",
            icon: "/Globedollar.svg",
        },
        {
            title: "Innovative Branding & Digital Excellence",
            desc: "From graphic & web design to full-fledged digital marketing campaigns, we craft experiences that set your brand apart.",
            icon: "/mail.svg",
        },
        {
            title: "End-to-End Development",
            desc: "Our web & mobile app development team transforms ideas into high-performance solutions tailored to your needs.",
            icon: "/development.svg",
        },
        {
            title: "Unmatched Customer Support",
            desc: "With our BPO services, we enhance your customer experience, ensuring satisfaction at every touchpoint.",
            icon: "/watch.svg",
        },
        {
            title: "Beyond Business – A Vision for the Future",
            desc: "We don’t stop at services. With ventures like BaykoToken (Crypto) and Luxury Perfumes, we embrace innovation and market expansion.",
            icon: "/business.svg",
        },
    ];

    return (
        <section className="py-20 px-6 bg-white dark:bg-[#0A0A0A]">
            <div className="max-w-7xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.map((service, index) => {
                        const isLast = index === services.length - 1;
                        return (
                            <div
                                key={index}
                                className={`bg-blue-50 dark:bg-[#65A4D626] hover:bg-blue-100 transition duration-300 p-8 shadow-sm text-center ${isLast ? "lg:col-span-1 lg:col-start-2" : ""
                                    }`}
                            >
                                <div className="flex justify-center mb-10">
                                    <Image className="object-contain h-24 w-24 dark:hidden" width={1000} height={1000} src={service.icon} alt={service.title} />
                                    <Image className="object-contain h-24 w-24 hidden dark:block" width={1000} height={1000} src={service.icon.replace(".svg", "").replace("/", "/dark") + ".svg"} alt={service.title} />
                                </div>
                                <h3 className="text-md font-semibold text-gray-800 dark:text-white mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-[10px] dark:text-white">{service.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
