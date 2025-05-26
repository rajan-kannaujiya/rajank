import { useEffect, useState } from "react";
import { FaCode, FaBrain, FaLaptop } from "react-icons/fa";

const AboutSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("section2");
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
      id="section2"
      className="mb-0  flex items-center justify-center bg-gray-900 p-10 relative isolate transition-opacity duration-700"
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
        className={`max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Left Side: About Me Text */}
        <div className="md:w-1/2 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg text-left">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2> */}
          <h1
            className={`text-4xl md:text-5xl font-bold text-white mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Hi, I'm Rajan
          </h1>

          {/* Professional Description with Icons */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <FaCode className="text-blue-400 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Web Developer</h3>
                <p className="text-base text-gray-300">
                  I specialize in building modern, responsive web applications using technologies like React and Django.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaBrain className="text-blue-400 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Machine Learning Engineer</h3>
                <p className="text-base text-gray-300">
                  I develop intelligent models and solutions, leveraging machine learning to solve real-world problems.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaLaptop className="text-blue-400 text-2xl mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white">Cyber Cafe Experience</h3>
                <p className="text-base text-gray-300">
                  With 4 years of experience in a cyber cafe, I have expertise in applying all types of online forms with precision and efficiency.
                </p>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          {/* <div className="mt-6">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Learn More
            </button>
          </div> */}
        </div>

        {/* Right Side: Single Vector Image */}
        <div className="md:w-1/2 flex justify-center">
          <div className="p-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-lg">
            <img
              className={`w-full max-w-md object-contain transition-all duration-700 ${
                visible ? "grayscale-0 scale-100" : "grayscale scale-75"
              }`}
              src="aboutuss.jpg" // Team Collaboration vector image
              alt="Team Collaboration Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;