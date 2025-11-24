"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const navItems = [
    { label: "Home", link: "/" },
    { label: "Features", link: "/features" },
    { label: "Pricing", link: "/pricing" },
    { label: "FAQ", link: "/faq" },
    { label: "Contact", link: "/contact" },
  ];

  const pathname = usePathname();
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
const activeTab = navItems.find(item => item.link === pathname)?.label || "Home";
 
  
  return (
    <header >
      <motion.nav
        className="px-6 md:px-10 py-5 shadow-md bg-white fixed w-full top-0 left-0 z-50"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-brand w-8 h-8 flex items-center justify-center text-white text-lg font-bold rounded-lg">
              V
            </div>
            <h2 className="font-bold text-xl hidden md:block">VibenPay</h2>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.span
                key={item.label}
                whileHover={{ y: -3 }}
                className="transition"
              >
                <Link
                  href={item.link}
                  className={`text-gray-800 font-medium hover:text-blue-700 transition ${
                    activeTab === item.label ? "text-blue-700" : ""
                  }`}
                >
                  {item.label}
                </Link>
              </motion.span>
            ))}
          </div>

          {/* CTA + Mobile Icon */}
          <div className="flex items-center gap-2">
            <Link
              href="/auth/login"
              className="hidden md:block text-sm font-medium"
            >
              Sign In
            </Link>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/auth/signup"
                className="bg-brand rounded-lg px-4 py-2 text-sm text-white shadow-md"
              >
                Join Now
              </Link>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <X className="text-gray-800" />
                ) : (
                  <Menu className="text-gray-800" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.16 }}
              className="md:hidden mt-4 bg-white shadow-md rounded-lg p-5 flex flex-col gap-4"
            >
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.link}
                  onClick={() => setMenuOpen(false)}
                  className={`text-gray-800 font-medium hover:text-blue-700 ${
                    activeTab === item.label ? "text-blue-700" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              <hr className="my-2" />

              <Link
                href="/auth/login"
                className="bg-brand text-white py-2 rounded-lg text-center"
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}

export default Navbar;
