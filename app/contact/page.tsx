import type { Metadata } from "next";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const metadata: Metadata = {
  title: "Contact — AiravatL",
  description: "Get in touch with the AiravatL team for logistics quotes, partnership enquiries, and support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full bg-gradient-to-br from-violet-50 via-white to-violet-100 px-4 pt-32 pb-24">
      <div className="mx-auto max-w-5xl">
        <ContactCard
          title="Get in Touch with AiravatL"
          description="Have questions about our logistics services? Need a quote for your shipment? Fill out the form and our team will respond within 1 business day."
          contactInfo={[
            { icon: MailIcon, label: "Email", value: "hello@airavatl.com" },
            { icon: PhoneIcon, label: "Phone", value: "+91 70992 20645" },
            { icon: MapPinIcon, label: "Address", value: "North-East India", className: "col-span-2" },
          ]}
        >
          <form className="w-full space-y-4">
            <div className="flex flex-col gap-2">
              <Label>Name</Label>
              <Input type="text" placeholder="Your name" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input type="email" placeholder="your.email@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Phone</Label>
              <Input type="tel" placeholder="+91 XXX XXX XXXX" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Message</Label>
              <Textarea placeholder="Tell us about your logistics needs..." />
            </div>
            <Button className="w-full" type="button" style={{ backgroundColor: "#4c1d95" }}>
              Send Message
            </Button>
          </form>
        </ContactCard>
      </div>
    </main>
  );
}
