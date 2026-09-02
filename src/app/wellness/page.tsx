"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function WellnessPage() {
  return (
    <main className="pt-32 pb-24 bg-brand-cream min-h-screen">
      <div className="container mx-auto px-6 md:px-12 text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-6"
        >
          Slow Down. Breathe. Recharge.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand-green max-w-2xl mx-auto text-lg md:text-xl font-light italic"
        >
          Find your peace in our tranquil spaces.
        </motion.p>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif text-brand-charcoal mb-4">Mindful Spaces</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Our property is designed to help you disconnect from the noise of everyday life. With muted natural green accents and soft natural lighting, every corner invites a moment of stillness.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif text-brand-charcoal mb-4">Nature\'s Proximity</h2>
              <p className="text-gray-600 font-light leading-relaxed">
                Step outside and breathe in the fresh air. Surrounded by gentle nature and the calm atmosphere of Matigara, nature itself becomes your wellness retreat.
              </p>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] md:aspect-square w-full rounded-full overflow-hidden shadow-2xl border-8 border-white/50">
               <Image 
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
                alt="Wellness and Relaxation"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative Floating Elements */}
            <div className="absolute top-1/3 right-10 w-24 h-24 bg-brand-green/20 rounded-full blur-2xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
