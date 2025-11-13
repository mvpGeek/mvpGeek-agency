import { ArrowRight, Check } from "lucide-react";
import TrueFocus from "./TrueFocus";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-linear-to-r from-[#FFFFFF] to-[#FFFFFF7e] inline-block text-transparent bg-clip-text"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Validate Your Idea in <br />{" "}
          <TrueFocus
            sentence="Weeks Not Months"
            manualMode={false}
            blurAmount={5}
            borderColor="#0D0A08"
            animationDuration={1}
            pauseBetweenAnimations={0.5}
          />
        </h1>
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Ship your MVP fast and affordable. Test real users, gather real
          feedback, pivot smart without burning through your budget.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="#contact"
            className="bg-[#FF6A26] border-[#FF6A26] border-4 text-[#0D0A08] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff7a35] transition-colors inline-flex items-center justify-center bg-linear-to-b from-[#FF6A26] to-[#FFAE82] focus:ring-2 focus:ring-[#FF6A26] hover:shadow-xl duration-200"
          >
            Get Started Today <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#how-it-works"
            className="border-4 border-[#FF6A26] text-[#FF6A26] px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            See How It Works
          </a>
        </div>

        <p className="text-gray-500 text-sm flex items-center justify-center">
          <Check className="text-[#10b981] mr-2" size={20} />
          Trusted by 10+ founders who launched faster
        </p>
      </div>
    </section>
  );
};

export default Hero;
