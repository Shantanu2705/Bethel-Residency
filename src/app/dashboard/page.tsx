'use client';

import { useEffect, useState, useTransition } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { getUserBookings } from '@/actions/booking';
import { Button } from '@/components/ui/Button';
import { DownloadPdfButton } from '@/components/admin/DownloadPdfButton';
import { updateProfile } from 'firebase/auth';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const { user, loading, logout } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [activeTab, setActiveTab] = useState<'bookings' | 'profile'>('bookings');
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      getUserBookings(user.uid).then((data) => {
        setBookings(data);
        setLoadingBookings(false);
      });
    }
  }, [user]);

  if (loading || !user) {
    return null; // NextTopLoader and global loading handle the visual
  }

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const handleProfileUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newName = formData.get('displayName') as string;

    startTransition(async () => {
      try {
        await updateProfile(user, { displayName: newName });
        toast.success('Profile updated successfully!');
        // Force re-render to show new name by quickly toggling state or just relying on context
      } catch (error: any) {
        toast.error(error.message || 'Failed to update profile');
      }
    });
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-brand-offwhite">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-playfair font-bold text-gray-900">Welcome, {user.displayName || 'Guest'}</h1>
            <p className="text-gray-600 mt-2">{user.email}</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
            Sign Out
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`px-8 py-4 font-medium text-sm transition-colors ${
                activeTab === 'bookings' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              My Bookings
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-8 py-4 font-medium text-sm transition-colors ${
                activeTab === 'profile' ? 'border-b-2 border-black text-black' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              Profile Settings
            </button>
          </div>

          <div className="p-8">
            {activeTab === 'bookings' ? (
              <>
                <h2 className="text-2xl font-semibold mb-6">Your Bookings</h2>
                {loadingBookings ? (
                  <div className="text-center py-12 text-gray-500">Loading your bookings...</div>
                ) : bookings.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-500 mb-4">You have no bookings yet.</p>
                    <Button onClick={() => router.push('/stay')}>Book a Stay</Button>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {bookings.map((booking) => (
                      <div key={booking.id} className="border border-gray-100 rounded-xl p-6 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-md transition-shadow bg-gray-50/50">
                        <div className="flex-grow space-y-2 w-full">
                          <div className="flex items-center justify-between w-full">
                            <h3 className="font-semibold text-lg capitalize">{booking.roomType.replace('-', ' ')} Room</h3>
                            <span className={`px-3 py-1 text-xs font-medium rounded-full capitalize ${booking.status === 'confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="text-sm text-gray-600 grid grid-cols-2 gap-4 mt-2">
                            <div><span className="font-medium text-gray-900">Check-in:</span> {booking.checkIn}</div>
                            <div><span className="font-medium text-gray-900">Check-out:</span> {booking.checkOut}</div>
                            <div><span className="font-medium text-gray-900">Guests:</span> {booking.guests}</div>
                            <div><span className="font-medium text-gray-900">Booked on:</span> {new Date(booking.createdAt).toLocaleDateString()}</div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          {booking.status === 'confirmed' ? (
                            <DownloadPdfButton booking={booking} />
                          ) : (
                            <span className="text-sm text-gray-400 italic">Invoice available after payment</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="max-w-md">
                <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
                <form onSubmit={handleProfileUpdate} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Display Name</label>
                    <input 
                      type="text" 
                      name="displayName"
                      defaultValue={user.displayName || ''}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-black outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email Address (Read-only)</label>
                    <input 
                      type="email" 
                      disabled
                      value={user.email || ''}
                      className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
                    />
                  </div>
                  <Button type="submit" disabled={isPending} className="w-full mt-4">
                    {isPending ? 'Updating...' : 'Save Changes'}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
