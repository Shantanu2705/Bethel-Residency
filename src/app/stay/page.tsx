import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomCard } from "@/components/stay/RoomCard";

export default function StayPage() {
  const allRooms = [
    {
      id: "deluxe-room",
      name: "Deluxe Stay",
      description: "A spacious and elegantly appointed room designed for ultimate relaxation, featuring premium bedding and modern amenities.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      capacity: "2 Guests",
      size: "320 sq ft",
      amenities: ["King Bed", "City View", "Free Wi-Fi", "Mini Bar", "En-suite Bathroom"],
    },
    {
      id: "family-suite",
      name: "Family Suite",
      description: "Perfect for families or groups, offering multiple beds, a comfortable seating area, and plenty of space to unwind.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
      capacity: "4 Guests",
      size: "450 sq ft",
      amenities: ["2 Queen Beds", "Lounge Area", "Free Wi-Fi", "Dining Area", "Bathtub"],
    },
    {
      id: "premium-room",
      name: "Comfortable Room",
      description: "A cozy, well-lit space perfect for solo travelers or couples seeking a quiet and comfortable stay.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      capacity: "2 Guests",
      size: "250 sq ft",
      amenities: ["Queen Bed", "Work Desk", "Free Wi-Fi", "Rain Shower"],
    },
    {
      id: "executive-suite",
      name: "Executive Suite",
      description: "Experience the pinnacle of luxury with our Executive Suite, featuring a separate living area and panoramic views.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1200&auto=format&fit=crop",
      capacity: "2 Guests",
      size: "500 sq ft",
      amenities: ["King Bed", "Living Room", "Premium Wi-Fi", "Balcony", "Jacuzzi"],
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Rooms & Suites" 
          subtitle="Discover our thoughtfully designed spaces, crafted to provide you with the perfect blend of comfort and elegance."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {allRooms.map((room) => (
            <RoomCard key={room.id} {...room} />
          ))}
        </div>
      </div>
    </main>
  );
}
