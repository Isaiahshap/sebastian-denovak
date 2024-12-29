import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const timelineLinks = [
  { period: "Personal Projects", path: "/personal" },
  { period: "Commissioned", path: "/commissioned" },
  { period: "Favorites", path: "/favorites" }
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';
  const [isOpen, setIsOpen] = useState(false);

  if (isLandingPage) return null;

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-6 left-6 z-50 p-2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <motion.span 
            className="block w-8 h-0.5 bg-neutral-800"
            animate={{ rotate: isOpen ? 45 : 0, translateY: isOpen ? 8 : 0 }}
          />
          <motion.span 
            className="block w-8 h-0.5 bg-neutral-800"
            animate={{ opacity: isOpen ? 0 : 1 }}
          />
          <motion.span 
            className="block w-8 h-0.5 bg-neutral-800"
            animate={{ rotate: isOpen ? -45 : 0, translateY: isOpen ? -8 : 0 }}
          />
        </div>
      </button>

      {/* Desktop Navbar */}
      <motion.nav
        className="fixed left-0 top-0 h-screen w-64 bg-white/95 backdrop-blur-md border-r border-neutral-100 p-12 flex flex-col z-40 hidden md:flex"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <NavbarContent location={location} />
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="p-12 pt-24">
              <NavbarContent location={location} onLinkClick={() => setIsOpen(false)} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const NavbarContent: React.FC<{
  location: ReturnType<typeof useLocation>;
  onLinkClick?: () => void;
}> = ({ location, onLinkClick }) => {
  return (
    <>
      <Link 
        to="/" 
        className="text-2xl font-light tracking-wide text-neutral-900 hover:text-neutral-600 transition-colors"
        onClick={onLinkClick}
      >
        Sebastian Denoväk
      </Link>
      
      <motion.div 
        className="text-sm text-neutral-500 uppercase tracking-[0.2em] mb-12 mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Surreal Photography
      </motion.div>
      
      <div className="flex flex-col space-y-6">
        {timelineLinks.map((link, index) => (
          <motion.div
            key={link.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            <Link
              to={link.path}
              className={`tracking-wide transition-colors ${
                location.pathname === link.path 
                  ? "text-neutral-900 font-normal" 
                  : "text-neutral-500 hover:text-neutral-800"
              }`}
              onClick={onLinkClick}
            >
              {link.period}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="mt-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col space-y-6 text-sm">
          <Link 
            to="/about" 
            className={`tracking-wide transition-colors ${
              location.pathname === '/about' 
                ? "text-neutral-900 font-normal" 
                : "text-neutral-500 hover:text-neutral-800"
            }`}
            onClick={onLinkClick}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`tracking-wide transition-colors ${
              location.pathname === '/contact' 
                ? "text-neutral-900 font-normal" 
                : "text-neutral-500 hover:text-neutral-800"
            }`}
            onClick={onLinkClick}
          >
            Contact
          </Link>
          <div className="flex space-x-6 pt-6 text-neutral-500">
            <a 
              href="#" 
              className="hover:text-neutral-800 transition-colors tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
            >
              Instagram
            </a>
            <a 
              href="#" 
              className="hover:text-neutral-800 transition-colors tracking-wide"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook profile"
            >
              Facebook
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
