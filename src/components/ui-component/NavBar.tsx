import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a className="text-4xl font-bold text-gray-800" href="#home">
            <img src="/assets/logo.jpeg" alt="ALVI Logo" className="inline-block w-10 h-10 mr-2" />
            Project ALVI
          </a>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-2xl">
            <li><a href="#home" className="text-gray-800 hover:text-blue-600">Home</a></li>
            <li><a href="#GetStarted" className="text-gray-800 hover:text-blue-600">Literature Survey</a></li>
            <li><a href="#ResearchGap" className="text-gray-800 hover:text-blue-600">Research Gap</a></li>
            <li><a href="#projectscope" className="text-gray-800 hover:text-blue-600">Project Scope</a></li>
            <li><a href="#milestones" className="text-gray-800 hover:text-blue-600">Achievements</a></li>
            <li><a href="#about" className="text-gray-800 hover:text-blue-600">About Us</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact Us</a></li>
          </ul>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 focus:outline-none"
            >
              {/* Hamburger Icon */}
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="md:hidden space-y-4 text-center py-4">
            <li><a href="#home" className="block text-gray-800 hover:text-blue-600 text-2xl">Home</a></li>
            <li><a href="#LiteratureSurvey" className="block text-gray-800 hover:text-blue-600 text-2xl">Literature Survey</a></li>
            <li><a href="#ResearchGap" className="block text-gray-800 hover:text-blue-600 text-2xl">Research Gap</a></li>
            <li><a href="#project-scope" className="block text-gray-800 hover:text-blue-600 text-2xl">Project Scope</a></li>
            <li><a href="#milestones" className="block text-gray-800 hover:text-blue-600 text-2xl">Milestones</a></li>
            <li><a href="#about" className="block text-gray-800 hover:text-blue-600 text-2xl">About Us</a></li>
            <li><a href="#contact" className="block text-gray-800 hover:text-blue-600 text-2xl">Contact Us</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
}
