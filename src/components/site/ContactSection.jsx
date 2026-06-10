"use client";

import { useState } from "react";
import { site } from "../../lib/site";
import SectionHeader from "./SectionHeader";
import { MailIcon, PhoneIcon, PinIcon } from "../ui/icons";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  return (
    <section className="px-5 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Contact"
            title="Tell us the feeling. We’ll shape the bouquet."
            text="Send a quick note with your event, color preference, budget, or delivery date. We will reply with bouquet ideas, availability, and delivery options."
          />
          <div data-reveal className="mt-8 grid gap-4">
            <Info icon={<PinIcon className="h-5 w-5" />} label="Studio" value={site.address} />
            <Info icon={<PhoneIcon className="h-5 w-5" />} label="Phone" value={site.phone} />
            <Info icon={<MailIcon className="h-5 w-5" />} label="Email" value={site.email} />
          </div>
        </div>

        <form
          data-reveal
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
          className="rounded-[2.5rem] border border-rose-dark/10 bg-white/65 p-5 shadow-soft backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="you@example.com" type="email" />
            <Field label="Phone" placeholder="+20 ..." />
            <Field label="Occasion" placeholder="Birthday, wedding, gift..." />
          </div>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm font-bold text-ink/70">Message</span>
            <textarea className="min-h-36 w-full resize-none rounded-[1.4rem] border border-rose-dark/10 bg-cream/70 px-5 py-4 text-ink outline-none transition placeholder:text-ink/32 focus:border-rose/60 focus:bg-white" placeholder="Tell us colors, budget, delivery date, or anything important..." />
          </label>
          <button className="cursor-pointer mt-5 w-full rounded-[1.4rem] bg-rose px-6 py-4 font-extrabold text-cream shadow-lg shadow-rose/20 transition hover:-translate-y-0.5 hover:bg-rose-dark" type="submit">
            Send floral request
          </button>
          {sent && <p className="mt-4 rounded-2xl bg-moss/10 px-4 py-3 text-center text-sm font-bold text-leaf">Request received.</p>}
        </form>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-ink/70">{label}</span>
      <input type={type} className="h-14 w-full rounded-[1.2rem] border border-rose-dark/10 bg-cream/70 px-5 text-ink outline-none transition placeholder:text-ink/32 focus:border-rose/60 focus:bg-white" placeholder={placeholder} />
    </label>
  );
}

function Info({ icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-[1.6rem] border border-rose-dark/10 bg-white/55 p-4 shadow-card backdrop-blur-xl">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rose text-cream">{icon}</span>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-rose">{label}</p>
        <p className="mt-1 font-semibold text-ink/70">{value}</p>
      </div>
    </div>
  );
}
