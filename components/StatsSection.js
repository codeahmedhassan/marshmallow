export default function StatsSection() {
  return (
    <section className="bg-[#65A4D6] dark:bg-[#65A4D626] py-6 my-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-around gap-8 sm:gap-0 text-[#0C2B5F] dark:text-[#F5F5F5] text-center">

          {/* 1st Stat */}
          <div className="flex flex-col items-center">
            <span className="text-5xl sm:text-6xl font-bold">98%</span>
            <p className="text-base sm:text-lg mt-2 font-bold">Client Retention</p>
          </div>

          {/* 2nd Stat */}
          <div className="flex flex-col items-center">
            <span className="text-5xl sm:text-6xl font-bold">500+</span>
            <p className="text-base sm:text-lg mt-2 font-bold">Threats Neutralized</p>
          </div>

          {/* 3rd Stat */}
          <div className="flex flex-col items-center">
            <span className="text-5xl sm:text-6xl font-bold">100%</span>
            <p className="text-base sm:text-lg mt-2 font-bold">Compliance Success</p>
          </div>

        </div>
      </div>
    </section>
  );
}
