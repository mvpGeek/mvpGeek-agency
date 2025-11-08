import { useState } from "react";
import { Check, ArrowRight, Menu, X, ChevronDown } from "lucide-react";

const MVPGeekLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<null | Number>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    idea: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! We will be in touch soon.");
    setFormData({ name: "", email: "", phone: "", idea: "" });
  };

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

  return (
    <div className="bg-[#0D0A08] text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0D0A08]/95 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div
              className="text-2xl font-bold text-[#FF894A]"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              MVP Geek
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-[#FF894A] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#what-we-build"
                className="text-gray-300 hover:text-[#FF894A] transition-colors"
              >
                What We Build
              </a>
              <a
                href="#pricing"
                className="text-gray-300 hover:text-[#FF894A] transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-[#FF894A] transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0D0A08] border-t border-white/10">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#how-it-works"
                className="block text-gray-300 hover:text-[#FF894A]"
              >
                How It Works
              </a>
              <a
                href="#what-we-build"
                className="block text-gray-300 hover:text-[#FF894A]"
              >
                What We Build
              </a>
              <a
                href="#pricing"
                className="block text-gray-300 hover:text-[#FF894A]"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block text-gray-300 hover:text-[#FF894A]"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-4xl md:text-7xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Validate Your Idea in <br />{" "}
            <span className="text-[#FF894A]">Weeks Not Months</span>
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
            <span className="text-gray-600">
              Hero Visual / Dashboard Mockup
            </span>
          </div>
        </div>
      </section>

      {/* Problem Section */}
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
              Too many founders waste{" "}
              <span className="text-red-400">months</span> just trying to get
              their MVP off the ground.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
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
                      Development agencies quote 6+ months and $80K+.
                      Freelancers disappear mid-project. DIY routes leave you
                      stuck in tutorial hell at 2 AM.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border-l-4 border-red-500/50 rounded-lg p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Death By Delay
                    </h4>
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

              {/* CTA Box */}
              <div className="bg-linear-to-r from-[#FF894A]/20 via-[#FF894A]/10 to-transparent border border-[#FF894A]/40 rounded-2xl p-6 mt-8">
                <p
                  className="text-xl font-bold text-[#FF894A]"
                  style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
                >
                  Your idea deserves better than this broken system.
                </p>
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
                        <p className="text-white font-semibold">
                          Launch (Maybe)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-500/20 border border-red-500/40 rounded-xl p-4 text-center mt-6">
                    <p className="text-red-400 font-bold text-2xl mb-1">
                      $80K+
                    </p>
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
        </div>
      </section>

      {/* Solution Section */}
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
                    <p className="text-gray-400">
                      If people actually want this
                    </p>
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
                      Know exactly where to invest next with data-driven
                      insights
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
                  We build only what proves (or disproves) your hypothesis.
                  Every feature has a purpose. Zero fluff.
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
                    You learned what does not work for under $15K and 4 weeks.
                    You pivot smart instead of failing big.
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

      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Founders Who <span className="text-[#FF894A]">Moved Fast</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="text-5xl text-[#FF894A] mb-4">"</div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                We went from idea to 100 paying users in 5 weeks. MVPGeek
                delivered exactly what we needed, no fluff, just results.
              </p>
              <div className="flex text-[#FF894A] mb-4">
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
              <div className="text-5xl text-[#FF894A] mb-4">"</div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                I was quoted $80K and 6 months elsewhere. MVPGeek got me live in
                3 weeks for a fraction of the cost. Game changer.
              </p>
              <div className="flex text-[#FF894A] mb-4">
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
              <div className="text-5xl text-[#FF894A] mb-4">"</div>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Fast, professional, and they actually understood what MVP means.
                No feature bloat, just a solid product we could test
                immediately.
              </p>
              <div className="flex text-[#FF894A] mb-4">
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

      {/* How It Works */}
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
              <span className="font-semibold text-white">Bottom Line:</span>{" "}
              Every project is unique. Book a free call and get a detailed quote
              in 48 hours.
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

      <section id="what-we-build" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Everything You Need to{" "}
            <span className="text-[#FF894A]">Validate Fast</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                🌐
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Web Applications
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Responsive, fast-loading web apps that work beautifully on any
                device. Built with modern frameworks for reliability and speed.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                📱
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Mobile Apps
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Native iOS and Android apps or cross-platform solutions. Choose
                what fits your audience and budget.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Landing Pages
              </h3>
              <p className="text-gray-300 leading-relaxed">
                High-converting landing pages to test demand before you build.
                Capture leads and validate interest fast.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                🔌
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                API & Integrations
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Connect to payment processors, databases, third-party
                services—whatever your MVP needs to function.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Admin Dashboards
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Simple, powerful dashboards to manage your users, content, and
                data from day one.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#FF894A]/50 transition-all group">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                Core Features Only
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We focus on the 20% of features that deliver 80% of the value.
                Launch lean, iterate smart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            Frequently Asked <span className="text-[#FF894A]">Questions</span>
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
                    className={`shrink-0 text-[#FF894A] transition-transform ${
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

      {/* Final CTA / Contact */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-[#FF894A]/20 to-transparent border border-[#FF894A]/30 rounded-3xl p-12">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-center"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              Ready to Validate Your Idea?
            </h2>
            <p className="text-xl text-gray-300 text-center mb-8">
              Stop waiting. Stop overthinking. Start building.
            </p>
            <p className="text-gray-400 text-center mb-12">
              Book a free 30-minute call. We will discuss your idea, map out
              your MVP, and give you a clear timeline and price—no obligations,
              no sales pressure.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#FF894A] focus:outline-none focus:ring-2 focus:ring-[#FF894A]/50 text-white"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#FF894A] focus:outline-none focus:ring-2 focus:ring-[#FF894A]/50 text-white"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#FF894A] focus:outline-none focus:ring-2 focus:ring-[#FF894A]/50 text-white"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Tell us about your idea *
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#FF894A] focus:outline-none focus:ring-2 focus:ring-[#FF894A]/50 text-white resize-none"
                  value={formData.idea}
                  onChange={(e) =>
                    setFormData({ ...formData, idea: e.target.value })
                  }
                  placeholder="What problem are you solving? Who is your target user?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF894A] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#ff7a35] transition-colors"
              >
                Book Your Free Call
              </button>

              <p className="text-center text-sm text-gray-500 flex items-center justify-center">
                🔒 Your information is safe. We never share or sell your data.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div
                className="text-2xl font-bold text-[#FF894A] mb-4"
                style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
              >
                MVP Geek
              </div>
              <p className="text-gray-400 text-sm">
                Validate Fast, Build Smart
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
              <div className="space-y-2">
                <a
                  href="#how-it-works"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  How It Works
                </a>
                <a
                  href="#what-we-build"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  What We Build
                </a>
                <a
                  href="#pricing"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  Terms of Service
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-[#FF894A] text-sm"
                >
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
            © 2025 MVP Geek. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MVPGeekLanding;
