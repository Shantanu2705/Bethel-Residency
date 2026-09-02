import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-24 min-h-screen bg-brand-cream">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <SectionHeading 
          title="Privacy Policy" 
          subtitle="Your privacy is important to us."
          align="left"
        />

        <div className="prose prose-lg text-gray-600 font-light mt-12 space-y-6">
          <p>
            At Bethal Residency, we are committed to protecting the privacy and security of our guests and website visitors. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or stay at our residency.
          </p>
          
          <h3 className="text-2xl font-serif text-brand-charcoal pt-4">Information We Collect</h3>
          <p>
            We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, place a booking, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our site. You may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information.
          </p>

          <h3 className="text-2xl font-serif text-brand-charcoal pt-4">How We Use Collected Information</h3>
          <p>
            Bethal Residency may collect and use personal information for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To improve customer service: Information you provide helps us respond to your customer service requests and support needs more efficiently.</li>
            <li>To personalize user experience: We may use information in the aggregate to understand how our users as a group use the services and resources provided on our site.</li>
            <li>To process payments: We may use the information users provide about themselves when placing an order only to provide service to that order. We do not share this information with outside parties except to the extent necessary to provide the service.</li>
            <li>To send periodic emails: We may use the email address to send user information and updates pertaining to their order. It may also be used to respond to their inquiries, questions, and/or other requests.</li>
          </ul>

          <h3 className="text-2xl font-serif text-brand-charcoal pt-4">Contacting Us</h3>
          <p>
            If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
            <br /><br />
            <strong>Bethal Residency</strong><br />
            Batlabari New Rangia Behind NBU,<br />
            P.S. Matigara, Dist. Darjeeling,<br />
            West Bengal, India<br />
            Email: bethelresidencyslg@gmail.com<br />
            Phone: +91 89678 15300
          </p>
        </div>
      </div>
    </main>
  );
}
