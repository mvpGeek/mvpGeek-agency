import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    q: "How fast can you really build an MVP?",
    a: "Most MVPs launch in 2-4 weeks. Timeline depends on complexity, but speed is our specialty.",
  },
  {
    q: "What if my idea changes during development?",
    a: "We build in flexibility. Minor pivots are normal—we adapt without derailing the timeline.",
  },
  {
    q: "Do I own the code?",
    a: "100%. You get full ownership of all code, designs, and assets we create.",
  },
  {
    q: "What happens after launch?",
    a: "You can take it from there, hire your own team, or keep working with us for iterations and scaling.",
  },
  {
    q: "What technologies do you use?",
    a: "We use modern, battle-tested frameworks—React, Node.js, React Native, and more. We choose based on your needs, not trends.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Absolutely. Your idea is safe with us.",
  },
  {
    q: "What if I'm not technical?",
    a: "Perfect. We speak human, not just code. We will guide you through everything.",
  },
];

const Faq = () => {
  const [openFaq, setOpenFaq] = useState<null | Number>(null);

  return (
    <section className="py-20 px-4 bg-black/30">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Frequently Asked <span className="text-[#FF6A26]">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:bg-white/5 transition-colors"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="text-lg font-semibold pr-8">{faq.q}</span>
                <ChevronDown
                  className={`shrink-0 text-[#FF6A26] transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6 text-gray-300 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
