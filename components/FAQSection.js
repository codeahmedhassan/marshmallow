export default function FAQSection() {
    return (
      <section className="py-20">
        <div className="mx-5">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#0C2B5F] dark:text-[#F5F5F5]">
            Answers That Make Things Crystal Clear!
          </h2>
  
          {/* FAQ Items */}
          <div className="space-y-4">
            {[
              "1. How much does cybersecurity cost?",
              "2. Do you work with remote teams?",
              "3. What if we already have an IT team?",
            ].map((question, index) => (
              <div
                key={index}
                className="w-full bg-[#65A4D626] p-5 rounded-xl flex justify-between items-center text-[#0C2B5F] dark:text-[#F5F5F5] font-medium shadow-sm"
              >
                <p>{question}</p>
                <span className="text-xl font-bold">+</span>
              </div>
            ))}
          </div>
  
          {/* Note */}
          <p className="text-sm text-gray-600 dark:text-[#F5F5F5] mt-10 text-center max-w-2xl mx-auto">
            <strong>Note:</strong> The cost or price of each package may vary above or below the average mentioned price to accommodate the client{"'"}s specific needs and requirements.
          </p>
        </div>
      </section>
    );
  }
  