import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Team | Sutertai",
  description: "Meet the team behind Sutertai Private Limited.",
};

const team = [
  {
    name: "Ramesh Sharma",
    role: "Founder & CEO",
    bio: "Leads product and company direction at Sutertai, based in Prayagraj, India.",
  },
];

export default function TeamPage() {
  return (
    <div>
      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="glow-border rounded-full px-4 py-1 text-xs uppercase tracking-widest text-violet-300">
            Team
          </span>
          <h1 className="mt-6 text-4xl font-semibold text-white sm:text-5xl">
            The people building{" "}
            <span className="gradient-text">Sutertai</span>
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            A small, focused team working on generative AI for image and
            video creation.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Leadership" title="Meet the team" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="glow-border rounded-2xl bg-white/[0.03] p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-sky-400 text-xl font-semibold text-black">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-violet-300">{member.role}</p>
                <p className="mt-3 text-sm text-zinc-400">{member.bio}</p>
              </div>
            ))}
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 p-6 text-center">
              <p className="text-sm text-zinc-400">
                We&apos;re growing. More team members will be added here soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Want to work with us?"
        description="Reach out if you're interested in joining Sutertai or partnering with us."
        primaryHref="/contact"
        primaryLabel="Contact us"
        secondaryHref="/about"
        secondaryLabel="Learn about Sutertai"
      />
    </div>
  );
}
