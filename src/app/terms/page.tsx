import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TermsPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-brand-cream">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading 
          title="Terms & Conditions" 
          subtitle="Please read these terms and conditions carefully before using our services."
          align="left"
        />

        <div className="prose prose-lg text-gray-600 font-light mt-12 space-y-6">
          <p>
            These terms and conditions outline the rules and regulations for the use of Bethal Residency&apos;s Website and services, located in Matigara, Darjeeling, West Bengal.
          </p>
          
          <h3 className="text-2xl font-serif text-brand-charcoal pt-4">Reservations and Payments</h3>
          <p>
            All reservations are subject to availability. A valid credit card or advance payment may be required to secure your reservation. Full payment is generally required upon check-in unless otherwise specified in your booking agreement.
          </p>

          <h3 className="text-2xl font-serif text-brand-charcoal pt-4">Cancellation Policy</h3>
          <p>
            Cancellations must be made within the time frame specified in your booking confirmation to avoid penalty charges. Late cancellations or no-shows will be charged the equivalent of the first night&apos;s stay or the full booking amount, depending on the specific rate booked.
          </p>
          
          <h3 className="text-2xl font-serif text-brand-charcoal pt-4">Check-in and Check-out</h3>
          <p>
            Standard check-in time is 2:00 PM and check-out time is 11:00 AM. Early check-in or late check-out is subject to availability and may incur additional charges. Guests must present valid identification upon check-in.
          </p>

          <h3 className="text-2xl font-serif text-brand-charcoal pt-4">Guest Conduct</h3>
          <p>
            Guests are expected to conduct themselves in a respectable manner and not to cause any nuisance or annoyance within the premises. Bethal Residency reserves the right to ask any guest to leave the premises if their behavior is deemed unacceptable, without a refund.
          </p>

          <h3 className="text-2xl font-serif text-brand-charcoal pt-4">Liability</h3>
          <p>
            Bethal Residency is not responsible for any loss or damage to guest property during their stay. Guests are advised to use the in-room safes (if available) or secure their valuables appropriately.
          </p>
        </div>
      </div>
    </main>
  );
}
