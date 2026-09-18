"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";


export default function DiningPage() {
  return (
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12 text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-6"
        >
          Taste the Experience
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light"
        >
          A culinary journey designed to comfort and delight.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="relative aspect-video w-full mb-24 overflow-hidden rounded-sm shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1600&auto=format&fit=crop"
            alt="Dining Area"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <section className="bg-brand-charcoal text-brand-cream py-24">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Our Menu" 
            subtitle="Featuring a selection of local favorites and continental classics, prepared with the freshest ingredients."
            className="text-brand-cream"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-16">
            <div>
              <h3 className="text-2xl font-serif mb-8 text-brand-green border-b border-gray-700 pb-4">Breakfast</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-medium tracking-wide uppercase text-sm">Continental Breakfast</span>
                    <span className="text-gray-400 text-sm">₹---</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light">Freshly baked pastries, seasonal fruits, coffee or tea.</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-medium tracking-wide uppercase text-sm">Local Morning Plate</span>
                    <span className="text-gray-400 text-sm">₹---</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light">Traditional regional breakfast specialties.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif mb-8 text-brand-green border-b border-gray-700 pb-4">Dinner</h3>
              <ul className="space-y-6">
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-medium tracking-wide uppercase text-sm">Grilled Salmon</span>
                    <span className="text-gray-400 text-sm">₹---</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light">Served with roasted vegetables and lemon butter sauce.</p>
                </li>
                <li>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-medium tracking-wide uppercase text-sm">Classic Indian Thali</span>
                    <span className="text-gray-400 text-sm">₹---</span>
                  </div>
                  <p className="text-gray-400 text-sm font-light">A wholesome meal featuring curries, dal, rice, and bread.</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-20 text-gray-400 text-sm font-light">
            <p>Timings: Breakfast 7:30 AM - 10:30 AM | Dinner 7:00 PM - 10:30 PM</p>
            <p className="mt-2 text-xs italic">* Note: Prices and items are placeholders for demonstration.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
