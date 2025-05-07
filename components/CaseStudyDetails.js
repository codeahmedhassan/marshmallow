import Image from "next/image";
import FooterSection from "./FooterSection";

export default function CaseStudyDetails() {
    return (
        <>
            <section className="bg-white dark:bg-[#181A20]">
                <div className="flex flex-col md:flex-row items-start">

                    {/* Left Image */}
                    <div className="">
                        <Image
                            src="/pattern.png"
                            alt="Pattern"
                            className="object-contain dark:hidden"
                            width={1000}
                            height={1000}
                        />
                        <Image
                            src="/darkpattern.png"
                            alt="Pattern"
                            className="object-contain hidden dark:block"
                            width={1000}
                            height={1000}
                        />
                    </div>

                    {/* Right Content */}
                    <div className="md:w-1/2 w-full space-y-10 mt-20">

                        {/* Overview Box */}
                        <div className="p-6 ">
                            <h3 className="text-xl font-semibold text-[#0C2B5F] dark:text-[#f5f5f5] mb-3">Overview</h3>
                            <p><strong>Client:</strong> PaySecure</p>
                            <p><strong>Industry:</strong> Financial Technology</p>
                            <p><strong>Duration:</strong> 8 weeks</p>
                        </div>

                        {/* Challenge Box */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#0C2B5F] dark:text-[#f5f5f5] mb-3">The Challenge</h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-[#d8d8d8]">
                                <li>Over 50 daily phishing attempts targeting employees.</li>
                                <li>A failed PCI-DSS audit due to inadequate data protection measures.</li>
                                <li>Lack of 24/7 monitoring, resulting in delayed breach responses.</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <section className="py-16 bg-white dark:bg-[#181A20]">
                <div className="mx-5 border-s-8 border-[#65A4D6] ps-6">
                    <h3 className="text-3xl flex text-center font-bold italic text-gray-800 mb-4 dark:text-[#f5f5f5]">
                        {'"'}We were drowning in security alerts and compliance deadlines. We <br /> needed a partner, not just a vendor.{'"'}
                    </h3>
                    <p className="text-sm flex flex-wrap items-center justify-end text-gray-600 dark:text-[#d6d6d6] font-semibold">
                        John Smith, CTO of PaySecure
                    </p>
                </div>
            </section>

            <section className=" bg-white dark:bg-[#181A20]">
                <div className="flex flex-col md:flex-row items-start gap-10">

                    {/* Left Content */}
                    <div className="md:w-1/2 w-full space-y-10">

                        {/* Solution Box */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#0C2B5F] dark:text-[#f5f5f5] mb-3">The Solution</h3>
                            <p className="text-sm text-gray-700 dark:text-[#f5f5f5]">
                                We delivered a three-step cybersecurity overhaul:
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-[#f5f5f5] mt-2">
                                <li>
                                    <strong>AI-Powered Email Filtering:</strong> Deployed Mimecast to block malicious links and attachments.
                                </li>
                                <li>
                                    <strong>Employee Training Program:</strong> Conducted bi-weekly phishing simulations and gamified learning modules.
                                </li>
                                <li>
                                    <strong>SIEM Integration:</strong> Integrated Splunk for real-time log analysis and instant threat alerts.
                                </li>
                            </ul>
                        </div>

                        {/* Results Box */}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-[#0C2B5F] dark:text-[#f5f5f5] mb-3">Results</h3>
                            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-[#f5f5f5]">
                                <li>✅ 90% reduction in phishing breaches (from 50+ to 5 daily attempts).</li>
                                <li>✅ Full PCI-DSS compliance with zero audit exceptions.</li>
                                <li>✅ 24/7 SOC monitoring, ensuring instant threat response.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="">
                        <Image
                            src="/pattern.png"
                            alt="Pattern"
                            className="object-contain transform -scale-x-100 dark:hidden"
                            width={600}
                            height={600}
                        />
                        <Image
                            src="/darkpattern.png"
                            alt="Pattern"
                            className="object-contain transform -scale-x-100 hidden dark:block"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
            </section>
            <FooterSection />
        </>
    );
}
