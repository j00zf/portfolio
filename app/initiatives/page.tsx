import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Initiatives & Programs | P. Vijayan IPS',
  description:
    'Revolutionary youth engagement, social welfare, and institutional reform initiatives by P. Vijayan IPS.',
};

export default function Initiatives() {
  const initiativeCategories = [
    {
      category: 'Youth Engagement & Empowerment',
      initiatives: [
        {
          name: 'Student Police Cadets Programme (SPC)',
          logo: '/initiatives/spc.jpg',
          website: 'https://studentpolicecadet.org',
          description:
            'Revolutionary initiative active in 13,000+ schools across India mentoring 1M+ youth. Instills civic responsibility, discipline, empathy, and leadership.',
        },
        {
          name: 'Project HOPE',
          logo: '/initiatives/hope.jpg',
          website: '#',
          description:
            'Targeted intervention reintegrating students who failed Class X into educational and social mainstream through mentoring and skill development.',
        },
        {
          name: 'Capability Exploration & Enhancement Programme (CEEP)',
          logo: '/initiatives/ceep.jpg',
          website: '#',
          description:
            "Ignites children's potential and shapes them as natural leaders through non-cognitive skill development.",
        },
        {
          name: 'Behavioral & Emotional Empowerment Programme (BEEP)',
          logo: '/initiatives/beep.jpg',
          website: '#',
          description:
            'First-of-its-kind psycho-social framework for adolescent well-being addressing aggression, addiction, and emotional resilience.',
        },
      ],
    },

    {
      category: 'Child Protection & Welfare',
      initiatives: [
        {
          name: 'Children & Police (CAP)',
          logo: '/initiatives/cap.jpg',
          website: '#',
          description:
            'Institutional model reshaping police engagement with children and transforming police stations into child-sensitive spaces.',
        },
        {
          name: 'Our Responsibility to Children (ORC)',
          logo: '/initiatives/orc.jpg',
          website: '#',
          description:
            'School-based child protection initiative involving parents, teachers, local governance, and civil society.',
        },
        {
          name: 'School Protection Groups (SPG)',
          logo: '/initiatives/spg.jpg',
          website: '#',
          description:
            'Community-led initiative ensuring child safety and preventing juvenile delinquency.',
        },
        {
          name: 'Digital De-Addiction (D-DAD) Centres',
          logo: '/initiatives/ddad.jpg',
          website: '#',
          description:
            'Psychological support initiative for children affected by internet and gaming addiction.',
        },
      ],
    },

    {
      category: 'Crisis Response & Social Impact',
      initiatives: [
        {
          name: 'Feed-A-Stomach Campaign',
          logo: '/initiatives/feed.jpg',
          website: '#',
          description:
            'COVID-19 relief initiative mobilizing kitchens and delivering meals to vulnerable communities.',
        },
        {
          name: 'Domestic Conflict Resolution Centres (DCRC)',
          logo: '/initiatives/dcrc.jpg',
          website: '#',
          description:
            'Conflict resolution initiative mitigating violence against women, children, and persons with disabilities.',
        },
        {
          name: "'Nanma' Homes",
          logo: '/initiatives/nanma.jpg',
          website: '#',
          description:
            'Community-led initiative constructing homes for homeless and flood-affected populations.',
        },
        {
          name: "'Chiri' Project",
          logo: '/initiatives/chiri.jpg',
          website: '#',
          description:
            'Mental health initiative supporting children during COVID-19 with psychologists and peer mentors.',
        },
      ],
    },

    {
      category: 'Environmental & Behavioral Leadership',
      initiatives: [
        {
          name: "'Punyam Poonkavanam'",
          logo: '/initiatives/punyam.jpg',
          website: '#',
          description:
            'Benchmark environmental initiative redefining responsible pilgrimage through behavioral reform and waste management.',
        },
        {
          name: 'Project Candlelight',
          logo: '/initiatives/candlelight.jpg',
          website: '#',
          description:
            'Youth redirection programme targeting at-risk adolescents from urban slums.',
        },
      ],
    },

    {
      category: 'Institutional Transformation',
      initiatives: [
        {
          name: 'Kerala Police Academy Modernization',
          logo: '/initiatives/kpa.jpg',
          website: '#',
          description:
            'Modernized police training through AI integration and behavioral reform.',
        },
        {
          name: 'Social Policing Division',
          logo: '/initiatives/social-policing.jpg',
          website: '#',
          description:
            'First-ever dedicated division integrating social welfare with law enforcement.',
        },
        {
          name:
            'Compassionate Communication & Intervention by Police (CCIP)',
          logo: '/initiatives/ccip.jpg',
          website: '#',
          description:
            'Framework for empathetic police-community engagement and healing.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-accent py-28 text-primary-foreground">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_40%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4 text-primary-foreground/70">
              SOCIAL IMPACT • YOUTH • REFORM
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Transformative Initiatives
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
              Large-scale social innovation programs designed to empower youth,
              protect children, modernize institutions, and create sustainable
              societal transformation.
            </p>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {initiativeCategories.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-28">
              {/* SECTION TITLE */}
              <div className="flex items-center gap-4 mb-14">
                <div className="w-1 h-14 rounded-full bg-accent" />

                <h2 className="text-4xl md:text-5xl font-bold text-primary">
                  {section.category}
                </h2>
              </div>

              {/* CARDS */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {section.initiatives.map((initiative, index) => (
                  <div
                    key={index}
                    className="group overflow-hidden rounded-3xl bg-white border border-border shadow-soft hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    {/* IMAGE */}
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={initiative.logo}
                        alt={initiative.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                    </div>

                    {/* CONTENT */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-primary mb-4 leading-snug">
                        {initiative.name}
                      </h3>

                      <p className="text-muted-foreground leading-relaxed mb-8">
                        {initiative.description}
                      </p>

                      <Link
                        href={initiative.website}
                        target="_blank"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
                      >
                        Visit Official Website
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-sm opacity-70 mb-4">
              CORE PHILOSOPHY
            </p>

            <h2 className="text-5xl font-bold">
              Design Principles
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Systemic & Sustainable',
                desc: 'Built to transform systems and create long-term institutional impact.',
              },
              {
                icon: '💰',
                title: 'Cost Effective',
                desc: 'High-impact models designed with efficient resource utilization.',
              },
              {
                icon: '🌍',
                title: 'Replicable',
                desc: 'Scalable frameworks adaptable across regions and institutions.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-sm text-center"
              >
                <div className="text-6xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-primary-foreground/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALIDATION */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-border bg-white p-12 shadow-soft">
            <div className="text-center mb-14">
              <p className="uppercase tracking-[0.3em] text-sm text-muted-foreground mb-4">
                INDEPENDENT VALIDATION
              </p>

              <h2 className="text-5xl font-bold text-primary mb-6">
                Evidence of Impact
              </h2>

              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Independent studies and assessments by leading organizations
                validate the measurable social impact and institutional reforms
                driven by these initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                'KPMG',
                'UNICEF',
                'Kerala State Planning Board',
                'SCERT Kerala',
              ].map((org, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-border bg-muted/40 p-8 text-center"
                >
                  <h3 className="text-lg font-bold text-primary">
                    {org}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}