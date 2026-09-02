"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";

export function WelcomeSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal mb-8 leading-tight">
                More Than a Stay.<br />
                <span className="text-brand-green italic">A Place to Feel at Home.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg font-light leading-relaxed">
                <p>
                  Nestled in the peaceful surroundings of Matigara, Bethal Residency offers a perfect blend of modern comfort and warm, personalized hospitality. 
                </p>
                <p>
                  Whether you are traveling for leisure, visiting nearby attractions, or simply seeking a quiet retreat, our thoughtfully designed spaces provide the perfect environment to relax, recharge, and connect.
                </p>
              </div>
              
              <div className="mt-12 flex items-center gap-8">
                <div className="text-center">
                  <span className="block text-3xl font-serif text-brand-charcoal mb-1">Premium</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Accommodation</span>
                </div>
                <div className="w-px h-12 bg-brand-grey"></div>
                <div className="text-center">
                  <span className="block text-3xl font-serif text-brand-charcoal mb-1">Peaceful</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">Environment</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] md:aspect-[3/4] relative w-full overflow-hidden shadow-2xl rounded-sm">
                <Image 
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1400&auto=format&fit=crop" 
                  alt="Interior of Bethal Residency" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Decorative Element */}
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-brand-green/10 -z-10 rounded-full blur-3xl"></div>
              <div className="absolute -top-8 -right-8 w-48 h-48 bg-brand-charcoal/5 -z-10 rounded-full blur-3xl"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
