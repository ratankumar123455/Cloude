import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Team",
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
      <PageHero
        eyebrow="Team"
        title={
          <>
            The people building <span className="text-generated">Sutertai</span>
          </>
        }
        description="A small, focused team working on generative AI for image and video creation."
      />

      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Leadership" title="Meet the team" />
          <div className="hairline-t grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="hairline-b py-8">
                <div
                  className="font-display flex h-16 w-16 items-center justify-center rounded-full text-xl text-pure"
                  style={{
                    backgroundImage:
                      "linear-gradient(150deg, rgba(91,95,255,0.9), rgba(27,36,38,0.9))",
                  }}
                  aria-hidden="true"
                >
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="font-display mt-4 text-lg text-paper">{member.name}</h3>
                <p className="mono-label mt-1 text-[11px] text-accent">{member.role}</p>
                <p className="mt-3 text-sm text-muted">{member.bio}</p>
              </div>
            ))}
            <div className="hairline-b flex flex-col justify-center py-8">
              <p className="text-sm text-muted">
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
