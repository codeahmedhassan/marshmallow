// components/CardsSection.tsx
import Image from 'next/image';

const CardsSection = () => {
    const cards = [
        {
            image: '/PaySecure.png',
            title: 'Fintech Startup "PaySecure"',
            desc1: 'Challenge: Faced 50+ daily phishing attempts and PCI-DSS non-compliance.',
            desc2: 'Solution: Multi-layered defense: Email filtering, employee training, and SIEM integration.',
            buttonText: 'Read Full Case Study→'
        },
        {
            image: '/LuxeScents.png',
            title: 'E-Commerce for LuxeScents',
            desc1: 'Challenge: Frequent DDoS attacks causing site downtime during peak sales.',
            desc2: 'Solution:DDoS Mitigation: Integrated Cloudflare to filter malicious traffic.',
            buttonText: 'Read Full Case Study→'
        }
    ];

    return (
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <h2 className="text-4xl font-bold text-center mb-16">
                    Case Studies
                </h2>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="relative group bg-[#65A4D626]"
                        >
                            {/* Image */}
                            <div className="relative h-[349px] overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-slate-800 dark:text-[#F5F5F5] mb-4">
                                    {card.title}
                                </h3>
                                <p className="text-slate-600 dark:text-[#F5F5F5] text-xs mb-2">{card.desc1}</p>
                                <p className="text-slate-600 dark:text-[#F5F5F5] text-xs">{card.desc2}</p>

                                {/* Button */}
                                <div className="mt-6">
                                    <button className="bg-gradient-to-r from-[#65A4D6] to-[#0C2B5F] text-white px-5 py-2 cursor-pointer rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                                        {card.buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsSection;