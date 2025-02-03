import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#333] text-white py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 text-center">
        
        {/* Content Grid - Centered for Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center w-full text-center md:text-center">
          
          {/* About Us */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">About Us</h3>
            <p className="text-gray-300 max-w-xs">
              We provide the best services to our customers with top-notch quality.
            </p>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
            <p className="text-gray-300">Email: caninjas@gmail.com</p>
            {/* <p className="text-gray-300">Phone: +123 456 7890</p> */}
          </div>

          {/* Social Media Links (Centered Fix) */}
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </div>

        {/* Navigation Links */}
        <div className="mt-6 border-t border-gray-600 pt-4 w-full">
          <ul className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4 text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} OurCompany. All Rights Reserved.</p>
          <p>Made with <span className="text-red-500">❤️</span> by ambitious people</p>
        </div>
      </div>
    </footer>
  );
}
