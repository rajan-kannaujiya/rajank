import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
// import Services from "./pages/Services";
import PricingSection from "./pages/PricingSection";
import SkillsPage from "./pages/Skills"; // Import SkillsPage
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import RecentProjects from "./pages/RecentProjects";


function HomePage() {
  
  return (
    <>
      
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsPage/>
      <RecentProjects/>
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-10">
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

function PricingPage() {
  return (
    <>
      <Navbar />
      <PricingSection />
      <Footer />
    </>
  );
}

// function ContactPage() {
//   return (
//     <>
//       <Navbar />
//       <ContactForm />
//       <Footer />
//     </>
//   );
// }


// function AboutPage() {
//   return (
//     <>
//       <Navbar />
//       <AboutSection />
//       <Footer />
//     </>
//   );
// }


// // Add SkillsPage component
// function SkillsPageComponent() {
//   return (
//     <>
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <SkillsPage />
    
//       <Footer />
//       </div>
//     </>
//   );
// }
function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/pricing" element={<PricingPage />} />
        {/* <Route path="/skills" element={<SkillsPageComponent />} />  */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}

        

      </Routes>
    </Router>
  );
}

export default App;
