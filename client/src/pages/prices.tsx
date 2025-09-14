type Plans = {
    name: string,
    price: string,
    period: string,
    tagline: string,
    features: string[],
    button: string,
    highlight: boolean
}
const plans:Plans[] = [
  {
    name: "Classic",
    price: "$4,499",
    period: "/m",
    tagline: "One request at a time. No hidden fees.",
    features: [
      "1 request at a time",
      "48h turnaround",
      "Unlimited revisions",
      "Senior Designer",
      "Secure Payments",
      "Pause or Cancel Anytime",
    ],
    button: "Get Started",
    highlight:false
  },
  {
    name: "Professional",
    price: "$6,499",
    period: "/m",
    tagline: "Double the game. No hidden fees.",
    features: [
      "2 requests at a time",
      "48h turnaround",
      "Unlimited revisions",
      "Two Senior Designers",
      "Secure Payments",
      "Pause or Cancel Anytime",
    ],
    button: "Get Started",
    highlight: false, // Mark as featured plan
  },
];

export default function Pricing() {
  return (
    <section className=" w-full mx-auto px-8 py-20 bg-orange-600 rounded-2xl">
      <h2 className="text-white text-5xl font-extrabold my-8 mx-8">
        Pricing
      </h2>
      <h3 className="text-white  my-8 mx-8 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold" >A simple Monthly rate with No Hidden Fees</h3>

      <div className="mt-10 grid md:grid-cols-2 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col p-10 rounded-2xl shadow-lg border ${
              plan.highlight
                ? "border-orange-500 bg-orange-50 scale-105"
                : "border-gray-200 bg-white"
            }`}
          >
            {/* Plan name */}
            <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>

            {/* Price */}
            <div className="flex items-end mb-6">
              <span className="text-5xl font-extrabold">{plan.price}</span>
              <span className="text-gray-500 ml-2">{plan.period}</span>
            </div>

            {/* Tagline */}
            <p className="text-gray-600 mb-6">{plan.tagline}</p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button
              className={`mt-auto w-full py-3 rounded-xl font-bold transition ${
                plan.highlight
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
