import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is Bravo?",
    answer:
      "Bravo is a subscription-based design service that delivers high-quality designs without contracts or hidden costs.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "Most requests are delivered within 24-48 hours depending on complexity.",
  },
  {
    question: "What tools do you use?",
    answer:
      "We mainly use Figma, Trello, and Slack to collaborate with our clients seamlessly.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes! There are no long-term contracts. You can cancel your subscription at any time.",
  },
  {
    question: "What if I don’t like the design?",
    answer:
      "We’ll revise the design until you’re happy. Unlimited revisions are included in all plans.",
  },
  {
    question: "Why wouldn't I hire a full-time designer?",
    answer: "Hiring a full-time designer can be costly, especially if you don't have a continuous stream of design work. By using an unlimited design agency, you can access a team of designers for a fraction of the cost of a full-time hire. Additionally, with an agency, you benefit from a diverse range of skills and expertise."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="max-w-[100vw] bg-black mx-auto px-6 py-16 sm:py-24"
    >
      <h2 className="text-3xl text-white sm:text-4xl font-extrabold text-center mb-12">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6 flex justify-center flex-col items-center rounded-tr-xl">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border w-[80vw] border-gray-200 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className= {`w-full flex justify-between items-center px-6 py-4  text-left text-lg font-medium  hover:bg-neutral-900 transition-colors rounded-t-lg ${ openIndex == index?"bg-neutral-900 text-orange-600":" text-white"}`}
            >
              {faq.question}
              <span className={`ml-2 ${ openIndex == index?"text-orange-600":""}`}>
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
            <div className={`px-6 py-4 text-white border-t border-gray-200 bg-neutral-900`}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
