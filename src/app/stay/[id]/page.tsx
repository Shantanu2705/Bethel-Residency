import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { Users, Maximize, Check } from "lucide-react";

export default async function RoomDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  // Convert ID to a readable title
  const title = id.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

  return (
    <main className="pt-32 pb-24 min-h-screen bg-brand-offwhite">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <Link href="/stay" className="text-sm font-medium uppercase tracking-wider text-brand-green hover:text-brand-charcoal transition-colors">
            &larr; Back to Stays
          </Link>
        </div>

        <SectionHeading 
          title={title}
          subtitle="Experience the perfect blend of comfort and luxury in this beautifully appointed space."
          align="left"
          className="mb-12"
        />

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-2/3">
            <div className="relative aspect-video w-full overflow-hidden shadow-xl rounded-sm mb-12">
              <Image 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop" 
                alt={title} 
                fill
                className="object-cover"
              />
            </div>
            
            <h3 className="text-3xl font-serif text-brand-charcoal mb-6">Room Overview</h3>
            <p className="text-gray-600 font-light leading-relaxed mb-8">
              Designed with your utmost comfort in mind, the {title} features premium amenities, soft natural lighting, and elegant decor. Whether you are here for a short visit or an extended stay, this space provides a tranquil retreat from the outside world.
            </p>
            
            <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Amenities</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600 font-light">
              {["Premium King Bed", "High-Speed Wi-Fi", "Air Conditioning", "En-suite Bathroom", "Room Service", "Daily Housekeeping", "Flat-screen TV", "Tea & Coffee Maker"].map(amenity => (
                <li key={amenity} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-brand-green" />
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white p-8 shadow-xl border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-serif text-brand-charcoal mb-6 border-b border-gray-100 pb-4">Reservation</h3>
              
              <div className="flex items-center gap-4 mb-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-green" />
                  <span>2-4 Guests</span>
                </div>
                <div className="w-px h-4 bg-gray-200"></div>
                <div className="flex items-center gap-2">
                  <Maximize className="w-4 h-4 text-brand-green" />
                  <span>300+ sq ft</span>
                </div>
              </div>

              <div className="mb-8">
                <span className="block text-sm uppercase tracking-widest text-gray-500 mb-1">Starting from</span>
                <span className="text-3xl font-serif text-brand-charcoal">₹--- <span className="text-sm font-sans text-gray-400 font-light">/ night</span></span>
              </div>

              <Link href="/booking" className="block w-full">
                <Button size="lg" className="w-full">Book This Stay</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
