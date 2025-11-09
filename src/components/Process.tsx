import { ArrowRight } from "lucide-react";
import React from "react";

const Process = () => {
  return (
    <section id="how-it-works" className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          From Idea to Launch in{" "}
          <span className="text-[#FF894A]">3 Simple Steps</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all">
              <div
                className="w-16 h-16 bg-[#FF894A] rounded-full flex items-center justify-center text-3xl font-bold mb-6"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                1
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Discovery Call
              </h3>
              <p className="text-gray-500 text-sm mb-4">Day 1</p>
              <p className="text-gray-300 leading-relaxed">
                Share your vision. We will identify your core features and
                create a clear roadmap in under 48 hours.
              </p>
            </div>
            <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-[#FF894A]/30"></div>
          </div>

          <div className="relative">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all">
              <div
                className="w-16 h-16 bg-[#FF894A] rounded-full flex items-center justify-center text-3xl font-bold mb-6"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                2
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Rapid Development
              </h3>
              <p className="text-gray-500 text-sm mb-4">Week 1-3</p>
              <p className="text-gray-300 leading-relaxed">
                We build your MVP using proven frameworks. Weekly updates keep
                you in the loop without slowing us down.
              </p>
            </div>
            <div className="hidden md:block absolute top-12 -right-4 w-8 h-1 bg-[#FF894A]/30"></div>
          </div>

          <div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all">
              <div
                className="w-16 h-16 bg-[#FF894A] rounded-full flex items-center justify-center text-3xl font-bold mb-6"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                3
              </div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Launch & Learn
              </h3>
              <p className="text-gray-500 text-sm mb-4">Week 4</p>
              <p className="text-gray-300 leading-relaxed">
                Deploy your MVP to real users. Get the data you need to make
                your next smart move.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center bg-white/5 border border-white/10 rounded-2xl p-6">
          <p className="text-xl text-gray-300 mb-4">
            <span className="font-semibold text-white">Bottom Line:</span> Every
            project is unique. Book a free call and get a detailed quote in 48
            hours.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-[#FF894A] hover:text-[#ff7a35] font-semibold"
          >
            Get Your Custom Quote <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;
