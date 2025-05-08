import CallToActionSection from "@/components/CallToActionSection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/Hero";
import ItemSection from "@/components/items";
import ServicesSection from "@/components/Service";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-50">
        <HeroSection />
        <ServicesSection />
      </div>
      <div className="flex flex-col items-center justify-center mb-10 mt-40 px-4 text-center sm:px-6 lg:px-8">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
          Why Marshmallow.Projects?
        </h3>
        <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300 max-w-xl">
          we don’t just offer services—we provide complete business solutions that drive success.
        </p>
      </div>

      <div className="flex flex-col gap-25">
        <ItemSection />
        <TestimonialSection />
        <CallToActionSection />
        <FooterSection />
      </div>
    </>
  );
}
