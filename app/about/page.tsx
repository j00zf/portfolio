import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About P. Vijayan IPS | Biography & Career',
  description: 'Comprehensive biography of P. Vijayan IPS, Additional Director General of Police, Kerala. 26+ years of distinguished service in law enforcement.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">About P. Vijayan IPS</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            A visionary police officer, system reformer, and social innovator shaping modern Indian policing
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Text */}
          <div className="md:col-span-2 space-y-8">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Overview</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                P. Vijayan IPS is a 1999-batch Indian Police Service officer currently serving as the Additional Director General of Police (Intelligence), Kerala. He is widely recognized as one of India&apos;s most visionary and impactful public servants, dedicated to redefining modern policing through integrity, innovation, and measurable transformation.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Rising from modest beginnings, he overcame significant challenges to emerge as a nationally respected law enforcement leader and public reformer. With over 26 years of distinguished service anchored in compassion and citizen-centric solutions, Mr. Vijayan has become a benchmark for ethical, inclusive, and future-ready leadership in India&apos;s civil service.
              </p>
            </div>

            {/* Career Journey */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Career Journey</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                In a distinguished career spanning over 26 years, Mr. Vijayan has served as Police Chief in four key districts of Kerala—Kasargod, Thiruvananthapuram, Malappuram, and Ernakulam—and as Commissioner of Police in the cities of Kochi, Kozhikode, Thrissur, and Thiruvananthapuram. Notably, he is the first and only officer to hold the commissioner&apos;s post in all four major city jurisdictions.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                His leadership roles have included DIG (Armed Police Battalion), DIG (Intelligence), DIG (Training), IGP (Kochi Range), IGP (Police Headquarters), IGP (Anti-Terrorist Squad), IGP (Coastal Security), Director of Kerala Police Academy, First Director of Social Policing Division, and Managing Director of Kerala Books and Publications Society.
              </p>
            </div>

            {/* Core Philosophy */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Core Philosophy</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Mr. Vijayan&apos;s public service is defined by a transformative philosophy that distinguishes between &quot;problem people&quot; and &quot;solution people.&quot; He believes that true leadership means encountering challenges with innovation, finding possibilities in problems, and delivering path-breaking solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As Additional Director General of Police, he has not merely enforced the law—he has reshaped the meaning of policing in India. His leadership philosophy fuses justice with empathy, discipline with innovation, and law with societal healing. Every initiative is rooted in systemic sustainability, measurable impact, and community ownership.
              </p>
            </div>

            {/* Key Strengths */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Defining Characteristics</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Visionary Leadership:</strong> Strategic thinking that anticipates challenges and drives systemic reform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Innovation & Excellence:</strong> Cost-effective, replicable models adapted across geographies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Compassionate Policing:</strong> Blending empathy with enforcement for community-centric outcomes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Youth Empowerment:</strong> Mentoring next-generation leaders through transformative programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span><strong>Social Impact:</strong> Crisis response and vulnerable community support during emergencies</span>
                </li>
              </ul>
            </div>

            {/* Education & Credentials */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Education & Academic Excellence</h2>
              <div className="space-y-2 text-lg text-muted-foreground">
                <p>• B.A. & M.A. in Economics, University of Calicut</p>
                <p>• B.A. in Education, University of Calicut</p>
                <p>• UGC-NET & Junior Research Fellowship (JRF) Qualified</p>
                <p>• Currently pursuing Ph.D., Indian Institute of Technology (IIT), Vadodara</p>
                <p>• Edward S. Mason Fellow, Harvard Kennedy School, USA</p>
                <p>• Global Tobacco Control Leadership Programme, Johns Hopkins University</p>
                <p>• Mid-Career Training, University College London (UCL), UK</p>
              </div>
            </div>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-border shadow-soft sticky top-24">
              <h3 className="text-2xl font-bold text-primary mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">26+</div>
                  <p className="text-sm text-muted-foreground">Years of Police Service</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">1999</div>
                  <p className="text-sm text-muted-foreground">IPS Batch Year</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">8</div>
                  <p className="text-sm text-muted-foreground">City Commissioner Posts</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent mb-2">13K+</div>
                  <p className="text-sm text-muted-foreground">Schools (SPC Active)</p>
                </div>
                <div className="pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground">
                    <strong>Current Position:</strong> Additional Director General of Police (Intelligence), Kerala
                  </p>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
              <h3 className="text-xl font-bold text-primary mb-4">Core Values</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Integrity & Ethical Excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Community Empowerment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Systemic Sustainability</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Measurable Impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Inclusive Governance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
