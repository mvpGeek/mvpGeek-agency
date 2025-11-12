import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div
              className="text-2xl font-bold text-[#FF6A26] mb-4"
              style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
            >
              MVP Geek
            </div>
            <p className="text-gray-400 text-sm">Validate Fast, Build Smart</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <div className="space-y-2">
              <a
                href="#how-it-works"
                className="block text-gray-400 hover:text-[#FF6A26] text-sm"
              >
                How It Works
              </a>
              <a
                href="#what-we-build"
                className="block text-gray-400 hover:text-[#FF6A26] text-sm"
              >
                What We Build
              </a>
              <a
                href="#pricing"
                className="block text-gray-400 hover:text-[#FF6A26] text-sm"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="block text-gray-400 hover:text-[#FF6A26] text-sm"
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
                className="block text-gray-400 hover:text-[#FF6A26] text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-[#FF6A26] text-sm"
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
                className="block text-gray-400 hover:text-[#FF6A26] text-sm"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-[#FF6A26] text-sm"
              >
                Twitter
              </a>
              <a
                href="#"
                className="block text-gray-400 hover:text-[#ff6b265a] text-sm"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        <p className="my-8 font-bold text-7xl md:text-[12rem] opacity-30 text-[#FF6A26] text-center">
          MVP Geek
        </p>
        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          © 2025 MVP Geek. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
