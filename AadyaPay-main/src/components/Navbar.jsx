import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    navigate("/", { replace: false });
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const links = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Download", action: () => scrollToSection("download") },
    { name: "FAQs", action: () => scrollToSection("faqs") },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="bg-green-700 shadow-lg sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* ✅ Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/easype.jpg"
            alt="easype logo"
            className="h-12 w-12 object-cover rounded-full border-2 border-yellow-400"
          />
          <h1 className="text-2xl font-extrabold text-yellow-300 tracking-wide drop-shadow-md">
            EASYPE
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 items-center">
          {links.map((link, i) =>
            link.to ? (
              <a
                key={i}
                href={link.to}
                className="text-white font-medium hover:text-yellow-300 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <button
                key={i}
                onClick={link.action}
                className="text-white font-medium hover:text-yellow-300 transition-colors"
              >
                {link.name}
              </button>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-yellow-300 focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-green-600 px-4 pb-4 space-y-2 shadow-inner">
          {links.map((link, i) =>
            link.to ? (
              <a
                key={i}
                href={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white font-medium hover:text-yellow-300 transition-colors"
              >
                {link.name}
              </a>
            ) : (
              <button
                key={i}
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                }}
                className="block text-white font-medium hover:text-yellow-300 transition-colors"
              >
                {link.name}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
