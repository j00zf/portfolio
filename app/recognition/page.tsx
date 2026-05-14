import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { Award, Globe, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Recognition & Awards | P. Vijayan IPS',
  description: 'National and international recognitions, awards, and academic achievements of P. Vijayan IPS.',
};

export default function Recognition() {
  const nationalAwards = [
    {
      title: 'Indian President\'s Medal for Distinguished Service',
      year: '2015, 2025',
      description: 'Highest recognition from the President of India for outstanding contribution to national service and police reform.',
      category: 'National Honor'
    },
    {
      title: 'Union Home Minister\'s Utkrishta Seva Medal',
      year: '2021',
      description: 'Recognition for distinguished and meritorious service from the Union Home Ministry.',
      category: 'National Honor'
    },
    {
      title: 'Kerala Chief Minister\'s Award for Public Policy Innovation',
      year: '2014, 2017',
      description: 'Awarded for transformative policy innovations in public governance and community engagement.',
      category: 'State Recognition'
    },
    {
      title: 'CNN IBN Indian of the Year (Popular Choice)',
      year: '2014',
      description: 'Selected as one of India\'s most impactful individuals by public vote.',
      category: 'Media Recognition'
    },
    {
      title: 'India Today - Unsung Heroes of India',
      year: '44th Edition',
      description: 'Featured as one of 44 unsung heroes shaping India\'s future.',
      category: 'Media Recognition'
    },
    {
      title: 'FICCI Award for Best SMART Policing Initiative',
      year: 'Recognition',
      description: 'Federation of Indian Chambers of Commerce award for innovative smart policing solutions.',
      category: 'Innovation Award'
    }
  ];

  const childWelfareAwards = [
    {
      title: 'Children\'s Champion Award',
      organization: 'Delhi Commission for Protection of Child Rights (DCPCR)',
      description: 'Recognition for pioneering work in child protection and child-friendly institutional reforms.'
    },
    {
      title: '\'St. George Award\'',
      organization: 'Christian Community',
      description: 'Awarded for exemplary service in temple theft resolution and restoring trust and justice across faiths.'
    }
  ];

  const internationalRecognitions = [
    {
      title: 'Edward S. Mason Fellow',
      organization: 'Harvard Kennedy School, USA',
      description: 'Selected for prestigious mid-career public administration program for global leaders.',
      type: 'Fellowship'
    },
    {
      title: 'Global Tobacco Control Leadership Programme',
      organization: 'Johns Hopkins School of Public Health, USA',
      description: 'Specialized training in public health governance and tobacco control strategy.',
      type: 'Fellowship'
    },
    {
      title: 'Mid-Career Training Programme',
      organization: 'University College London (UCL), UK',
      description: 'Advanced training in strategic governance and institutional leadership.',
      type: 'Training'
    },
    {
      title: 'Distinguished Speaker',
      organization: 'Rabdan Academy, Abu Dhabi',
      description: 'Invited as guest expert on policing and strategic leadership to government-owned higher education institution.',
      type: 'Speaking Engagement'
    },
    {
      title: 'International Law Enforcement & Public Health Delegate',
      organization: 'Amsterdam Conferences (2016)',
      description: 'Participated in two consecutive global summits organized by Law Enforcement and HIV Network (UNDP).',
      type: 'Conference'
    },
    {
      title: 'Guest Faculty',
      organization: 'National Police Academy & Premier Police Academies',
      description: 'Invited faculty member at Hyderabad\'s National Police Academy and multiple premier institutions across India.',
      type: 'Academic'
    }
  ];

  const rotaryAwards = [
    {
      title: 'Rotary Lifetime Achievement Award',
      year: '2021',
      organization: 'Rotary Club, Kerala',
      description: 'Recognition for lifetime contribution to community service and humanitarian work.'
    },
    {
      title: '\'Indian Icon Award\'',
      year: 'Recognition',
      organization: 'Friends of Bahrain',
      description: 'International recognition for humanitarian and leadership excellence.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Recognition & Awards</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            National honors, international recognitions, and institutional acclaim for transformative public service
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* National Awards */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold text-primary">National Honors & Awards</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {nationalAwards.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-soft hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary flex-1">{award.title}</h3>
                  <span className="text-sm font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full flex-shrink-0 ml-4">
                    {award.year}
                  </span>
                </div>
                <p className="text-muted-foreground mb-4">{award.description}</p>
                <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                  {award.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Child Welfare & Community Recognition */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Child Welfare & Community Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {childWelfareAwards.map((award, index) => (
              <div key={index} className="bg-accent/5 rounded-2xl p-8 border border-accent/20 shadow-soft">
                <h3 className="text-xl font-bold text-primary mb-2">{award.title}</h3>
                <p className="text-accent font-semibold text-sm mb-3">{award.organization}</p>
                <p className="text-muted-foreground">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* International Recognition */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-accent" />
            <h2 className="text-4xl font-bold text-primary">International Recognition & Fellowships</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {internationalRecognitions.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-soft hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary flex-1">{award.title}</h3>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full flex-shrink-0 ml-4">
                    {award.type}
                  </span>
                </div>
                <p className="text-accent font-semibold text-sm mb-3">{award.organization}</p>
                <p className="text-muted-foreground">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Rotary & Other Recognition */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Community Service Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {rotaryAwards.map((award, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-soft">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary flex-1">{award.title}</h3>
                  <span className="text-sm font-semibold bg-accent/10 text-accent px-3 py-1 rounded-full flex-shrink-0 ml-4">
                    {award.year}
                  </span>
                </div>
                <p className="text-accent font-semibold text-sm mb-3">{award.organization}</p>
                <p className="text-muted-foreground">{award.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Media & Cultural Impact */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-16">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-accent" />
            <h2 className="text-3xl font-bold">Cultural Impact & Media Legacy</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Literature & Books</h3>
              <ul className="space-y-2 text-primary-foreground/80 text-sm">
                <li>• <strong>\'Chelembra Bank Robbery – India\'s Money Heist\'</strong> by Anirban Bhattacharyya; Penguin Books (Bestseller)</li>
                <li>• <strong>\'Adhikarathinte Sadyathakal\'</strong> by Dr. Amruth G. Kumar; on SPC & socio-educational reforms, DC Books, Kerala</li>
                <li>• <strong>\'Schools That Dream\'</strong> by Shashi Velath & Anand Haridas; case studies on SPC impact, West Land Publishers New Delhi</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Film Adaptation</h3>
              <p className="text-primary-foreground/80 text-sm">
                The Chelembra Bank Robbery case is being adapted into a feature film, bringing the innovation and investigative excellence to mainstream audiences.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Prime Minister\'s Recognition</h3>
              <p className="text-primary-foreground/80 text-sm">
                The \'Punyam Poonkavanam\' environmental initiative at Sabarimala was personally appreciated by Hon\'ble Prime Minister Narendra Modi Ji in the national broadcast \'Mann ki Baat\' (December 2017).
              </p>
            </div>
          </div>
        </div>

        {/* Academic & Professional Excellence */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-primary mb-8">Academic Excellence</h2>
          <div className="bg-white rounded-2xl p-12 border border-border shadow-soft">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">Educational Background</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• B.A. & M.A. in Economics, University of Calicut</li>
                  <li>• B.A. in Education, University of Calicut</li>
                  <li>• UGC-NET & Junior Research Fellowship (JRF) Qualified</li>
                  <li>• Currently pursuing Ph.D. at IIT Vadodara</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-4">National & International Assignments</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Secretary, Micro Mission 2, National Police Mission (BPRD), New Delhi</li>
                  <li>• Election Observer for Election Commission of India (5 states)</li>
                  <li>• Policy Contributions on Student Police Cadets, Children & Police, Youth & Police</li>
                  <li>• Guest Faculty at National Police Academy & Rabdan Academy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

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

      <Footer />
    </div>
  );
}
