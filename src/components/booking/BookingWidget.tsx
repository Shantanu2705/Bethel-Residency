"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Home } from "lucide-react";
import { Button } from "../ui/Button";

export function BookingWidget() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");
  const [rooms, setRooms] = useState("1");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // This will connect to future booking engine API
    window.location.href = `/booking?checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}&rooms=${rooms}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-brand-offwhite p-4 md:p-6 shadow-xl max-w-5xl mx-auto border border-brand-grey w-full"
    >
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row items-center gap-4">
        
        {/* Check In */}
        <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-brand-grey pb-4 md:pb-0 md:pr-4">
          <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-medium">Check-in</label>
          <div className="flex items-center gap-3 text-brand-charcoal">
            <Calendar className="w-5 h-5 text-brand-green" />
            <input 
              type="date" 
              className="bg-transparent border-none outline-none w-full cursor-pointer text-sm font-medium"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Check Out */}
        <div className="flex-1 w-full border-b md:border-b-0 md:border-r border-brand-grey pb-4 md:pb-0 md:pr-4 md:pl-4">
          <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-medium">Check-out</label>
          <div className="flex items-center gap-3 text-brand-charcoal">
            <Calendar className="w-5 h-5 text-brand-green" />
            <input 
              type="date" 
              className="bg-transparent border-none outline-none w-full cursor-pointer text-sm font-medium"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Guests & Rooms */}
        <div className="flex-1 w-full flex gap-4 md:pr-4 md:pl-4 mb-4 md:mb-0">
          <div className="flex-1">
            <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-medium">Guests</label>
            <div className="flex items-center gap-3 text-brand-charcoal">
              <Users className="w-5 h-5 text-brand-green" />
              <select 
                className="bg-transparent border-none outline-none w-full cursor-pointer text-sm font-medium appearance-none"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              >
                {[1,2,3,4,5,6].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-px h-10 bg-brand-grey my-auto hidden md:block"></div>
          <div className="flex-1 pl-4 md:pl-0">
            <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block font-medium">Rooms</label>
            <div className="flex items-center gap-3 text-brand-charcoal">
              <Home className="w-5 h-5 text-brand-green" />
              <select 
                className="bg-transparent border-none outline-none w-full cursor-pointer text-sm font-medium appearance-none"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              >
                {[1,2,3,4].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'Room' : 'Rooms'}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="w-full md:w-auto md:pl-4">
          <Button type="submit" className="w-full md:w-auto h-14 md:h-16 px-8 text-sm md:text-base">
            Check Availability
          </Button>
        </div>
        
      </form>
    </motion.div>
  );
}
