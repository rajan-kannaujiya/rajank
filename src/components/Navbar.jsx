import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-transparent z-30 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold text-blue-400 mb-4">
            Rajan Kannaujiya
          </h1>
        <button
          className="hamburger md:hidden text-white p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div
          className={`nav-links space-y-4 md:space-y-0 md:space-x-6 md:flex ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          <a href="/" className="text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 px-2 block md:inline-block">Home</a>
          <li className="text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 px-2 block md:inline-block" ><HashLink smooth to="/#section2"   >About</HashLink></li>
          {/* <a href="/#skills" className="text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 px-2 block md:inline-block">Skills</a> */}
          <li className="text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 px-2 block md:inline-block" ><HashLink smooth to="/#skills"   >Skills</HashLink></li>
          <a href="/pricing" className="text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 px-2 block md:inline-block">Pricing</a>
          <li className="text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 px-2 block md:inline-block" ><HashLink smooth to="/#contact"   >Contact</HashLink></li>
          {/* <a href='/recentprojects' className="text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 px-2 block md:inline-block">Projects</a> */}
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;