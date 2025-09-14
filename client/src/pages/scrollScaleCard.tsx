import { motion, useScroll, useTransform } from "framer-motion"; 
import { useRef } from "react";
import { AppItem } from "../componeants/appItem";

type App = {
  name: string;
  description: string;
  status?: "recommended" | "added" | "default";
};

type ScrollScaleCardProps = {
  apps: App[];
};

export default function ScrollScaleCard({ apps }: ScrollScaleCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <section className="flex justify-center items-center min-h-screen min-w-[100vw] bg-gray-100">
      <motion.div
        ref={ref}
        style={{ scale }}
        className="w-5xl  bg-white rounded-2xl shadow-xl p-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Apps</h2>
          <button className="text-gray-400 hover:text-gray-600">✕</button>
        </div>

        <p className="text-gray-500 mb-6">
          Improve your team’s workflow by incorporating new applications into your tool.
        </p>

        {/* Search + Filter */}
        <div className="flex items-center justify-between mb-4">
          <input
            type="text"
            placeholder="Search for the app (⌘ F)"
            className="w-full px-4 py-2 text-sm border rounded-lg outline-none"
          />
          <button className="ml-2 text-sm text-gray-600">Filter</button>
        </div>

        {/* Apps List */}
        <div className="space-y-4">
          {apps.map((app) => (
            <AppItem
              key={app.name}
              name={app.name}
              description={app.description}
              status={app.status}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
