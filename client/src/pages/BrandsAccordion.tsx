// src/components/BrandsAccordion.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollScaleCard from "./scrollScaleCard";
import FlexibleRedemptionCard from "../componeants/flexibleRedemptionCard";
type BrandItem = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
};

type App = {
  name: string;
  description: string;
  status?: "recommended" | "added" | "default";
};

const brands: BrandItem[] = [
  {
    id: 1,
    title: "WOOLWORTHS",
    subtitle: "RESEARCH - STRATEGY",
    description:
      "Working closely with Woolworths within a SPRINT framework, we undertook extensive primary and secondary user research as well as user experience testing with the client's desired target audience. The result was a tested and validated savings and budgeting proposition..",
  },
  {
    id: 2,
    title: "SNEAKER LAB",
    subtitle: "DESIGN",
    description:
      "Sneaker LAB specialises in the development, marketing and distribution of cleaning, care and protection products for shoes. We created a simple, clean, and frictionless online experience that embodied the key service attributes that are received at the Sneaker Lab brick and mortar stores. We also highlighted their commitment to communities and the planet by visually dialling up their positioning around being “built on a green philosophy” and a “culture of care”.",
  },
  {
    id: 3,
    title: "HKLM",
    subtitle: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
    description:
      "We've been providing HKLM with ongoing web design, development, and optimisation services since 2018. Our team has built web properties for some of South Africa's most well known brands within the hospitality and education sectors - Tswalu Game Reserve, Richfield, and AAA School of Advertising to name a few.",
  },
  {
    id: 4,
    title: "DIGITAS LIQUORICE",
    subtitle: "DESIGN",
    description:
      "Digitas Liquorice is owned by the Publicis Groupe - one of the world's leading communications groups. They brought us in to assist with the redesign of four Unilever brand websites - starting with wireframes and ending with high-fidelity designs which were then handed over to the Unilever development team.",
  },
  {
    id: 5,
    title: "BATOKA HOSPITALITY",
    subtitle: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
    description:
      "Digitas Liquorice is owned by the Publicis Groupe - one of the world's leading communications groups. They brought us in to assist with the redesign of four Unilever brand websites - starting with wireframes and ending with high-fidelity designs which were then handed over to the Unilever development team.",
  },
  {
    id: 6,
    title: "SENDMARC",
    subtitle: "STRATEGY - DESIGN - DEVELOPMENT",
    description:
      "Sendmarc automates the process of protecting your domain from being used in email impersonation and phishing attacks. We created a clean yet striking online experience, which effectively displayed Sendmarc's content and key business messaging in an efficient and engaging way. This has led to an increase in traffic to the website as well as engaged prospects and leads.",
  },
   {
    id: 7,
    title: "VANA",
    subtitle: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
    description: "Vana is an emerging wellness brand, focussed on the power of breathing. We were contracted to create their brand identity and build an app that promotes meditative breath work and wellness. The creative idea was rooted in the concept of finding balance between calmness and energy - creating a beautiful tension that translates to flow, movement and confidence.",
  },
   {
    id: 8,
    title: "FAIRWAYS TO AFRICA",
    subtitle: "DESIGN - DEVELOPMENT",
    description: "Fairways to Africa creates once-in-a-lifetime golf and leisure experiences. We were approached by Fairways to Africa to create a slick and simple digital presence that would appeal to their young, jet-setting target market. Their main goal was to create a web experience that would set them apart as a small and passionate team of avid golfers who focus on unforgettable customised golf travel for their clients.",
  },
   {
    id: 9,
    title: "FINCHECK",
    subtitle: "RESEARCH - STRATEGY - DESIGN - DEVELOPMENT",
    description: "Fincheck's mission is to help South Africans make better financial decisions. We were contracted to reinvigorate Fincheck's digital platform with a specific focus on improving overall brand consistency, and to establish them as a trusted and credible brand within the financial services industry. Our main objective was to improve the user experience of the application process to inspire higher conversion rates when users applied for specific lending verticals. We also increased customer value by improving time on site with easy browsing and streamlined navigation.",
  },
   {
    id: 10,
    title: "PARROT PRINT",
    subtitle: "RESEARCH - DESIGN",
    description: "Parrotprint.com is one of the web's leading personalised photo-to-canvas print brands. The brief was to rebrand and transform the company from what felt like a physical printing factory to a premium, intelligent, online brand - designed for a digital economy. Our team undertook a brand refresh that visually positioned the business as an online printing platform. We also worked closely with Conversion Rate Experts to redesign the website's user interfaces.",
  },
];
const apps:App[] = [
  {
    name: "Figma",
    description: "Design collaboratively in real-time with Figma.",
    status: "recommended",
  },
  {
    name: "Google Calendar",
    description: "Sync events, set reminders, and streamline your schedule.",
    status: "added",
  },
  {
    name: "GitHub",
    description: "Simplifying collaboration and version control.",
    status: "default",
  },
]; 

export default function BrandsAccordion() {
  const [activeId, setActiveId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="max-w-screen min-h-screen mx-auto mt-15  p-8 bg-[#f0efef]">
      <h1 className="text-4xl font-normal mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>BRANDS WE'VE WORKED WITH</h1>
      
    <ol className="divide-y divide-gray-300" style={{ fontFamily: 'Lato, sans-serif' }}>
      {brands.map((brand) => (
        // Make the <li> the group
        <li key={brand.id} className="relative group">
          {/* Header row */}
          <button
            onClick={() => toggle(brand.id)}
            className="w-full text-left py-4 pb-6"
          >
            <div className="grid grid-cols-10 items-center">
              {/* Title */}
              <div className="col-span-5 text-[12px] text-black font-medium">
                {brand.title}
              </div>
              {/* Subtitle */}
              <div className="col-span-4 text-[12px] text-black font-normal">
                {brand.subtitle}
              </div>
              {/* More/Less */}
              <div className="col-span-1 text-[12px] text-black font-normal text-right">
                {activeId === brand.id ? "LESS —" : "MORE +"}
              </div>
            </div>
          </button>

          {/* Description row */}
          <div className="grid grid-cols-10 items-center">
            <div className="col-span-5" />
            <div className="col-span-4">
              <AnimatePresence initial={false}>
                {activeId === brand.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-[14px]  text-black font-light ">
                      {brand.description}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Divider with hover animation */}
          <div className="relative h-[0.5px] bg-gray-300 overflow-hidden">
            <span
              className={`absolute left-0 top-0 h-full w-full bg-black 
                transform transition-transform duration-700 ease-out
                ${activeId === brand.id ? "scale-x-100 origin-left" : "scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"}`}
            ></span>
          </div>
        </li>
      ))}
    </ol>
    <main className="p-6 flex justify-center">
       <ScrollScaleCard apps={apps} ></ScrollScaleCard>
    </main>
    
    {/* Call your FlexibleRedemptionCard */}
      <main className="p-6 flex justify-center">
        <FlexibleRedemptionCard />
      </main>
    </div>
  );
}
