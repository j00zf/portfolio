import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Link from 'next/link';
import { ArrowRight, Shield, Users, Lightbulb, Award, Quote } from 'lucide-react';
import { JSX } from 'react/jsx-dev-runtime';
import InitiativesMarquee from '@/components/InitiativesMarquee';
import  AboutSection  from '@/components/AboutSection';
import LeadershipInnovationsMarquee from '@/components/Achievements';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Redesigned Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                Visionary Public Service
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
                <span className="text-accent">P. Vijayan</span> IPS
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Additional Director General of Police (Intelligence), Kerala. A system reformer and social innovator dedicating 26+ years to redefining modern policing through compassion and measurable transformation.
              </p>
            </div>

            {/* Integrated Philosophy Quote */}
            <div className="relative p-6 bg-muted/50 border-l-4 border-accent rounded-r-xl italic shadow-sm">
              <Quote className="absolute -top-3 -left-3 w-8 h-8 text-accent/20 fill-accent/20" />
              <p className="text-lg text-primary/90 leading-relaxed">
                "I believe there are two sets of people in the world—'problem people' and 'solution people'. I represent Positivity and Possibilities (Pos-Poss)."
              </p>
              <cite className="block mt-2 text-sm font-semibold not-italic text-accent">— Leadership Philosophy</cite>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
              >
                Explore Profile
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/initiatives"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
              >
                View Initiatives
              </Link>
            </div>
          </div>

          {/* Right Column: Profile Image & Stats Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl border-8 border-white">
              {/* Replace with actual image source */}
              <div className="absolute inset-0 bg-muted flex items-center justify-center">
                <Image
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D990949005724317&f=1&nofb=1&ipt=ef7dc3778b9a2784951273a819a2b570f6bc09f6ad4d76817e827cbaeaf6c330"
                  alt="P. Vijayan IPS"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Floating Achievement Card */}
            <div className="absolute -bottom-2 -left-2 bg-white/90 p-2 rounded-xl shadow-xl border border-border hidden md:block">
              <div className="flex items-center gap-4">
               
                <div>
                  <div className="text-xl font-bold text-primary">ADGP, KP</div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">(Intelligence)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <InitiativesMarquee />
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* National Leadership Context */}
        <div className="mt-20 bg-muted rounded-3xl p-12 md:p-16 border border-border">
          <h2 className="text-3xl font-bold text-primary mb-6 text-center">Vision Alignment: Amrit Kaal (2047)</h2>
          <p className="text-lg text-muted-foreground text-center mb-6 leading-relaxed">
            Mr. Vijayan's pioneering models in youth engagement, narcotics control, and community-led enforcement offer scalable blueprints for national governance. His work seamlessly aligns with India's aspirations of becoming a progressive, safe, and empowered nation by 2047.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="font-bold text-primary mb-2">Evidence-Based</p>
              <p className="text-sm text-muted-foreground">Measurable outcomes validated by independent institutions</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="font-bold text-primary mb-2">Scalable Models</p>
              <p className="text-sm text-muted-foreground">Replicable across states and national contexts</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <p className="font-bold text-primary mb-2">Citizen-Centric</p>
              <p className="text-sm text-muted-foreground">Community ownership and inclusive governance</p>
            </div>
          </div>
        </div>
        </section>

      <LeadershipInnovationsMarquee />

      {/* Key Statistics Bar */}
      <section className="bg-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Youth Impacted", value: "1M+" },
              { label: "Active Schools", value: "13K+" },
              { label: "Presidential Medals", value: "2" },
              { label: "Global Programs", value: "15+" }
            ].map((stat, i) => (
              <div key={i} className="text-center border-r border-primary-foreground/10 last:border-0">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{stat.value}</div>
                <p className="text-primary-foreground/70 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Capabilities Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Shield />} 
            title="Law Enforcement" 
            desc="Strategic leadership in intelligence and security operations." 
          />
          <FeatureCard 
            icon={<Users />} 
            title="Community" 
            desc="Grassroots engagement and citizen-centric policing models." 
          />
          <FeatureCard 
            icon={<Lightbulb />} 
            title="Innovation" 
            desc="Creating replicable social models for systemic reform." 
          />
          <FeatureCard 
            icon={<Award />} 
            title="Recognition" 
            desc="Honored with national and international accolades." 
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Helper component for the feature grid
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow group">
      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors text-accent">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
    </div>
  );
}