import { useState } from "react";
import { Link } from "react-router-dom";

type NavItem = {
  name: string;
  href: string;
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Brands", href: "#brands"}
  ];

  return (
    <nav className="bg-white fixed top-4 left-4 right-4 mx-0 px-0 rounded-full z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on left */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-gray-900">
              BRAVO
            </Link>
          </div>

          {/* Menu items on right */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-2">
              {navItems.map((item) => (
                <Link
                  to={`/${item.name}`}
                  key={item.name}
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="#get-template"
              className="bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-orange-600 transition-colors ml-4"
            >
              Get Template
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#get-template"
              className="bg-orange-500 text-white block px-3 py-3 rounded-full text-base font-medium mt-4 text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Template
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
