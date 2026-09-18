'use server'

import { adminDb } from '@/lib/firebase/admin';

export async function updateBookingStatus(id: string, status: 'pending' | 'confirmed' | 'cancelled') {
  try {
    await adminDb.collection('bookings').doc(id).update({
      status
    });
    return { success: true };
  } catch (error) {
    console.error('Error updating booking status:', error);
    return { success: false, error: 'Failed to update booking status' };
  }
}

export async function deleteBooking(id: string) {
  try {
    await adminDb.collection('bookings').doc(id).delete();
    return { success: true };
  } catch (error) {
    console.error('Error deleting booking:', error);
    return { success: false, error: 'Failed to delete booking' };
  }
}
