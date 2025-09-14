import { useEffect, useState, useRef } from "react";
import AnimatedNumber from "./animatedNumber";

type Step = {
  id: number;
  title: string;
  description: string;
  highlight?: string;
  badges?: string[];
};

const steps: Step[] = [
  {
    id: 0,
    title: "The smoothest design process you've ever experienced",
    description: "No BS, no contracts. Request and get results in days.",
    highlight: "The smoothest",
  },
  {
    id: 1,
    title: "SUBSCRIBE",
    description: "Pick a plan and get an immediate access to your design requests",
    badges: ["STRIPE"],
  },
  {
    id: 2,
    title: "REQUEST",
    description: "Submit a request, one or two at a time, depending on your plan",
    badges: ["TRELLO"],
  },
  {
    id: 3,
    title: "RECEIVE",
    description: "Wait for 24-48 hours until your request is finished",
    badges: ["FIGMA", "FRAMER"],
  },
  {
    id: 4,
    title: "REPEAT",
    description: "Approve, discuss, or start a new request, our team is no-limit ready ",
    badges: ["SLACK"],
  },
  {
    id: 5,
    title: "PROFIT",
    description: "You get not only hands but also hearts and heads to help your business grow",
    badges: ["LOVE"],
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  // Array of refs for each title
  const titleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const numberRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 1 }
    );

    titleRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      titleRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const isLast = activeStep === steps.length - 1;

  return (
    <section
      className={`min-h-screen w-full mt-10 mx-auto px-6 sm:px-8 md:px-12 py-10 grid grid-cols-1 md:grid-cols-[1fr_3fr] transition-colors duration-500 rounded-lg ${
        isLast ? "bg-orange-600" : ""
      }`}
    >
      {/* Sticky Number */}
      <div
        ref={numberRef}
        className={`hidden sm:block md:sticky md:top-28/100 self-start ml-15 mr-auto ${
          isLast ? "text-white" : "text-orange-600"
        }`}
      >
        <AnimatedNumber number={activeStep} />

        <div className="flex items-center mt-4">
          <span className={`flex-1 h-[1px] ${isLast ? "bg-white" : "bg-orange-600"}`} />
          <span className={`w-1 h-1 ${isLast ? "bg-white" : "bg-orange-600"} rounded-full ml-4`} />
        </div>
      </div>

      {/* Steps */}
      <div className="space-y-24 sm:space-y-32 md:space-y-40 sm:m-10 md:m-14">
        {steps.map((step, index) => (
          <div
            key={step.id}
            data-index={index}
            ref={(el) => {
            titleRefs.current[index] = el;
            }}
            className="min-h-[30vh]  max-w-[50vw] sm:min-h-[50vh] md:min-h-[70vh] flex flex-col justify-center ml-5"
          >
            {index !== 0 && (
              <div className="flex items-center">
                <span className={`w-1.5 h-1.5 ${isLast ? "bg-white" : "bg-orange-600"} rounded-full mr-2`} />
                <span className={`flex-1 h-[1px] ${isLast ? "bg-white" : "bg-orange-600"}`} />
                {step.badges?.map((badge, i) => (
                  <span
                    key={i}
                    className={`italic inline-block ml-2 px-1 text-xs sm:text-sm font-bold border rounded-full ${
                      isLast ? "bg-white text-orange-600 border-white" : "text-orange-600 border-orange-600"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            )}

            <h2
              className={`font-bold leading-tight 
                ${isLast ? "!text-white" : "text-black"} 
                ${
                  index !== 0
                    ? "popins-bold-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                    : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                }
              `}
            >
              {step.highlight ? (
                <>
                  <span className={isLast ? "text-white" : "text-orange-600"}>{step.highlight} </span>
                  {step.title.replace(step.highlight, "")}
                </>
              ) : (
                step.title
              )}
            </h2>

            <p className={`text-sm p-1 sm:text-base md:text-lg ${isLast ? "text-white" : "text-gray-500"}`}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
