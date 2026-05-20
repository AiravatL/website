"use client";

import { motion } from "framer-motion";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { ContactCard } from "./ui/contact-card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export default function CallToAction() {
  return (
    <section className="py-32 bg-gradient-to-br from-violet-50 via-white to-violet-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <ContactCard
            title="Get Enterprise Quote"
            description="Tell us your logistics needs. We'll take care of the rest. Fill out the form and our team will respond within 1 business day."
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
        </motion.div>
      </div>
    </section>
  );
}
