"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24">
      {/* Header */}
      <section className="container mx-auto px-6 md:px-12 mb-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-6"
        >
          Our Story
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl font-light"
        >
          A sanctuary of peace and hospitality in the heart of Matigara.
        </motion.p>
      </section>

      {/* Story Content */}
      <section className="container mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] w-full"
            >
              <Image 
                src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1400&auto=format&fit=crop"
                alt="Bethal Residency Architecture"
                fill
                className="object-cover rounded-sm shadow-xl"
              />
            </motion.div>
          </div>
          <div className="w-full lg:w-1/2 space-y-6 text-gray-600 font-light leading-relaxed text-lg">
            <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-6">A Vision of Comfort</h2>
            <p>
              Bethal Residency was born from a simple vision: to create a space where modern comfort meets warm, authentic hospitality. Located in the serene surroundings of Batlabari New Rangia, just behind NBU in Matigara, we offer a peaceful retreat away from the city's hustle.
            </p>
            <p>
              Our architecture and interior design are deeply inspired by the harmonious balance of nature and contemporary elegance. The warm light cream and deep charcoal tones reflect our commitment to providing a tranquil environment for our guests.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="bg-brand-charcoal text-brand-cream py-24">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <SectionHeading 
            title="Our Philosophy" 
            subtitle="We believe that every stay should be an experience of genuine care and relaxation."
            className="text-brand-cream"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mt-16">
            <div>
              <span className="block text-4xl font-serif mb-4 text-brand-green">01</span>
              <h3 className="text-xl font-medium mb-3 uppercase tracking-wider">Peaceful Environment</h3>
              <p className="text-gray-400 font-light text-sm">Carefully designed spaces that promote relaxation and peace of mind.</p>
            </div>
            <div>
              <span className="block text-4xl font-serif mb-4 text-brand-green">02</span>
              <h3 className="text-xl font-medium mb-3 uppercase tracking-wider">Warm Hospitality</h3>
              <p className="text-gray-400 font-light text-sm">Personalized service that makes you feel valued and at home.</p>
            </div>
            <div>
              <span className="block text-4xl font-serif mb-4 text-brand-green">03</span>
              <h3 className="text-xl font-medium mb-3 uppercase tracking-wider">Modern Comfort</h3>
              <p className="text-gray-400 font-light text-sm">Premium amenities ensuring your stay is seamless and effortless.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
