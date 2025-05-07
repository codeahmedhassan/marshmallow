export default function CallToActionSection() {
  return (
    <section className="bg-[#02225B] dark:bg-[#65A4D626] py-10 px-6 text-center text-white">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
          Ready to Start Your Project?
        </h2>
        <p className="text-sm sm:text-base mb-6 text-gray-300 max-w-xl">
          Let’s innovate together.
        </p>
        <button className="bg-white w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-[#02225B] font-semibold text-sm py-2 px-5 rounded-xl shadow-md hover:bg-gray-100 transition duration-300">
          Schedule a Free Consultation
        </button>
      </div>
    </section>
  );
}
