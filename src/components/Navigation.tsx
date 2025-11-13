import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[#0D0A08]/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
          href="#"
            className="text-2xl font-bold text-[#FF6A26] flex gap-1 items-center"
            style={{ fontFamily: "Bricolage Grotesque, sans-serif" }}
          >
            <img src="/logo.svg" alt="MVP Geek" width={36} height={36} />
            MVP Geek
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-[#FF6A26] transition-colors"
            >
              How It Works
            </a>
            <a
              href="#what-we-build"
              className="text-gray-300 hover:text-[#FF6A26] transition-colors"
            >
              What We Build
            </a>
            <a
              href="#testimonials"
              className="text-gray-300 hover:text-[#FF6A26] transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-[#FF6A26] transition-colors"
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
              className="block text-gray-300 hover:text-[#FF6A26]"
            >
              How It Works
            </a>
            <a
              href="#what-we-build"
              className="block text-gray-300 hover:text-[#FF6A26]"
            >
              What We Build
            </a>
            <a
              href="#pricing"
              className="block text-gray-300 hover:text-[#FF6A26]"
            >
              Pricing
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-[#FF6A26]"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
