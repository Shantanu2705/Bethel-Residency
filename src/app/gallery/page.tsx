"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function GalleryPage() {
  const images = [
    { src: "https://images.unsplash.com/photo-1542314831-c6a4d1409e1c?q=80&w=1200&auto=format&fit=crop", alt: "Residency Exterior" },
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop", alt: "Interior Design" },
    { src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop", alt: "Deluxe Stay" },
    { src: "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop", alt: "Dining" },
    { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop", alt: "Celebration" },
    { src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop", alt: "Wellness" },
    { src: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop", alt: "Family Suite" },
    { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop", alt: "Comfortable Room" },
  ];

  return (
    <main className="pt-32 pb-24 min-h-screen bg-brand-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Gallery" 
          subtitle="Take a visual journey through Bethal Residency."
        />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-16 space-y-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
              className="relative overflow-hidden break-inside-avoid rounded-sm shadow-md group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <Image 
                src={img.src} 
                alt={img.alt} 
                width={800}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
