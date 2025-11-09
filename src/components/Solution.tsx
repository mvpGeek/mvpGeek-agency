import { Check, ArrowRight } from "lucide-react";

const Solution = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
          style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
        >
          The Formula That{" "}
          <span className="text-[#FF894A]">Changes Everything</span>
        </h2>

        {/* Formula Visual */}
        <div className="bg-linear-to-r from-[#FF894A]/10 to-transparent border border-[#FF894A]/30 rounded-2xl p-8 mb-16">
          <div className="text-center space-y-4">
            <div className="text-gray-400 text-lg line-through">
              Traditional Development = Time × Money × Risk
            </div>
            <div
              className="text-3xl font-bold text-[#FF894A]"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              MVP Geek = Speed × Validation ÷ Cost
            </div>
          </div>
        </div>

        {/* Imagine Section */}
        <div className="mb-16">
          <h3
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Imagine It's 30 Days From Now...
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Large hero card - spans 2 columns and 2 rows */}
            <div className="md:col-span-2 md:row-span-2 bg-linear-to-br from-[#FF894A]/20 to-[#FF894A]/5 border border-[#FF894A]/30 rounded-2xl p-8 flex flex-col justify-center">
              <div className="text-6xl mb-6">🚀</div>
              <p
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Your MVP is live.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Real users are clicking, signing up, giving feedback. You are
                not guessing anymore, you have data. Real data.
              </p>
            </div>

            {/* Top right card */}
            <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#10b981]/50 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#10b981]/20 rounded-full p-3">
                  <Check className="text-[#10b981]" size={24} />
                </div>
                <div>
                  <h4
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Market Validation
                  </h4>
                  <p className="text-gray-400">If people actually want this</p>
                </div>
              </div>
            </div>

            {/* Bottom right - two smaller cards */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#10b981]/50 transition-all">
              <div className="flex items-start space-x-3">
                <div className="bg-[#10b981]/20 rounded-full p-3">
                  <Check className="text-[#10b981]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Feature Priority</h4>
                  <p className="text-sm text-gray-400">
                    What features matter most
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#10b981]/50 transition-all">
              <div className="flex items-start space-x-3">
                <div className="bg-[#10b981]/20 rounded-full p-3">
                  <Check className="text-[#10b981]" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Pricing Strategy</h4>
                  <p className="text-sm text-gray-400">
                    What your pricing should be
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom full width card */}
            <div className="md:col-span-4 bg-linear-to-r from-[#10b981]/10 to-transparent border border-[#10b981]/30 rounded-2xl p-6">
              <div className="flex items-center space-x-4">
                <div className="bg-[#10b981]/20 rounded-full p-3">
                  <Check className="text-[#10b981]" size={24} />
                </div>
                <div>
                  <h4
                    className="text-xl font-bold mb-1"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Clear Investment Path
                  </h4>
                  <p className="text-gray-400">
                    Know exactly where to invest next with data-driven insights
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How We Make This Possible */}
        <div className="text-center mb-16">
          <h3
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            How We Make This Possible
          </h3>
          <div className="w-24 h-1 bg-linear-to-r from-transparent via-[#FF894A] to-transparent mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16 relative">
          {/* Card 1 - Speed Multiplier */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#FF894A]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:border-[#FF894A] transition-all transform hover:scale-105 hover:-translate-y-2">
              <div className="bg-[#FF894A]/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <div className="text-5xl">⚡</div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-[#FF894A] rounded-full animate-pulse"></div>
                <h4
                  className="text-2xl font-bold text-[#FF894A]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Speed Multiplier
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                2-4 weeks from idea to live product. While others are still in
                discovery phases, you are launching.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#FF894A]/80">
                <span className="font-semibold">10x faster</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Card 2 - Validation Focus */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#10b981]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:border-[#10b981] transition-all transform hover:scale-105 hover:-translate-y-2">
              <div className="bg-[#10b981]/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <div className="text-5xl">✅</div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse"></div>
                <h4
                  className="text-2xl font-bold text-[#10b981]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Validation Focus
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                We build only what proves (or disproves) your hypothesis. Every
                feature has a purpose. Zero fluff.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#10b981]/80">
                <span className="font-semibold">Data-driven</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          {/* Card 3 - Cost Division */}
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#FF894A]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100"></div>
            <div className="relative bg-linear-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 hover:border-[#FF894A] transition-all transform hover:scale-105 hover:-translate-y-2">
              <div className="bg-[#FF894A]/20 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <div className="text-5xl">💰</div>
              </div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-[#FF894A] rounded-full animate-pulse"></div>
                <h4
                  className="text-2xl font-bold text-[#FF894A]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Cost Division
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                10x cheaper than traditional agencies because we eliminate
                waste, not quality. Smart efficiency, not corner-cutting.
              </p>
              <div className="flex items-center gap-2 text-sm text-[#FF894A]/80">
                <span className="font-semibold">Smart savings</span>
                <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Outcome */}
        <div className="relative overflow-hidden bg-linear-to-br from-[#10b981]/10 via-[#0D0A08] to-[#FF894A]/10 border border-[#10b981]/30 rounded-3xl p-8 md:p-12">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#10b981]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF894A]/5 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="text-4xl">🎯</div>
              <h4
                className="text-3xl font-bold text-[#10b981]"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                The Outcome
              </h4>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Best Case Card */}
              <div className="bg-[#10b981]/10 border border-[#10b981]/40 rounded-2xl p-6 hover:border-[#10b981] transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    🚀
                  </div>
                  <h5
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Best Case
                  </h5>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  You have validated a winning idea and you are ready to scale
                  with confidence and capital still in the bank.
                </p>
              </div>

              {/* Worst Case Card */}
              <div className="bg-[#FF894A]/10 border border-[#FF894A]/40 rounded-2xl p-6 hover:border-[#FF894A] transition-all group">
                <div className="flex items-start gap-3 mb-3">
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    💡
                  </div>
                  <h5
                    className="text-xl font-bold text-white"
                    style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                  >
                    Worst Case
                  </h5>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  You learned what does not work for under $15K and 4 weeks. You
                  pivot smart instead of failing big.
                </p>
              </div>
            </div>

            {/* Bottom Banner */}
            <div className="bg-linear-to-r from-[#FF894A]/20 to-transparent border-l-4 border-[#FF894A] rounded-lg p-6">
              <p
                className="text-xl font-bold text-center text-[#FF894A]"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Either way, you are miles ahead of everyone still planning. ⚡
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
