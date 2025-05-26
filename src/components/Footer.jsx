import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-3 bg-[#0a1e3a] text-center text-white">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center px-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <p className="text-sm text-gray-400">© 2025 Rajan Kannaujiya. All rights reserved.</p>
        
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/iamrajan05" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-blue-400" aria-label="Facebook">
            <FaFacebookF className="text-base" />
          </a>
          <a href="https://www.instagram.com/iamrajan05" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-yellow-400" aria-label="Instagram">
            <FaInstagram className="text-base" />
          </a>
          <a href="https://linkedin.com/in/rajan-kannaujiya" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-gray-300" aria-label="Linkedin">
            <FaLinkedin className="text-base" />
          </a>
          <a href="https://github.com/rajan-kannaujiya" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-green-400" aria-label="GitHub">
            <FaGithub className="text-base" />
          </a>
          {/* <a href="https://www.youtube.com/@rajan.kannaujiya" target="_blank" rel="noopener noreferrer" 
             className="text-gray-400 hover:text-red-400" aria-label="YouTube">
            <FaYoutube className="text-base" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
