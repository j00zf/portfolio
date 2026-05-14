import Image from "next/image";
import Link from "next/link";
import { JSX } from "react/jsx-dev-runtime";

export default function AboutSection(): JSX.Element {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.08),transparent_35%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE SIDE */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-2xl">
              <div className="relative h-[650px] w-full">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/P_Vijayan_IPS.jpg/500px-P_Vijayan_IPS.jpg"
                  alt="P. Vijayan IPS"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 px-6 py-4 text-white">
                <p className="text-3xl font-black">26+</p>
                <p className="text-sm opacity-80">
                  Years of Distinguished Service
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
          </div>

          {/* CONTENT SIDE */}
          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-accent mb-5">
              ABOUT P. VIJAYAN IPS
            </p>

            <h2 className="text-5xl md:text-4xl font-black text-primary leading-tight mb-8">
              Visionary Police Officer & Social Reformer
            </h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                P. Vijayan IPS is a 1999-batch Indian Police Service officer
                currently serving as the Additional Director General of Police
                (Intelligence), Kerala.
              </p>

              <p>
                Widely recognized as one of India’s most transformative public
                leaders, he has redefined modern policing through innovation,
                compassion, institutional reform, and citizen-centric
                governance.
              </p>

              <p>
                Across more than 26 years of distinguished service, his
                initiatives have empowered millions of youth, strengthened child
                protection systems, modernized police institutions, and inspired
                a new model of ethical leadership in public service.
              </p>
            </div>

            {/* HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-5 mt-10">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <h3 className="text-4xl font-black text-accent mb-2">
                  26+
                </h3>

                <p className="text-sm text-muted-foreground">
                  Years of Public Service
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <h3 className="text-4xl font-black text-accent mb-2">
                  1M+
                </h3>

                <p className="text-sm text-muted-foreground">
                  Youth Mentored
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <h3 className="text-4xl font-black text-accent mb-2">
                  13K+
                </h3>

                <p className="text-sm text-muted-foreground">
                  Schools Engaged
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6 shadow-soft">
                <h3 className="text-4xl font-black text-accent mb-2">
                  8
                </h3>

                <p className="text-sm text-muted-foreground">
                  Commissioner Posts Held
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
              >
                Explore Full Biography
              </Link>

              <Link
                href="/initiatives"
                className="inline-flex items-center justify-center rounded-2xl border border-border bg-white px-8 py-4 text-sm font-bold text-primary transition-all hover:border-accent hover:text-accent"
              >
                View Initiatives
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}