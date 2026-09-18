'use server'

import { adminDb } from '@/lib/firebase/admin';
import { FieldValue } from 'firebase-admin/firestore';

export type BookingFormData = {
  customerName: string;
  email: string;
  phone: string;
  checkIn: string; // ISO date string
  checkOut: string; // ISO date string
  roomType: string;
  guests: number;
  userId?: string; // Optional for guest checkouts
  isPaid?: boolean; // Payment simulation
};

export async function createBooking(data: BookingFormData) {
  try {
    // Basic validation
    if (!data.customerName || !data.email || !data.phone || !data.checkIn || !data.checkOut || !data.roomType || !data.guests) {
      return { success: false, error: 'All fields are required' };
    }

    const checkInDate = new Date(data.checkIn);
    const checkOutDate = new Date(data.checkOut);

    if (checkOutDate <= checkInDate) {
      return { success: false, error: 'Check-out date must be after check-in date' };
    }

    const bookingData = {
      ...data,
      status: data.isPaid ? 'confirmed' : 'pending',
      createdAt: FieldValue.serverTimestamp(),
    };

    const docRef = await adminDb.collection('bookings').add(bookingData);

    return { success: true, bookingId: docRef.id };
  } catch (error) {
    console.error('Error creating booking:', error);
    return { success: false, error: 'Failed to create booking. Please try again later.' };
  }
}

export async function getUserBookings(userId: string) {
  try {
    const snapshot = await adminDb.collection('bookings')
      .where('userId', '==', userId)
      .orderBy('createdAt', 'desc')
      .get();
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate().toISOString() || new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error fetching user bookings:', error);
    return [];
  }
}

export async function getAllBookings() {
  try {
    const snapshot = await adminDb.collection('bookings')
      .orderBy('createdAt', 'desc')
      .get();
      
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate().toISOString() || new Date().toISOString()
    }));
  } catch (error) {
    console.error('Error fetching all bookings:', error);
    return [];
  }
}
