'use client';

import { useEffect, useState, useTransition } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { getAllBookings } from '@/actions/booking';
import { updateBookingStatus, deleteBooking } from '@/actions/admin';
import { DownloadPdfButton } from '@/components/admin/DownloadPdfButton';
import { Button } from '@/components/ui/Button';

export default function AdminDashboardPage() {
  const { user, isAdmin, loading, logout } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState<any[]>([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'upcoming' | 'ongoing' | 'past'>('all');
  const [isPending, startTransition] = useTransition();

  const fetchBookings = () => {
    setLoadingBookings(true);
    getAllBookings().then((data) => {
      setBookings(data);
      setLoadingBookings(false);
    });
  };

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/login');
    }
  }, [user, isAdmin, loading, router]);

  useEffect(() => {
    if (isAdmin) {
      fetchBookings();
    }
  }, [isAdmin]);

  if (loading || !isAdmin) {
    return <div className="min-h-screen flex items-center justify-center pt-32 pb-24 bg-brand-offwhite">Verifying Access...</div>;
  }

  const todayStr = new Date().toISOString().split('T')[0];

  const getFilteredBookings = () => {
    let filtered = bookings;

    if (activeTab === 'upcoming') {
      filtered = filtered.filter(b => b.checkIn > todayStr);
    } else if (activeTab === 'ongoing') {
      filtered = filtered.filter(b => b.checkIn <= todayStr && b.checkOut >= todayStr);
    } else if (activeTab === 'past') {
      filtered = filtered.filter(b => b.checkOut < todayStr);
    }

    if (searchTerm) {
      filtered = filtered.filter(b => 
        b.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || 
        b.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.id.includes(searchTerm)
      );
    }

    return filtered;
  };

  const filteredBookings = getFilteredBookings();

  const handleLogout = async () => {
    await logout();
    router.push('/');
  };

  const handleUpdateStatus = (id: string, newStatus: 'pending' | 'confirmed' | 'cancelled') => {
    startTransition(async () => {
      const res = await updateBookingStatus(id, newStatus);
      if (res.success) {
        fetchBookings();
      } else {
        alert(res.error);
      }
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to permanently delete this booking?')) {
      startTransition(async () => {
        const res = await deleteBooking(id);
        if (res.success) {
          fetchBookings();
        } else {
          alert(res.error);
        }
      });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-4xl font-playfair font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage all hotel reservations</p>
          </div>
          <Button onClick={handleLogout} variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700">
            Sign Out
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-gray-500 text-sm font-medium">Total Bookings</div>
            <div className="text-3xl font-bold mt-2">{bookings.length}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-gray-500 text-sm font-medium">Ongoing Stays</div>
            <div className="text-3xl font-bold mt-2 text-blue-600">
              {bookings.filter(b => b.checkIn <= todayStr && b.checkOut >= todayStr).length}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-gray-500 text-sm font-medium">Upcoming Arrivals</div>
            <div className="text-3xl font-bold mt-2 text-green-600">
              {bookings.filter(b => b.checkIn > todayStr).length}
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="text-gray-500 text-sm font-medium">Pending Payments</div>
            <div className="text-3xl font-bold mt-2 text-yellow-600">
              {bookings.filter(b => b.status === 'pending').length}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
            
            {/* Tabs */}
            <div className="flex space-x-2 overflow-x-auto w-full lg:w-auto">
              {[
                { id: 'all', label: 'All Bookings' },
                { id: 'upcoming', label: 'Upcoming' },
                { id: 'ongoing', label: 'Ongoing' },
                { id: 'past', label: 'Past' },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab.id ? 'bg-black text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <input 
              type="text" 
              placeholder="Search by name or email..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-black w-full lg:w-80"
            />
          </div>

          <div className="overflow-x-auto">
            {loadingBookings ? (
              <div className="text-center py-12 text-gray-500">Loading bookings...</div>
            ) : (
              <table className="w-full text-left border-collapse min-w-max">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm border-b border-gray-100">
                    <th className="py-4 px-6 font-medium">Guest Details</th>
                    <th className="py-4 px-6 font-medium">Dates</th>
                    <th className="py-4 px-6 font-medium">Room & Status</th>
                    <th className="py-4 px-6 font-medium text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="py-12 text-center text-gray-500">No bookings found in this category.</td>
                    </tr>
                  ) : (
                    filteredBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-semibold text-gray-900">{booking.customerName}</div>
                          <div className="text-sm text-gray-500">{booking.email}</div>
                          <div className="text-sm text-gray-500">{booking.phone}</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="text-sm"><span className="text-gray-500">In:</span> {booking.checkIn}</div>
                          <div className="text-sm"><span className="text-gray-500">Out:</span> {booking.checkOut}</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="capitalize font-medium text-gray-900">{booking.roomType.replace('-', ' ')}</div>
                          <select 
                            disabled={isPending}
                            value={booking.status}
                            onChange={(e) => handleUpdateStatus(booking.id, e.target.value as any)}
                            className={`mt-2 text-xs font-semibold py-1 px-2 rounded outline-none border cursor-pointer ${
                              booking.status === 'confirmed' ? 'bg-green-50 text-green-700 border-green-200' : 
                              booking.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                              'bg-red-50 text-red-700 border-red-200'
                            }`}
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                        <td className="py-4 px-6 text-right space-x-2">
                          <DownloadPdfButton booking={booking} />
                          <button 
                            disabled={isPending}
                            onClick={() => handleDelete(booking.id)}
                            className="px-3 py-1.5 text-sm border border-red-200 text-red-600 rounded-lg hover:bg-red-50 disabled:opacity-50"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
