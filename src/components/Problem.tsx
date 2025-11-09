const Problem = () => {
  return (
    <section className="py-20 px-4 bg-black/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-6 py-2 mb-6">
            <span className="text-red-400 font-semibold text-sm">
              ⚠️ The Problem
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Too many founders waste <span className="text-[#FF6A26]">months</span>{" "}
            just trying to get their MVP off the ground.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {/* Pain Point Cards */}
            <div className="bg-white/5 border-l-4 border-red-500/50 rounded-lg p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💸</div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Agency Paralysis
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Development agencies quote 6+ months and $80K+. Freelancers
                    disappear mid-project. DIY routes leave you stuck in
                    tutorial hell at 2 AM.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-red-500/50 rounded-lg p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h4 className="font-bold text-white mb-2">Death By Delay</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Meanwhile, your idea goes stale, competitors move faster,
                    and your budget bleeds out before you have validated a
                    single assumption.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border-l-4 border-red-500/50 rounded-lg p-6 hover:bg-white/10 transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📉</div>
                <div>
                  <h4 className="font-bold text-white mb-2">
                    Market Misses You
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    By the time most founders finally launch, the market has
                    moved on, or worse, they have run out of runway entirely.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Problem Visual - Animated Timeline */}
          <div className="relative">
            <div className="bg-linear-to-br from-red-500/10 to-transparent rounded-3xl border border-red-500/20 p-8 backdrop-blur-sm">
              <h4
                className="text-xl font-bold mb-8 text-center text-red-400"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Traditional Development Timeline
              </h4>

              {/* Timeline Items */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-red-500/20 border border-red-500/40 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <span className="text-red-400 font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-sm text-gray-400">Month 1-2</p>
                      <p className="text-white font-semibold">
                        Planning & Quotes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-red-500/20 border border-red-500/40 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <span className="text-red-400 font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-sm text-gray-400">Month 3-5</p>
                      <p className="text-white font-semibold">
                        Development Hell
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-red-500/20 border border-red-500/40 rounded-full w-12 h-12 flex items-center justify-center shrink-0">
                    <span className="text-red-400 font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                      <p className="text-sm text-gray-400">Month 6+</p>
                      <p className="text-white font-semibold">Launch (Maybe)</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4 text-center mt-6">
                  <p className="text-red-400 font-bold text-2xl mb-1">$80K+</p>
                  <p className="text-gray-400 text-sm">Budget Burned</p>
                </div>
              </div>

              {/* Animated X mark */}
              <div className="absolute -top-4 -right-4 bg-red-500 rounded-full w-16 h-16 flex items-center justify-center text-3xl shadow-lg shadow-red-500/50 animate-pulse">
                ✕
              </div>
            </div>
          </div>
        </div>
        {/* CTA Box */}
        <div className="bg-linear-to-r from-[#FF6A26]/20 via-[#FF6A26]/10 to-transparent border border-[#FF6A26]/40 rounded-2xl p-6 mt-8">
          <p
            className="text-xl font-bold text-center text-[#FF6A26]"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Your idea deserves better than this broken system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
