import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-brand-cream">
      <div className="container mx-auto px-6 md:px-12">
        <SectionHeading 
          title="Get in Touch" 
          subtitle="We're here to help you plan your perfect stay. Reach out to us with any questions or special requests."
        />

        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          {/* Contact Info & Map */}
          <div className="w-full lg:w-1/2 space-y-12">
            <div>
              <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Contact Information</h3>
              <ul className="space-y-6 text-gray-600 font-light">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <div>
                    <strong className="block font-medium text-brand-charcoal mb-1">Address</strong>
                    Batlabari New Rangia Behind NBU,<br />
                    P.S. Matigara, Dist. Darjeeling,<br />
                    West Bengal, India
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <div>
                    <strong className="block font-medium text-brand-charcoal mb-1">Phone</strong>
                    <a href="tel:+918967815300" className="hover:text-brand-green transition-colors">+91 89678 15300</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-brand-green shrink-0 mt-1" />
                  <div>
                    <strong className="block font-medium text-brand-charcoal mb-1">Email</strong>
                    <a href="mailto:bethelresidencyslg@gmail.com" className="hover:text-brand-green transition-colors">bethelresidencyslg@gmail.com</a>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Map Placeholder */}
            <div>
              <h3 className="text-2xl font-serif text-brand-charcoal mb-6">Location</h3>
              <div className="w-full h-64 bg-gray-200 border border-brand-grey flex flex-col items-center justify-center text-gray-500 font-light">
                <MapPin className="w-8 h-8 text-gray-400 mb-2" />
                <span>Map Integration Placeholder</span>
                <span className="text-sm mt-1">Ready for Google Maps API</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 bg-white p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-3xl font-serif text-brand-charcoal mb-2">Send a Message</h3>
            <p className="text-gray-500 mb-8 font-light">Fill out the form below and we will get back to you shortly.</p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Phone</label>
                  <input type="tel" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors" required />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2 font-medium">Message</label>
                <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-brand-green bg-transparent transition-colors resize-none" placeholder="How can we assist you?"></textarea>
              </div>

              <Button type="button" size="lg" className="w-full mt-4">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
