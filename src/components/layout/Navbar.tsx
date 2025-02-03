"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sun, Moon } from "lucide-react";

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-300 ${darkMode ? 'bg-[#4a4c5c]' : 'bg-[#fda521]'}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Side - Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              CA Ninjas
            </Link>
          </div>
          
          {/* Right Side - Navigation & Dark Mode */}
          <div className="flex items-center space-x-4 md:ml-auto">
            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-white hover:opacity-80">Home</Link>
              <Link href="/ca-store" className="text-white hover:opacity-80">CA Store</Link>
              <Link href="/about" className="text-white hover:opacity-80">About</Link>
              <Link href="/contact" className="text-white hover:opacity-80">Contact</Link>
            </div>
            
            {/* Dark Mode Toggle (Always Visible) */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md text-white focus:outline-none"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className={`md:hidden absolute top-16 left-0 right-0 shadow-lg p-4 ${darkMode ? 'bg-[#4a4c5c]' : 'bg-[#fda521]'}`}>
          <Link href="/" className="block text-white py-2">Home</Link>
          <Link href="/ca-store" className="block text-white py-2">CA Store</Link>
          <Link href="/about" className="block text-white py-2">About</Link>
          <Link href="/contact" className="block text-white py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
}
