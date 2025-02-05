"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { Menu, Sun, Moon, X } from "lucide-react";
import { ThemeContext } from "../../context/ThemeContext";

export function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null; // ✅ Prevent errors if ThemeContext is undefined

  const { theme, toggleTheme } = themeContext;

  // ✅ Close Mobile Menu on Navigation
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 shadow-md transition-colors duration-300 ${
        theme === "dark" ? "bg-[#2b2d42]" : "bg-[#fda521]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* 🔹 Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              CA Ninjas
            </Link>
          </div>

          {/* 🔹 Right Side - Navigation & Dark Mode */}
          <div className="flex items-center space-x-4 md:ml-auto">
            {/* 🔹 Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/" className="text-white hover:opacity-80">Home</Link>
              <Link href="/ca-store" className="text-white hover:opacity-80">CA Store</Link>
              <Link href="/about" className="text-white hover:opacity-80">About</Link>
              <Link href="/contact" className="text-white hover:opacity-80">Contact</Link>
            </div>

            {/* 🔹 Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-md text-white focus:outline-none"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* 🔹 Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-white"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 right-0 shadow-lg p-4 ${
            theme === "dark" ? "bg-[#2b2d42]" : "bg-[#fda521]"
          }`}
        >
          <Link href="/" className="block text-white py-2" onClick={closeMenu}>Home</Link>
          <Link href="/ca-store" className="block text-white py-2" onClick={closeMenu}>CA Store</Link>
          <Link href="/about" className="block text-white py-2" onClick={closeMenu}>About</Link>
          <Link href="/contact" className="block text-white py-2" onClick={closeMenu}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
