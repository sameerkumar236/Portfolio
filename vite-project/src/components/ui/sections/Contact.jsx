import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Reveal from "@/components/ui/common/Reveal";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2bq807n",      // ✅ EmailJS Service ID
        "template_3ha9ljf",     // ✅ EmailJS Template ID
        formRef.current,
        "c-8hwLr3PjK9EbwRX"     // ✅ EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <Reveal>
      <section id="contact" className="mt-24 max-w-4xl">
        {/* SECTION LABEL */}
        <span className="inline-flex items-center gap-1 text-xs border border-zinc-700 px-2 py-1 rounded">
          <Sparkles className="w-3 h-3" />
          Contact
        </span>

        {/* HEADING */}
        <h2 className="text-4xl font-semibold mt-4">
          Let's Make Something Awesome Together!
        </h2>

        <form ref={formRef} onSubmit={sendEmail} className="mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Your name"
              required
            />

            <Input
              name="email"
              type="email"
              placeholder="Your email"
              required
            />
          </div>

          <Textarea
            name="message"
            className="mt-4"
            placeholder="Write your message..."
            required
          />

          <Button type="submit" className="mt-4 mb-8">
            Send Message
          </Button>
        </form>
      </section>
    </Reveal>
  );
}