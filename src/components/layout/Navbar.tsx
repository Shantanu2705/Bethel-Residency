"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, isAdmin } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Stay", href: "/stay" },
    { name: "Dining", href: "/dining" },
    { name: "Celebrate", href: "/celebrate" },
    { name: "Wellness", href: "/wellness" },
    { name: "Travel Guide", href: "/travel-guide" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center z-50">
          <Image src="/logo.jpeg" alt="Bethal Residency Logo" width={140} height={140} className="h-16 md:h-20 w-auto object-contain rounded-sm" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-wide transition-colors hover:text-brand-green text-brand-charcoal"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4 z-50">
          {!user ? (
            <Link
              href="/login"
              className="hidden md:block text-sm font-medium transition-colors hover:text-brand-green text-brand-charcoal"
            >
              Sign In
            </Link>
          ) : (
            <Link
              href={isAdmin ? "/admin" : "/dashboard"}
              className="hidden md:block text-sm font-medium transition-colors hover:text-brand-green text-brand-charcoal"
            >
              {isAdmin ? "Admin" : "Dashboard"}
            </Link>
          )}

          <Link
            href="/stay#book-now"
            className={`hidden md:block px-6 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
              isScrolled
                ? "bg-brand-charcoal text-brand-cream hover:bg-brand-green"
                : "bg-brand-cream text-brand-charcoal hover:bg-white"
            }`}
          >
            Book Now
          </Link>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 transition-colors text-brand-charcoal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-brand-cream flex flex-col pt-32 px-6 lg:hidden"
          >
            <nav className="flex flex-col gap-6 items-center text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-brand-charcoal hover:text-brand-green transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 bg-brand-charcoal text-brand-cream uppercase tracking-widest text-sm w-full max-w-xs transition-colors hover:bg-brand-green"
              >
                Book Now
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
