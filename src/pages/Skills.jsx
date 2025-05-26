import React from "react";
// import { CSSTransition } from "react-transition-group"; // For animations
import {
  FaPython, FaJava, FaHtml5, FaCss3Alt,
  FaDatabase, FaGitAlt, FaTools, FaGithub, FaChartLine, FaChartBar, FaReact
} from "react-icons/fa";
import {
  SiDjango, SiStreamlit, SiScikitlearn, SiNumpy, SiPandas,
   SiJupyter
} from "react-icons/si";

function SkillsPage() {
  const skillsColumns = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", icon: <FaPython className="text-yellow-400 text-3xl" /> },
        { name: "Java", icon: <FaJava className="text-red-400 text-3xl" /> },
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-3xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-3xl" /> },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Django", icon: <SiDjango className="text-green-500 text-3xl" /> },
        { name: "Streamlit", icon: <SiStreamlit className="text-pink-500 text-3xl" /> },
        { name: "scikit-learn", icon: <SiScikitlearn className="text-yellow-500 text-3xl" /> },
        { name: "React", icon: <FaReact className="text-sky-500 text-3xl" /> },
      ],
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Pandas", icon: <SiPandas className="text-purple-300 text-3xl" /> },
        { name: "NumPy", icon: <SiNumpy className="text-blue-400 text-3xl" /> },
        { name: "Matplotlib", icon: <FaChartLine className="text-sky-500 text-3xl" /> },
        { name: "Power BI", icon: <FaChartBar className="text-sky-500 text-3xl" /> },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500 text-3xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-white text-3xl" /> },
        // { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500 text-3xl" /> },
        { name: "Jupyter", icon: <SiJupyter className="text-orange-300 text-3xl" /> },
        { name: "SQL", icon: <FaDatabase className="text-red-500 text-3xl" /> },
      ],
    },
  ];

  return (
    <section  id="skills" className="bg-gray-900  mb-0 text-white py-20 px-6">
      
      <div className="max-w-7xl mx-auto text-center scroll-effect">
        <h2 className="text-4xl font-bold mb-12 scroll-effect">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left ">
          {skillsColumns.map((col, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-lg p-6 rounded-4xl border hover:scale-105 transition-all border-white/20 shadow-md ">
              <h3 className="text-xl font-semibold mb-4 text-center scroll-effect">{col.title}</h3>
              <div className="grid grid-cols-2   gap-4">
                {col.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="w-full aspect-square   flex flex-col items-center justify-center text-center bg-white/20 rounded-xl hover:bg-white/30 transition scroll-effect"
                  >
                    {skill.icon}
                    <span className="text-sm mt-2 scroll-effect">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
}

export default SkillsPage;
