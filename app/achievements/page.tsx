import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ExternalLink, TrendingUp, Users, Shield, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Achievements | P. Vijayan IPS',
  description: 'Key achievements and strategic innovations of P. Vijayan IPS in law enforcement and systemic reform.',
};

export default function Achievements() {
  const achievements = [
    {
      title: "Cracking India's Largest Bank Heist",
      description: "Led the investigation of the Chelembra Bank Robbery, solving it in 56 days. The case is now a bestselling book and upcoming film.",
      category: "Investigation",
      image: "https://images.unsplash.com/photo-1541873676947-9ca0d6183ad7?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Student Police Cadets (SPC)",
      description: "A revolutionary youth program active in 13,000+ schools, mentoring over 1 million youth across India.",
      category: "Youth Engagement",
      image: "https://images.unsplash.com/photo-1523240715632-d984bc31b211?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "KANSAF & DANSAF Narcotics Ops",
      description: "State-wide intensive crackdowns on drug networks, disrupting supply chains and securing thousands of convictions.",
      category: "Narcotics Control",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Punyam Poonkavanam",
      description: "Environmental behavioral reform at Sabarimala, personally recognized by PM Modi in 'Mann ki Baat'.",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Child-Friendly Policing",
      description: "Transformed 150 stations into child-sensitive spaces with UNICEF support and specialized officer training.",
      category: "Child Protection",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Shadow Policing Initiative",
      description: "Covert urban policing models introduced in Kochi to counter rising metropolitan crime and ensure safety.",
      category: "Urban Safety",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200",
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cinematic Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920" 
            alt="Achievements Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent rounded-md text-xs font-bold uppercase tracking-tighter mb-6">
              <Shield className="w-3 h-3" /> 26+ Years of Excellence
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
              Impact <br/> <span className="text-accent">& Legacy</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed font-light max-w-xl">
              Transforming law enforcement through systemic innovation, social compassion, and measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Visual Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-primary">Signature Milestones</h2>
            <p className="text-muted-foreground mt-2 text-lg">A visual journey through landmark reforms and investigations</p>
          </div>
          <div className="flex gap-6">
             <div className="flex items-center gap-2 text-sm font-semibold text-primary/70">
                <CheckCircle className="w-5 h-5 text-accent" /> Replicable Models
             </div>
             <div className="flex items-center gap-2 text-sm font-semibold text-primary/70">
                <TrendingUp className="w-5 h-5 text-accent" /> National Impact
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="group relative h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Background Image with Zoom Effect */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
              />
              
              {/* Overlay Gradient (Becomes darker on hover) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content Box */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-accent mb-4 py-1 border-b border-accent/30">
                    {item.category}
                  </span>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    {item.description}
                  </p>
                  <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold bg-white text-primary px-6 py-3 rounded-xl hover:bg-accent hover:text-white transition-all">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Glass-morphism Statistics & Leadership */}
      <section className="bg-primary py-24 relative overflow-hidden">
        {/* Subtle Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                  Strategic Leadership <br/> & <span className="text-accent">Systemic Reform</span>
                </h2>
                <div className="space-y-10">
                  <StatItem 
                    icon={<Zap />}
                    title="Public Institution Revitalization" 
                    desc="Modernized the Kerala Books and Publications Society (KBPS), turning it into a profit-making entity with a historic ₹49 Crore surplus."
                  />
                  <StatItem 
                    icon={<Shield />}
                    title="National Security Intelligence" 
                    desc="Coordinated high-stakes security for 4 Lok Sabha elections and streamlined intelligence gathering for anti-terror operations."
                  />
                  <StatItem 
                    icon={<TrendingUp />}
                    title="Next-Gen Training" 
                    desc="Pioneered AI-driven curriculum at the Kerala Police Academy, focusing on forensic accuracy and behavioral psychology."
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                 <StatCard value="1M+" label="Youth Mentored" />
                 <StatCard value="150+" label="Homes Built" />
                 <StatCard value="400+" label="Faith Trusts Restored" />
                 <StatCard value="10K+" label="Officers Trained" />
              </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Reusable Stat Item Component
function StatItem({ title, desc, icon }: { title: string, desc: string, icon: React.ReactNode }) {
  return (
    <div className="flex gap-6 group">
      <div className="flex-shrink-0 w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center group-hover:bg-accent transition-colors">
        <div className="text-accent group-hover:text-white transition-colors">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-xl mb-2">{title}</h4>
        <p className="text-white/50 text-sm leading-relaxed max-w-md">{desc}</p>
      </div>
    </div>
  );
}

// Reusable Glass Stat Card
function StatCard({ value, label }: { value: string, label: string }) {
  return (
    <div className="bg-white/5 p-10 rounded-[2.5rem] backdrop-blur-xl border border-white/10 text-center hover:border-accent/50 transition-colors">
      <div className="text-5xl font-bold text-accent mb-3">{value}</div>
      <div className="text-white/60 text-xs font-bold uppercase tracking-widest">{label}</div>
    </div>
  );
}