const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a className="text-4xl font-bold text-gray-800" href="#home">
            <img src="/Images/logo/alvi_logo.png" alt="ALVI Logo" className="inline-block w-10 h-10 mr-2" />
            Project ALVI
          </a>
          <ul className="flex space-x-6 text-2xl">
            <li><a href="#home" className="text-gray-800 hover:text-blue-600">Home</a></li>
            <li><a href="#LiteratureSurvey" className="text-gray-800 hover:text-blue-600">Literature Survey</a></li>
            <li><a href="#ResearchGap" className="text-gray-800 hover:text-blue-600">Research Gap</a></li>
            <li><a href="#project-scope" className="text-gray-800 hover:text-blue-600">Project Scope</a></li>
            <li><a href="#milestones" className="text-gray-800 hover:text-blue-600">Milestones</a></li>
            <li><a href="#about" className="text-gray-800 hover:text-blue-600">About Us</a></li>
            <li><a href="#contact" className="text-gray-800 hover:text-blue-600">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
