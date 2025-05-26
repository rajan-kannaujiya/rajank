import { useEffect, useState } from "react";

const HeroSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("home");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 p-10 relative isolate transition-opacity duration-700"
    >
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

      <div
        className={`max-w-5xl flex flex-col md:flex-row items-center justify-between w-full transition-all duration-700 transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
      >
        {/* Text Content */}
        <div
          className={`text-left md:w-1/2 p-4 transform transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h1 className="text-5xl font-bold text-white mb-4">Hi! I'm</h1>
          <h1 className="text-4xl font-bold text-blue-400 mb-4">
            Rajan Kannaujiya
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Web Developer | Machine Learning Engineer 
          </p>

          <div className="mt-6 flex justify-center gap-4">
            {/* <button
              className="bg-white/10 backdrop-blur-lg border border-white/20 text-white px-8 py-3 rounded-full shadow-md hover:bg-white/20 hover:scale-90 transition-all duration-300 text-base font-semibold flex items-center gap-2"
            >
              🚀 Hire Now
            </button> */}
            <button
              className="bg-white/10 backdrop-blur-lg cursor-pointer border border-white/20 text-white px-8 py-3 rounded-full shadow-md hover:bg-yellow/20 hover:scale-90 transition-all duration-300 text-base font-semibold flex items-center gap-2"
            >
              📥 Download CV
            </button>
          </div>
        </div>
        {/* Image Container */}
        <div className="md:w-1/2 flex flex-col items-center justify-end relative">
          <img
            className={`w-90 h-116 rounded-4xl object-cover    transition-all duration-700 ${visible ? "grayscale-0 scale-100" : "grayscale scale-75"
              }`}
            src="photosraj.png"
            alt="Rajan Kannaujiya"
          />
          
        </div>

      </div>
    </section>
  );
};

export default HeroSection;