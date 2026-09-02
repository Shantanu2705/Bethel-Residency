"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, Maximize, ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";

interface RoomCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  capacity: string;
  size: string;
  amenities: string[];
}

export function RoomCard({ id, name, description, image, capacity, size, amenities }: RoomCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group bg-white flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
    >
      <div className="relative h-64 md:h-72 w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <Image 
          src={image} 
          alt={name} 
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl mb-3 text-brand-charcoal">{name}</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <div className="flex items-center gap-6 mb-6 text-sm text-gray-500 border-t border-b border-gray-100 py-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-brand-green" />
            <span>{capacity}</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-4 h-4 text-brand-green" />
            <span>{size}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-auto pt-2">
          <Link href={`/stay/${id}`} className="text-brand-green text-sm font-medium uppercase tracking-wider flex items-center gap-2 hover:text-brand-charcoal transition-colors">
            Explore <ArrowRight className="w-4 h-4" />
          </Link>
          <Button variant="outline" size="sm" onClick={() => window.location.href = '/booking'}>
            Book Now
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
