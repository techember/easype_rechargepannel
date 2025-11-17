import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is EasyPe ?",
    answer:
      "EasyPe is a modern digital payment app that allows you to recharge, pay bills, and book travel — all in one secure platform.",
  },
  {
    question: "Is EasyPe safe to use?",
    answer:
      "Absolutely! EasyPe uses bank-grade encryption and secure payment gateways to ensure your transactions and data remain safe.",
  },
  {
    question: "Do I get rewards on payments?",
    answer:
      "Yes! EasyPe offers cashback, rewards, and exclusive discounts on recharges, bookings, and more.",
  },
  {
    question: "How do I get started?",
    answer:
      "Simply download the EasyPe app, sign up with your mobile number, and start using all services instantly.",
  },
  {
    question: "Does EasyPe support all operators?",
    answer:
      "Yes, EasyPe supports all major mobile operators and DTH providers.",
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-lg">
            Quick answers to help you get the most out of EasyPe.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-200 via-yellow-100 to-green-300 rounded-2xl shadow-lg overflow-hidden border border-green-300/40"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-green-800 focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transform transition-transform ${
                    openIndex === index
                      ? "rotate-180 text-green-800"
                      : "text-green-800"
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-800">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
