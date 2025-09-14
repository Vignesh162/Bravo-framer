import { motion, AnimatePresence } from "framer-motion";

type AnimatedNumberProps = {
  number: number;
};

export default function AnimatedNumber({ number }: AnimatedNumberProps) {
  const formatted = number.toString().padStart(2, "0");

  return (
    <div className="flex">
      {formatted.split("").map((digit, i) => (
        <div
          key={i}
          className="relative h-[200px] w-[115px] overflow-hidden flex justify-center"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={digit}
              initial={{ y: 200, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -200, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-0 font-extrabold text-[200px] leading-none tracking-[-0.05em]"
            >
              {digit}
            </motion.span>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
