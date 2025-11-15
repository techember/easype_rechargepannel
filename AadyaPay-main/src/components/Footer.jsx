import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      {/* Top Accent Line */}
      <div className="bg-[#009961] h-1"></div>

      {/* Main Footer */}
      <div className="bg-gradient-to-br from-[#FFF8E1] via-[#FFF3E0] to-[#E8F5E9] text-gray-800 py-10 border-t border-[#F7931E]/30">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-[#F7931E]">EASY</span>
              <span className="text-[#009961]">PE</span> - Recharge App
            </h2>
            <p className="font-medium">
              Recharge mobiles, DTH, pay bills, book travel, and access services — all from one secure and easy app.
            </p>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#009961]">Important Links</h2>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/privacy-policy" className="hover:text-[#F7931E] transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#F7931E] transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="hover:text-[#F7931E] transition">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#009961]">Contact Details</h2>
            <div className="space-y-2 font-medium">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-5 h-5 text-[#F7931E]" />
                <span>New Delhi</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-5 h-5 text-[#F7931E]" />
                <span>EasyPe@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-5 h-5 text-[#F7931E]" />
                <span>+91 95995 58707</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-[#009961] text-white py-4 text-center text-sm">
        <p>© {new Date().getFullYear()} EASY<span className="text-[#F7931E]">PE</span>. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
