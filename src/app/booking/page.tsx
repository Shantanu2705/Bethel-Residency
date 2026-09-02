"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Check, Shield } from "lucide-react";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  
  return (
    <main className="pt-32 pb-24 min-h-screen bg-brand-offwhite">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading 
          title="Complete Your Booking" 
          subtitle="Follow the simple steps to secure your peaceful stay with us."
        />

        {/* Stepper */}
        <div className="flex justify-between mb-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-300 -z-10 translate-y-1/2"></div>
          {["Dates", "Guests", "Room", "Details", "Payment"].map((label, idx) => {
            const stepNumber = idx + 1;
            const isActive = step === stepNumber;
            const isCompleted = step > stepNumber;
            return (
              <div key={label} className="flex flex-col items-center gap-2 bg-brand-offwhite px-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                  isActive ? "bg-brand-green text-white" : 
                  isCompleted ? "bg-brand-charcoal text-white" : "bg-gray-200 text-gray-500"
                }`}>
                  {isCompleted ? <Check className="w-4 h-4" /> : stepNumber}
                </div>
                <span className={`text-xs uppercase tracking-wider font-medium ${
                  isActive ? "text-brand-green" : isCompleted ? "text-brand-charcoal" : "text-gray-400"
                }`}>{label}</span>
              </div>
            );
          })}
        </div>

        {/* Step Content */}
        <div className="bg-white p-8 md:p-12 shadow-xl border border-gray-100 min-h-[400px]">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            {step === 1 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Select Dates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Check-in</label>
                    <input type="date" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Check-out</label>
                    <input type="date" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Guests & Rooms</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Adults</label>
                    <input type="number" min="1" defaultValue="2" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Children</label>
                    <input type="number" min="0" defaultValue="0" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Rooms</label>
                    <input type="number" min="1" defaultValue="1" className="w-full border border-gray-300 p-3 focus:outline-none focus:border-brand-green transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Select Accommodation</h3>
                <p className="text-gray-500 mb-6 font-light">Choose from our available rooms for your selected dates.</p>
                <div className="border border-brand-green p-6 flex flex-col md:flex-row gap-6 items-center bg-brand-green/5 cursor-pointer transition-colors hover:bg-brand-green/10">
                  <div className="w-full md:w-1/3 aspect-video bg-gray-200 relative">
                    <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=400&auto=format&fit=crop" alt="Deluxe Room" className="object-cover w-full h-full" />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h4 className="text-xl font-serif text-brand-charcoal mb-2">Deluxe Stay</h4>
                    <p className="text-sm text-gray-500 mb-4 font-light">Spacious and elegantly appointed, featuring premium bedding.</p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-brand-charcoal">₹--- / night</span>
                      <Button size="sm">Select</Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Guest Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Full Name</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Email</label>
                    <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Phone Number</label>
                    <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Special Requests</label>
                    <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" />
                  </div>
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-8 text-center py-8">
                <Shield className="w-16 h-16 text-brand-green mx-auto mb-4" />
                <div>
                  <h3 className="text-3xl font-serif text-brand-charcoal mb-2">Secure Payment</h3>
                  <p className="text-gray-500 font-light mb-8 max-w-md mx-auto">Payment integration is currently being set up. You will be able to securely pay via UPI, Cards, Net Banking, and more very soon.</p>
                </div>
                
                <div className="bg-brand-offwhite p-6 border border-gray-200 inline-block text-left mb-8 w-full max-w-sm">
                  <h4 className="font-serif text-lg mb-4 border-b border-gray-300 pb-2">Booking Summary</h4>
                  <div className="flex justify-between text-sm mb-2 text-gray-600">
                    <span>Deluxe Stay</span>
                    <span>1 Room</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4 text-gray-600">
                    <span>2 Nights</span>
                    <span>2 Guests</span>
                  </div>
                  <div className="flex justify-between font-medium text-brand-charcoal border-t border-gray-300 pt-2">
                    <span>Total</span>
                    <span>To be calculated</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-12 flex justify-between pt-6 border-t border-gray-100">
              {step > 1 ? (
                <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
              ) : <div></div>}
              
              {step < 5 ? (
                <Button onClick={() => setStep(step + 1)}>Continue to {["", "Guests", "Room", "Details", "Payment"][step]}</Button>
              ) : (
                <Button className="opacity-50 cursor-not-allowed">Complete Booking</Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
