import {
    Search,
    FileText,
    ShieldCheck,
    MonitorSmartphone,
    RefreshCw,
  } from "lucide-react";
import Image from "next/image";
  
  const steps = [
    {
      id: 1,
      title: "Discover",
      description: "Initial consultation & threat landscape analysis",
      icon: '/search.svg',
      align: "left",
    },
    {
      id: 2,
      title: "Plan",
      description: "Custom roadmap with prioritized actions",
      icon: '/plan.svg',
      align: "center",
    },
    {
      id: 3,
      title: "Implement",
      description: "Deploy tools, policies, and employee training",
      icon: '/implement.svg',
      align: "right",
    },
    {
      id: 4,
      title: "Monitor",
      description: "24/7 SOC (Security Operations Center) oversight",
      icon: '/monitor.svg',
      align: "center",
    },
    {
      id: 5,
      title: "Optimize",
      description: "Quarterly reviews & proactive updates",
      icon: '/optimize.svg',
      align: "left",
    },
  ];
  
  export default function StrategyWaveSection() {
    return (
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-24">
            Smart Strategies, Seamless Execution, Outstanding Results.
          </h2>
  
          <div className="flex flex-col gap-20">
            {steps.map((step) => {
              const Icon = step.icon;
  
              let justifyClass = "justify-start";
              if (step.align === "center") justifyClass = "justify-center";
              else if (step.align === "right") justifyClass = "justify-end";
  
              return (
                <div
                  key={step.id}
                  className={`flex ${justifyClass} w-full`}
                >
                  <div className="flex items-start gap-6 max-w-md">
                    {/* Step Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-[#0C2B5F] flex items-center justify-center text-white font-bold text-lg shadow-xl">
                      {step.id}
                    </div>
  
                    {/* Icon + Title + Description */}
                    <div className="flex flex-col items-start text-left">
                        <Image className="w-8 h-8 mb-2 dark:hidden" width={500} height={500} src={step.icon} alt={step.title}/>
                        <Image className="w-8 h-8 mb-2 hidden dark:block" width={500} height={500} src={step.icon.replace(".svg", "").replace("/", "/dark") + ".svg"} alt={step.title}/>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-sm mt-1 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
  