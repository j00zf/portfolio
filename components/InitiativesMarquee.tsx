import Image from "next/image";
import Link from "next/link";
import { JSX } from "react/jsx-dev-runtime";

interface Initiative {
  name: string;
  logo: string;
}

export default function InitiativesMarquee(): JSX.Element {
  const initiatives: Initiative[] = [
    {
      name: "SPC",
      logo: "https://picsum.photos/300/300?random=1",
    },
    {
      name: "Project HOPE",
      logo: "https://picsum.photos/300/300?random=2",
    },
    {
      name: "CEEP",
      logo: "https://picsum.photos/300/300?random=3",
    },
    {
      name: "BEEP",
      logo: "https://picsum.photos/300/300?random=4",
    },
    {
      name: "CAP",
      logo: "https://picsum.photos/300/300?random=5 ",
    },
    {
      name: "ORC",
      logo: "https://picsum.photos/300/300?random=6",
    },
    {
      name: "SPG",
      logo: "https://picsum.photos/300/300?random=7",
    },
    {
      name: "D-DAD",
      logo: "https://picsum.photos/300/300?random=8",
    },
    {
      name: "Feed-A-Stomach",
      logo: "https://picsum.photos/300/300?random=9",
    },
    {
      name: "DCRC",
      logo: "https://picsum.photos/300/300?random=10",
    },
    {
      name: "Punyam Poonkavanam",
      logo: "https://picsum.photos/300/300?random=11",
    },
    {
      name: "Project Candlelight",
      logo: "https://picsum.photos/300/300?random=12",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm text-primary-foreground/70 mb-4 font-semibold">
              Social Innovation & Impact
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Landmark Initiatives
            </h2>

            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Revolutionary programs empowering youth, protecting children,
              modernizing institutions, and transforming communities across
              India.
            </p>
          </div>

          <Link
            href="/initiatives"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-primary font-bold transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
          >
            View All Initiatives
          </Link>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="relative flex overflow-hidden">
        <div className="flex min-w-max animate-[marquee_35s_linear_infinite] gap-6">
          {[...initiatives, ...initiatives].map((initiative, index) => (
            <div
              key={index}
              className="group flex min-w-[300px] items-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all hover:bg-white/10"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl bg-white/10 flex-shrink-0">
                <Image
                  src={initiative.logo}
                  alt={initiative.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold leading-snug">
                  {initiative.name}
                </h3>

                <p className="text-sm text-primary-foreground/70 mt-1">
                  Social Impact Initiative
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}