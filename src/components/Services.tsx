import React from "react";

const Services = () => {
  return (
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
  );
};

export default Services;
