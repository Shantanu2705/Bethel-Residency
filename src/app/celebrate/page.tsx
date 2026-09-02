"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function CelebratePage() {
  return (
    <main className="pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-6"
        >
          Celebrate Life&apos;s Special Moments
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light"
        >
          The perfect setting for intimate gatherings and joyous celebrations.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] w-full shadow-2xl rounded-sm overflow-hidden mb-8">
            <Image 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1400&auto=format&fit=crop"
              alt="Celebration Setup"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square w-full shadow-md rounded-sm overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1522228115018-d838bcce5c3a?q=80&w=800&auto=format&fit=crop"
                alt="Gathering"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square w-full shadow-md rounded-sm overflow-hidden">
               <Image 
                src="https://images.unsplash.com/photo-1530103862676-de8892b12fa7?q=80&w=800&auto=format&fit=crop"
                alt="Dinner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 shadow-xl border border-gray-100">
          <h3 className="text-3xl font-serif text-brand-charcoal mb-2">Plan Your Event</h3>
          <p className="text-gray-500 mb-8 font-light">Fill out the form below and our team will get in touch to help organize your perfect event.</p>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Name</label>
                <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Phone</label>
                <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Event Type</label>
                <select className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors appearance-none" required>
                  <option value="">Select an event</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="family">Family Gathering</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Number of Guests</label>
                <input type="number" min="1" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Preferred Date</label>
                <input type="date" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Message</label>
              <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors resize-none" placeholder="Tell us more about your requirements..."></textarea>
            </div>

            <Button type="button" size="lg" className="w-full mt-4">
              Send Enquiry
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
