import { useEffect, useState } from "react";
// import ScrollToSection from "../utils/ScrollToSection"; // 👈 import the utility

const Home = () => {
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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gray-900 p-10"
    >
      
      <div
        className={`p-6 bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl border border-white/20 max-w-5xl flex flex-col md:flex-row items-center justify-between w-full transition-all duration-700 transform ${
          visible
            ? "opacity-100 translate-y-0 hover:scale-105 hover:shadow-2xl"
            : "opacity-0 translate-y-10"
        }`}
      >
        
        {/* Text Content */}
        <div
          className={`text-left md:w-1/2 p-4 transition-opacity duration-700 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-6xl font-bold text-white mb-4">Hi! I'm</h1>
          <h1 className="text-6xl font-bold text-blue-400 mb-4">
            Rajan Kannaujiya
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Full-Stack Developer | Data Science Enthusiast
          </p>
          <button className="bg-blue-400 text-white px-6 py-3 rounded-full hover:bg-blue-500 transition-colors">
            Let's Begin!
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img
            className={`w-64 h-64 object-cover rounded-full border border-white/20 transition-all duration-700 ${
              visible ? "grayscale-0 scale-100" : "grayscale scale-75"
            }`}
            src="photosraj.jpg"
            alt="Rajan Kannaujiya"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;