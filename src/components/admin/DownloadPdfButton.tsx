'use client';

import { useState } from 'react';
import jsPDF from 'jspdf';
import { Button } from '@/components/ui/Button';

export function DownloadPdfButton({ booking }: { booking: any }) {
  const [generating, setGenerating] = useState(false);

  const generatePDF = () => {
    setGenerating(true);
    try {
      const doc = new jsPDF();
      
      // Add Logo or Header
      doc.setFontSize(22);
      doc.setTextColor(33, 33, 33);
      doc.text("Bethel Residency", 105, 20, { align: "center" });
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text("Booking Confirmation / Receipt", 105, 30, { align: "center" });
      
      doc.setLineWidth(0.5);
      doc.line(20, 35, 190, 35);
      
      // Booking Info
      doc.setFontSize(11);
      doc.setTextColor(0, 0, 0);
      
      doc.text(`Booking ID: ${booking.id}`, 20, 45);
      doc.text(`Date of Booking: ${new Date(booking.createdAt).toLocaleDateString()}`, 20, 52);
      
      doc.setFont("helvetica", "bold");
      doc.text("Guest Details", 20, 65);
      doc.setFont("helvetica", "normal");
      doc.text(`Name: ${booking.customerName}`, 20, 72);
      doc.text(`Email: ${booking.email}`, 20, 79);
      doc.text(`Phone: ${booking.phone}`, 20, 86);
      
      doc.setFont("helvetica", "bold");
      doc.text("Stay Details", 120, 65);
      doc.setFont("helvetica", "normal");
      const formattedRoom = booking.roomType.replace('-', ' ').replace(/\b\w/g, (c: string) => c.toUpperCase());
      doc.text(`Room Type: ${formattedRoom}`, 120, 72);
      doc.text(`Check-in: ${booking.checkIn}`, 120, 79);
      doc.text(`Check-out: ${booking.checkOut}`, 120, 86);
      doc.text(`Guests: ${booking.guests}`, 120, 93);
      
      doc.setLineWidth(0.2);
      doc.line(20, 100, 190, 100);
      
      // Payment/Status Info
      doc.setFont("helvetica", "bold");
      doc.text("Payment Status", 20, 110);
      doc.setFont("helvetica", "normal");
      doc.text(`Status: ${booking.status.toUpperCase()}`, 20, 117);
      doc.text("Note: Payment to be collected upon arrival.", 20, 124);
      
      // Footer
      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150);
      doc.text("Thank you for choosing Bethel Residency!", 105, 280, { align: "center" });

      doc.save(`Bethel-Booking-${booking.id}.pdf`);
    } catch (err) {
      console.error("Error generating PDF", err);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setGenerating(false);
    }
  };

  return (
    <Button 
      onClick={generatePDF} 
      disabled={generating}
      variant="outline"
      size="sm"
    >
      {generating ? 'Generating...' : 'Download PDF'}
    </Button>
  );
}
