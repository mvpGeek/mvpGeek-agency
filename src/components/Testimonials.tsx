import React from "react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          Founders Who <span className="text-[#FF6A26]">Moved Fast</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-5xl text-[#FF6A26] mb-4">"</div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We went from idea to 100 paying users in 5 weeks. MVPGeek
              delivered exactly what we needed, no fluff, just results.
            </p>
            <div className="flex text-[#FF6A26] mb-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="font-semibold text-white">Sarah K.</p>
            <p className="text-gray-500 text-sm">FinTech Founder</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-5xl text-[#FF6A26] mb-4">"</div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I was quoted $80K and 6 months elsewhere. MVPGeek got me live in 3
              weeks for a fraction of the cost. Game changer.
            </p>
            <div className="flex text-[#FF6A26] mb-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="font-semibold text-white">Mike R.</p>
            <p className="text-gray-500 text-sm">SaaS Entrepreneur</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-5xl text-[#FF6A26] mb-4">"</div>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Fast, professional, and they actually understood what MVP means.
              No feature bloat, just a solid product we could test immediately.
            </p>
            <div className="flex text-[#FF6A26] mb-4">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>
            <p className="font-semibold text-white">Priya M.</p>
            <p className="text-gray-500 text-sm">Health Tech Startup</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
