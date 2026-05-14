import Link from "next/link";
import Image from "next/image";

interface Innovation {
  title: string;
  description: string;
  category: string;
  image: string;
}

export default function LeadershipInnovationsMarquee() {
  const innovations: Innovation[] = [
    {
      title: "Chelembra Bank Heist Investigation",
      description:
        "Solved India’s largest bank robbery in just 56 days.",
      category: "Investigation",
      image: "https://picsum.photos/800/600?random=1",
    },
    {
      title: "Temple Theft Special Investigation Team",
      description:
        "Resolved 400+ undetected temple theft cases.",
      category: "Justice & Community",
      image: "https://picsum.photos/800/600?random=2",
    },
    {
      title: "Shadow Policing Initiative",
      description:
        "Strategic covert policing model for urban safety.",
      category: "Urban Safety",
      image: "https://picsum.photos/800/600?random=3",
    },
    {
      title: "KANSAF & DANSAF",
      description:
        "Kerala’s largest anti-narcotics enforcement initiative.",
      category: "Narcotics Control",
      image: "https://picsum.photos/800/600?random=4",
    },
    {
      title: "Operation Blade & Kubera",
      description:
        "Protection against illegal moneylending systems.",
      category: "Community Protection",
      image: "https://picsum.photos/800/600?random=5",
    },
    {
      title: "Child-Friendly Police Stations",
      description:
        "150 police stations transformed into child-safe spaces.",
      category: "Child Protection",
      image: "https://picsum.photos/800/600?random=6",
    },
    {
      title: "Student Police Cadets",
      description:
        "1 million+ youth mentored across India.",
      category: "Youth Engagement",
      image: "https://picsum.photos/800/600?random=7",
    },
    {
      title: "Punyam Poonkavanam",
      description:
        "Environmental reform initiative at Sabarimala.",
      category: "Environmental Leadership",
      image: "https://picsum.photos/800/600?random=8",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_35%)]" />

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary-foreground/70 mb-4">
              Strategic Leadership & Innovation
            </p>

            <h2 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Leadership Innovations
            </h2>

            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Landmark policing reforms, breakthrough investigations,
              and systemic innovations that transformed public safety
              and governance across India.
            </p>
          </div>

          <Link
            href="/achievements"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-primary font-bold transition-all hover:scale-105 hover:bg-accent hover:text-accent-foreground"
          >
            View All Achievements
          </Link>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden w-full">
        <div className="flex w-max animate-marquee gap-8">
          {[...innovations, ...innovations].map((innovation, index) => (
            <div
              key={index}
              className="group w-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={innovation.image}
                  alt={innovation.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-5 left-5">
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-wider">
                    {innovation.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold leading-snug mb-4">
                  {innovation.title}
                </h3>

                <p className="text-primary-foreground/75 leading-relaxed">
                  {innovation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}