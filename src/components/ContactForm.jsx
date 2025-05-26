import { useState } from "react";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const ContactForm = () => {
  return (
    <section  id="contact" className="bg-gray-900 text-white py-10 px-6 md:px-12 min-h-screen flex flex-col items-center transition-opacity duration-700 relative isolate">
      {/* Background Gradient Effect */}
      <div
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1e3a8a] to-[#60a5fa] opacity-40"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <h1 className="text-4xl transition-opacity duration-700 font-bold mb-5 flex flex-col scroll-effect">Let's Connect</h1>
      <div className="container transition-opacity duration-700 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 scroll-effect">
        {/* Contact Form */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                placeholder="Enter a valid email"
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold">Address</label>
            <input
              type="text"
              placeholder="Enter your address"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your message"
              className="w-full p-3 bg-gray-800 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
          </div>

          <button className="w-full bg-[#D2A07F] text-black font-bold py-3 rounded-lg hover:bg-[#b38367] transition">
            SUBMIT
          </button>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* LinkedIn */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-[#ec1b1b] shadow-md text-center flex flex-col items-center hover:scale-105 transition-all ">
            <Linkedin size={40} className="text-[#0A66C2] scroll-effect" /> {/* LinkedIn Blue */}
            <h3 className="font-bold text-lg mt-2 scroll-effect"> LinkedIn</h3>
            <a  href="https://www.linkedin.com/in/rajan-kannaujiya" target="_blank" className="text-sm text-gray-300 mt-1 scroll-effect">rajan-kannaujiya</a>
          </div>

          {/* Gmail */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-[#0b9319] shadow-md text-center flex flex-col items-center hover:scale-105 transition-all">
            <Mail size={40} className="text-[#EA4335] scroll-effect" /> {/* Gmail Red */}
            <h3 className="font-bold text-lg mt-2 scroll-effect">Gmail</h3>
            <p className="text-sm text-gray-300 mt-1 scroll-effect">rajankannaujiya</p>
          </div>

          {/* GitHub */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-[#1923df] shadow-md text-center flex flex-col items-center hover:scale-105 transition-all">
            <Github size={40} className="text-[#181717] scroll-effect" /> {/* GitHub Dark Gray */}
            <h3 className="font-bold text-lg mt-2 scroll-effect">GitHub</h3>
            <a  href="https://github.com/rajan-kannaujiya" target="_blank" className="text-sm text-gray-300 mt-1 scroll-effect">rajan-kannaujiya</a>
          </div>

          {/* Instagram */}
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-[#FFE873] shadow-md text-center flex flex-col items-center hover:scale-105 transition-all">
            <Instagram size={40} className="text-[#E1306C] scroll-effect" /> {/* Instagram Pinkish-Red */}
            <h3 className="font-bold text-lg mt-2 scroll-effect">Instagram</h3>
            <p className="text-sm text-gray-300 mt-1 scroll-effect">iamrajan05</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;