import React from "react";
import Link from "next/link"; // Import Next.js Link for client-side navigation

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex flex-col mb-4 sm:mb-0">
            <div className="text-2xl font-semibold mb-2">Tickify</div>
            <p className="text-sm">A concern of Adventor Global Limited.</p>
            <p className="text-sm mt-1">TRADE LICENSE: TRAD/DNCC/141845/2022</p>
          </div>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            {/* Social Media Icons with Hover Transform Animation */}
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xl transition-all transform hover:scale-105"
            >
              <i className="fab fa-facebook"></i>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xl transition-all transform hover:scale-105"
            >
              <i className="fab fa-youtube"></i>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xl transition-all transform hover:scale-105"
            >
              <i className="fab fa-instagram"></i>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xl transition-all transform hover:scale-105"
            >
              <i className="fab fa-tiktok"></i>
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white text-xl transition-all transform hover:scale-105"
            >
              <i className="fab fa-whatsapp"></i>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-wrap justify-between gap-6">
          {/* Info Links */}
          <div className="mb-4 md:mb-0 w-full sm:w-1/3">
            <h5 className="font-bold mb-2">MORE INFO</h5>
            <ul>
              <li>
             
                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-all transform hover:scale-105">
                    Contact us
               
                </Link>
              </li>
              <li>
     
                <Link href="/faq" className="text-gray-400 hover:text-white text-sm transition-all transform hover:scale-105">
                    FAQ
              
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="mb-4 md:mb-0 w-full sm:w-1/3">
            <h5 className="font-bold mb-2">LEGALS</h5>
            <ul>
              <li>
             
                <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-all transform hover:scale-105">
                    Terms and Conditions
            
                </Link>
              </li>
              <li>
            
                  <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-all transform hover:scale-105">
                    Privacy Policy
              
                </Link>
              </li>
              <li>
            
                <Link href="/refund" className="text-gray-400 hover:text-white text-sm transition-all transform hover:scale-105">
                    Refund Policy
            
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="mb-4 md:mb-0 w-full sm:w-1/3">
            <h5 className="font-bold mb-2">CONTACTS</h5>
            <ul>
              <li className="flex items-center text-gray-400 text-sm mb-2">
                <i className="fas fa-map-marker-alt mr-2"></i>
                House 1199, Mirpur DOHS
              </li>
              <li className="flex items-center text-gray-400 text-sm mb-2">
                <i className="fas fa-phone mr-2"></i>
                +88 018 35099 555
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <i className="fas fa-envelope mr-2"></i>
                info@tickify.live
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          2025 © Tickify | A concern of Adventor Global Ltd.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
