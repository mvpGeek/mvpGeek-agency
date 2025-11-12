import React, { useState } from "react";

const Contact = () => {
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
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-linear-to-br from-[#FF6A26]/20 to-transparent border border-[#FF6A26]/30 rounded-3xl p-12">
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
            Book a free 30-minute call. We will discuss your idea, map out your
            MVP, and give you a clear timeline and price—no obligations, no
            sales pressure.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-300">
                Name *
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#FF6A26] focus:outline-none focus:ring-2 focus:ring-[#FF6A26]/50 text-white"
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
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#FF6A26] focus:outline-none focus:ring-2 focus:ring-[#FF6A26]/50 text-white"
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
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#FF6A26] focus:outline-none focus:ring-2 focus:ring-[#FF6A26]/50 text-white"
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
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:border-[#FF6A26] focus:outline-none focus:ring-2 focus:ring-[#FF6A26]/50 text-white resize-none"
                value={formData.idea}
                onChange={(e) =>
                  setFormData({ ...formData, idea: e.target.value })
                }
                placeholder="What problem are you solving? Who is your target user?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF6A26] border-[#FF6A26] border-4 text-[#0D0A08] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#ff7a35] transition-colors bg-linear-to-b from-[#FF6A26] to-[#FFAE82] focus:ring-2 focus:ring-[#FF6A26] hover:shadow-xl duration-200 cursor-pointer"
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
  );
};

export default Contact;
