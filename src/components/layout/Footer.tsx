import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-brand-offwhite pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Branding */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo.jpeg" alt="Bethal Residency Logo" width={80} height={80} className="object-contain rounded-sm" />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Experience comfort, warmth, and peaceful hospitality at Bethal Residency. More than a stay, a place to feel at home.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-cream">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About", "Stay", "Dining", "Celebrate"].map((link) => (
                <li key={link}>
                  <Link href={`/${link === "Home" ? "" : link.toLowerCase()}`} className="text-sm text-gray-400 hover:text-brand-green transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-cream">Explore</h4>
            <ul className="space-y-4">
              {["Wellness", "Travel Guide", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase().replace(" ", "-")}`} className="text-sm text-gray-400 hover:text-brand-green transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-brand-cream">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                <span>
                  Batlabari New Rangia Behind NBU,<br />
                  P.S. Matigara, Dist. Darjeeling,<br />
                  West Bengal, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-green shrink-0" />
                <a href="tel:+918967815300" className="hover:text-brand-cream transition-colors">+91 89678 15300</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-green shrink-0" />
                <a href="mailto:bethelresidencyslg@gmail.com" className="hover:text-brand-cream transition-colors">bethelresidencyslg@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center text-center md:text-left">
            <span>Trade Reg. No: 4001</span>
            <span className="hidden md:inline">•</span>
            <span>MSME: WB-06-0049239</span>
            <span className="hidden md:inline">•</span>
            <span>GST: 19ARXPB12351ZU</span>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 items-center text-center">
            <span>&copy; 2026 Bethal Residency. All Rights Reserved.</span>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-brand-cream transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-brand-cream transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
