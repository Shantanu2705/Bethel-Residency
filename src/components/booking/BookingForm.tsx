'use client';

import { useState, useTransition, useEffect } from 'react';
import { createBooking } from '@/actions/booking';
import { Button } from '@/components/ui/Button';
import { useAuth } from '@/context/AuthContext';
import toast from 'react-hot-toast';

export function BookingForm() {
  const { user } = useAuth();
  const [isPending, startTransition] = useTransition();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      customerName: formData.get('customerName') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      checkIn: formData.get('checkIn') as string,
      checkOut: formData.get('checkOut') as string,
      roomType: formData.get('roomType') as string,
      guests: parseInt(formData.get('guests') as string, 10),
      userId: user?.uid || undefined,
      isPaid: formData.get('isPaid') === 'on',
    };

    startTransition(async () => {
      const result = await createBooking(data);
      if (result.success) {
        toast.success('Reservation Confirmed! We will contact you shortly.');
        // Optionally reset the form here
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error(result.error || 'Failed to submit booking');
      }
    });
  };

  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl shadow-black/5 border border-gray-100">
      <h3 className="text-2xl font-semibold mb-6">Book Your Stay</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="customerName" className="text-sm font-medium text-gray-700">Full Name</label>
            <input 
              required
              type="text" 
              id="customerName"
              name="customerName"
              placeholder="John Doe"
              defaultValue={user?.displayName || ''}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
            <input 
              required
              type="email" 
              id="email"
              name="email"
              placeholder="john@example.com"
              defaultValue={user?.email || ''}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
            <input 
              required
              type="tel" 
              id="phone"
              name="phone"
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="guests" className="text-sm font-medium text-gray-700">Number of Guests</label>
            <select 
              required
              id="guests"
              name="guests"
              defaultValue="2"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all bg-white"
            >
              {[1, 2, 3, 4, 5, 6].map(num => (
                <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="checkIn" className="text-sm font-medium text-gray-700">Check-in Date</label>
            <input 
              required
              type="date" 
              id="checkIn"
              name="checkIn"
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="checkOut" className="text-sm font-medium text-gray-700">Check-out Date</label>
            <input 
              required
              type="date" 
              id="checkOut"
              name="checkOut"
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
            />
          </div>
          
          <div className="space-y-2 md:col-span-2">
            <label className="text-sm font-medium text-gray-700 mb-2 block">Room Type</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { id: 'standard', name: 'Standard', desc: 'Non-AC' },
                { id: 'standard-ac', name: 'Standard AC', desc: 'AC Included' },
                { id: 'deluxe', name: 'Deluxe', desc: 'Premium AC' },
                { id: 'suite', name: 'Suite', desc: 'Luxury AC' },
              ].map((room) => (
                <label key={room.id} className="relative flex flex-col p-4 cursor-pointer border rounded-xl hover:bg-gray-50 focus-within:ring-2 focus-within:ring-black transition-all">
                  <input 
                    type="radio" 
                    name="roomType" 
                    value={room.id} 
                    className="absolute opacity-0 w-0 h-0"
                    required
                  />
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium text-gray-900">{room.name}</span>
                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center radio-indicator">
                      <div className="w-2 h-2 rounded-full bg-black scale-0 transition-transform"></div>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{room.desc}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 md:col-span-2 mt-4">
          <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
            <input 
              type="checkbox" 
              name="isPaid" 
              className="w-5 h-5 rounded border-gray-300 text-black focus:ring-black"
            />
            <div className="flex flex-col">
              <span className="font-medium text-gray-900">I have paid the amount (Simulation)</span>
              <span className="text-sm text-gray-500">Check this box to simulate a successful Razorpay payment.</span>
            </div>
          </label>
        </div>

        <Button 
          type="submit" 
          className="w-full py-4 text-lg mt-8 shadow-lg hover:shadow-xl transition-all"
          disabled={isPending}
        >
          {isPending ? 'Confirming Reservation...' : 'Complete Reservation'}
        </Button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Payment will be collected at the hotel upon arrival.
        </p>
      </form>
      
      <style dangerouslySetInnerHTML={{__html: `
        input[type="radio"]:checked ~ div .radio-indicator {
          border-color: black;
        }
        input[type="radio"]:checked ~ div .radio-indicator div {
          transform: scale(1);
        }
        input[type="radio"]:checked ~ span {
          color: black;
        }
        input[type="radio"]:checked {
          parent: ring-2 ring-black;
        }
        label:has(input[type="radio"]:checked) {
          border-color: black;
          background-color: #fafafa;
        }
      `}} />
    </div>
  );
}
