import { SectionHeading } from "@/components/ui/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

export default function TravelGuidePage() {
  const destinations = [
    {
      id: "darjeeling",
      name: "Darjeeling",
      distance: "Placeholder Distance",
      description: "The Queen of the Hills, famous for its tea estates and the panoramic view of the Kanchenjunga.",
      image: "https://images.unsplash.com/photo-1544391694-08fb7604f326?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "siliguri",
      name: "Siliguri City",
      distance: "Placeholder Distance",
      description: "A bustling city serving as the gateway to Northeast India, known for its vibrant markets and culture.",
      image: "https://images.unsplash.com/photo-1629851726057-08c3ec0b07b8?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "mirik",
      name: "Mirik",
      distance: "Placeholder Distance",
      description: "A serene tourist spot nestled in the serene hills, featuring the beautiful Sumendu Lake.",
      image: "https://images.unsplash.com/photo-1627966961448-6a56e0d3cbac?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: "kalimpong",
      name: "Kalimpong",
      distance: "Placeholder Distance",
      description: "A hill station in the lesser Himalayas known for its educational institutions and monasteries.",
      image: "https://images.unsplash.com/photo-1605649487212-4dcb18a2fd7d?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main className="pt-32 pb-24 bg-brand-offwhite min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Travel Guide" 
          subtitle="Explore the beauty of West Bengal. Bethal Residency is your perfect base camp for discovering the region's treasures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {destinations.map((dest) => (
            <div key={dest.id} className="group bg-white flex flex-col h-full border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                  src={dest.image} 
                  alt={dest.name} 
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif text-xl mb-1 text-brand-charcoal">{dest.name}</h3>
                <div className="flex items-center gap-1 text-xs text-brand-green mb-4 font-medium uppercase tracking-wider">
                  <MapPin className="w-3 h-3" /> {dest.distance}
                </div>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow">
                  {dest.description}
                </p>
                <Link href="#" className="text-brand-charcoal text-xs font-medium uppercase tracking-wider flex items-center gap-2 hover:text-brand-green transition-colors mt-auto pt-4 border-t border-gray-100">
                  Read More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
