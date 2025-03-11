'use client';

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Ramchandra&apos;s Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a 
              href="#education" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Education
            </a>
            <a 
              href="#experience" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Experience
            </a>
            <a 
              href="#skills" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 