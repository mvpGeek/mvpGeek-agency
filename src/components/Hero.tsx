import { ArrowRight, Check } from "lucide-react";
import TrueFocus from "./TrueFocus";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1
          className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Validate Your Idea in <br />{" "}
          <TrueFocus
            sentence="Weeks Not Months"
            manualMode={false}
            blurAmount={5}
            borderColor="#FFFFFF"
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
            className="bg-[#FF894A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#ff7a35] transition-colors inline-flex items-center justify-center"
          >
            Get Started Today <ArrowRight className="ml-2" size={20} />
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-[#FF894A] text-[#FF894A] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#FF894A] hover:text-white transition-colors"
          >
            See How It Works
          </a>
        </div>

        <p className="text-gray-500 text-sm flex items-center justify-center">
          <Check className="text-[#10b981] mr-2" size={20} />
          Trusted by 50+ founders who launched faster
        </p>

        {/* Hero Visual Placeholder */}
        <div className="mt-16 bg-linear-to-br from-[#FF894A]/20 to-transparent rounded-2xl h-96 border border-white/10 flex items-center justify-center">
          <span className="text-gray-600">Hero Visual / Dashboard Mockup</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
