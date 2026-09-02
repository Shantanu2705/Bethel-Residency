import { Hero } from "@/components/home/Hero";
import { WelcomeSection } from "@/components/home/WelcomeSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoomCard } from "@/components/stay/RoomCard";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Coffee, Wifi, Car, ShieldCheck, Wind, Utensils } from "lucide-react";

export default function Home() {
  const rooms = [
    {
      id: "deluxe-room",
      name: "Deluxe Stay",
      description: "A spacious and elegantly appointed room designed for ultimate relaxation, featuring premium bedding and modern amenities.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop",
      capacity: "2 Guests",
      size: "320 sq ft",
      amenities: ["King Bed", "City View", "Free Wi-Fi"],
    },
    {
      id: "family-suite",
      name: "Family Suite",
      description: "Perfect for families or groups, offering multiple beds, a comfortable seating area, and plenty of space to unwind.",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop",
      capacity: "4 Guests",
      size: "450 sq ft",
      amenities: ["2 Queen Beds", "Lounge Area", "Free Wi-Fi"],
    },
    {
      id: "premium-room",
      name: "Comfortable Room",
      description: "A cozy, well-lit space perfect for solo travelers or couples seeking a quiet and comfortable stay.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      capacity: "2 Guests",
      size: "250 sq ft",
      amenities: ["Queen Bed", "Work Desk", "Free Wi-Fi"],
    },
  ];

  const amenities = [
    { icon: Coffee, title: "Premium Hospitality", desc: "Attentive service to ensure your comfort." },
    { icon: Wind, title: "Peaceful Environment", desc: "Quiet surroundings for true relaxation." },
    { icon: Utensils, title: "Dining Experience", desc: "Delicious meals prepared with care." },
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Stay connected throughout your stay." },
    { icon: Car, title: "Convenient Location", desc: "Easy access to local attractions." },
    { icon: ShieldCheck, title: "Safe & Secure", desc: "24/7 security for your peace of mind." },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <WelcomeSection />

      {/* Our Stays Section */}
      <section className="py-24 bg-brand-offwhite relative">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Find Your Perfect Stay" 
            subtitle="Explore our thoughtfully designed accommodations, tailored to provide you with the utmost comfort and peace."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {rooms.map((room) => (
              <RoomCard key={room.id} {...room} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/stay">
              <Button variant="outline" size="lg">View All Accommodations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Comfort (Amenities) */}
      <section className="py-24 bg-brand-charcoal text-brand-cream relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16 mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 leading-tight">
              Experience Comfort
            </h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
              Every detail at Bethal Residency is crafted to make your stay effortless and memorable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {amenities.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full bg-brand-green/20 flex items-center justify-center mb-6 group-hover:bg-brand-green/40 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-brand-green" />
                </div>
                <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Previews */}
      <section className="py-24 bg-brand-cream relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Dining Preview */}
            <div className="group relative h-[500px] overflow-hidden flex items-end p-12">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1200&auto=format&fit=crop"
                alt="Dining Experience"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="relative z-20 text-brand-cream">
                <span className="text-sm uppercase tracking-widest font-medium mb-3 block text-brand-green">Experience</span>
                <h3 className="font-serif text-4xl mb-4">Taste the Experience</h3>
                <p className="font-light max-w-sm mb-6 text-gray-200">Delight in a warm and comfortable dining environment featuring delicious meals and memorable moments.</p>
                <Link href="/dining" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-brand-green transition-colors">
                  Explore Dining &rarr;
                </Link>
              </div>
            </div>

            {/* Celebrate Preview */}
            <div className="group relative h-[500px] overflow-hidden flex items-end p-12">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <Image 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop"
                alt="Celebrations"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="relative z-20 text-brand-cream">
                <span className="text-sm uppercase tracking-widest font-medium mb-3 block text-brand-green">Events</span>
                <h3 className="font-serif text-4xl mb-4">Celebrate Life&apos;s Moments</h3>
                <p className="font-light max-w-sm mb-6 text-gray-200">The perfect setting for birthday celebrations, family gatherings, and special occasions.</p>
                <Link href="/celebrate" className="inline-flex items-center gap-2 text-sm uppercase tracking-wider font-medium hover:text-brand-green transition-colors">
                  Plan Your Celebration &rarr;
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
