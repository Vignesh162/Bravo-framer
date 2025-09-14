import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Wallet } from "lucide-react";

export default function FlexibleRedemptionCard() {
  const [pointsConversion, setPointsConversion] = useState(100);
  const [maxPercent, setMaxPercent] = useState(25);
  const [enabled, setEnabled] = useState(true);

  // Scroll animation
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <section className="flex justify-center items-center min-w-[100vw] min-h-screen bg-gray-100 px-4">
      <motion.div
        ref={ref}
        style={{ scale }}
        className="w-[80vw]  bg-white rounded-2xl shadow-xl p-12"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div className="flex flex-row items-center">
            <Wallet className="w-10 h-10 text-blue-600" />
            <div className="ml-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Flexible Redemption
              </h2>
              <p className="text-gray-500 text-xl md:text-2xl">
                Customers can redeem points like cash during checkout
              </p>
            </div>
          </div>
          {/* Toggle */}
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={enabled}
              onChange={() => setEnabled(!enabled)}
              className="hidden"
            />
            <div
              className={`w-20 h-10 flex items-center rounded-full p-1 transition ${
                enabled ? "bg-blue-600" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-8 h-8 rounded-full shadow-md transform transition ${
                  enabled ? "translate-x-10" : ""
                }`}
              />
            </div>
          </label>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Conversion */}
          <div>
            <label className="text-2xl font-semibold text-gray-800">
              Points to Dollar Conversion
            </label>
            <div className="flex items-center mt-5">
              <input
                type="number"
                value={pointsConversion}
                onChange={(e) => setPointsConversion(Number(e.target.value))}
                className="w-40 border-2 rounded-lg px-5 py-4 text-2xl font-medium"
              />
              <span className="ml-5 text-2xl text-gray-700">
                points = $1
              </span>
            </div>
          </div>

          {/* Max Points Slider */}
          <div>
            <label className="text-2xl font-semibold text-gray-800">
              Maximum Points Per Order (%)
            </label>
            <input
              type="range"
              min={0}
              max={100}
              value={maxPercent}
              onChange={(e) => setMaxPercent(Number(e.target.value))}
              className="w-full accent-blue-600 mt-6"
            />
            <div className="flex justify-between text-xl text-gray-600 mt-4">
              <span>0%</span>
              <span className="font-bold text-gray-900">{maxPercent}%</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="p-8 bg-blue-50 border border-blue-100 rounded-xl text-xl md:text-2xl text-gray-800 leading-relaxed">
          <p className="font-bold mb-4 text-2xl md:text-3xl">How it works:</p>
          <ul className="list-disc ml-6 space-y-3">
            <li>Customer has 1,000 points = $10.00 value</li>
            <li>
              On a $100 order, can use max {maxPercent}% ={" "}
              {Math.round((100 * maxPercent) / 100)} points (
              ${((100 * maxPercent) / pointsConversion).toFixed(2)})
            </li>
            <li>Final order total: $97.50</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
