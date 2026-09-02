"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BookingWidget } from "../booking/BookingWidget";
import { Button } from "../ui/Button";

export function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = [
    "Your Peaceful Stay Begins Here.",
    "Experience Serenity.",
    "Feel at Home."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 bg-[#2A2A2A] overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="text-brand-cream text-sm md:text-base tracking-[0.3em] uppercase font-medium">
            Welcome to Bethal Residency
          </span>
        </motion.div>

        <div className="h-32 md:h-40 flex items-center justify-center w-full max-w-4xl mb-6">
          <motion.h1
            key={textIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-brand-cream leading-tight"
          >
            {rotatingTexts[textIndex]}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-200 text-lg md:text-xl font-light max-w-2xl mb-12 leading-relaxed"
        >
          Experience comfort, warmth, and peaceful hospitality at Matigara's premier boutique stay.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 mb-24"
        >
          <Button size="lg" onClick={() => window.location.href = '/booking'}>
            Book Your Stay
          </Button>
          <Button variant="outline" size="lg" className="border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-charcoal" onClick={() => window.location.href = '/about'}>
            Explore the Residency
          </Button>
        </motion.div>
      </div>

      {/* Booking Widget Floating at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-1/2 px-6">
        <BookingWidget />
      </div>
    </section>
  );
}
