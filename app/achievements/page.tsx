import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achievements | P. Vijayan IPS',
  description: 'Key achievements and strategic innovations of P. Vijayan IPS in law enforcement and systemic reform.',
};

export default function Achievements() {
  const achievements = [
    {
      title: 'Cracking India\'s Largest Bank Heist',
      description: 'As Superintendent of Police, led the investigation of the Chelembra Bank Robbery, solving it in just 56 days. The case became the subject of a bestselling Penguin book and is being adapted into a feature film.',
      category: 'Investigation'
    },
    {
      title: 'Temple Theft Special Investigation Team (TTSIT)',
      description: 'Resolved over 400 previously undetected temple theft cases and earned the "St. George Award" from the Christian community for exemplary service in restoring trust and justice across faiths.',
      category: 'Justice & Community'
    },
    {
      title: 'Shadow Policing Initiative',
      description: 'Introduced a strategic covert policing initiative in Kochi to counter rising metropolitan crime. The model proved highly effective and is now institutionalized across multiple urban centers in Kerala.',
      category: 'Urban Safety'
    },
    {
      title: 'KANSAF & DANSAF',
      description: 'Led intensive crackdowns on drug networks as head of State and District Anti-Narcotic Special Action Forces, disrupting major supply chains and securing thousands of convictions. KANSAF became the most effective drug enforcement agency in the state.',
      category: 'Narcotics Control'
    },
    {
      title: 'Operation Blade & Operation Kubera',
      description: 'Launched comprehensive enforcement initiatives against illegal moneylending, providing systemic financial protection for vulnerable communities.',
      category: 'Community Protection'
    },
    {
      title: 'Child-Friendly Police Stations',
      description: 'Institutional model transforming police-child engagement. CAP initiative has transformed 150 police stations across Kerala into child-sensitive spaces, with over 10,000 officers trained in child rights and protection protocols with UNICEF support.',
      category: 'Child Protection'
    },
    {
      title: 'Student Police Cadets Programme (SPC)',
      description: 'Revolutionary youth engagement initiative now active in 13,000+ schools across India, mentoring 1 million youth. UNICEF designated SPC cadets as "Child Rights Ambassadors" and the Government of Kerala recognized them as official "Anti-Drug Warriors."',
      category: 'Youth Engagement'
    },
    {
      title: 'Punyam Poonkavanam',
      description: 'Benchmark environmental initiative at Sri Sabarimala Temple promoting behavioral reform, waste management, and inter-departmental coordination. Personally appreciated by PM Modi in "Mann ki Baat" (December 2017) and replicated across multiple places of worship.',
      category: 'Environmental Leadership'
    }
  ];

  const categories = ['Investigation', 'Justice & Community', 'Urban Safety', 'Narcotics Control', 'Community Protection', 'Child Protection', 'Youth Engagement', 'Environmental Leadership'];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Signature Achievements</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Strategic innovations and landmark outcomes that have reshaped modern policing in India
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-primary mb-8">Leadership Innovations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border shadow-soft hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                      <span className="text-accent font-bold text-lg">✓</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground mb-3">{achievement.description}</p>
                    <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Initiatives */}
        <div className="bg-primary text-primary-foreground rounded-3xl p-12 md:p-16 mt-20">
          <h2 className="text-3xl font-bold mb-8">Key Leadership Roles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Police Academy Leadership</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Re-engineered police training at Kerala Police Academy through AI integration, modernized investigative methods, and emphasis on behavioral reform and public engagement.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">National Security</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Led critical intelligence operations, election security arrangements (4 Lok Sabha, State Assembly, Local Body elections), and VVIP protection during high-profile events.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Public Institution Reform</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                As MD of Kerala Books and Publications Society, revitalized a struggling entity into profitability, achieving Rs 49 Crore profit—highest in 15-year history.
              </p>
            </div>
          </div>
        </div>

        {/* Youth Impact Statistics */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-8">Youth-Centric Programs Impact</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Project HOPE', stat: '4,200+', desc: 'Students Reintegrated into Education' },
              { title: 'CEEP', stat: '15,000', desc: 'Children Empowered as Leaders' },
              { title: 'ORC', stat: '4.72 Lakh', desc: 'Children Protected (1,200+ Schools)' },
              { title: 'CAP', stat: '10,000+', desc: 'Officers Trained in Child Rights' },
              { title: 'D-DAD Centres', stat: '1,902', desc: 'Children De-Addicted from Internet' },
              { title: 'SPG', stat: '6,000+', desc: 'School Protection Groups Active' },
            ].map((program, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 border border-border text-center">
                <h3 className="font-semibold text-primary mb-3">{program.title}</h3>
                <div className="text-4xl font-bold text-accent mb-2">{program.stat}</div>
                <p className="text-sm text-muted-foreground">{program.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Crisis Response Impact */}
        <div className="mt-20 bg-accent/5 rounded-3xl p-12 md:p-16 border border-accent/20">
          <h2 className="text-3xl font-bold text-primary mb-8">Crisis Response & Social Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Feed-A-Stomach Campaign</h3>
              <p className="text-muted-foreground mb-3">
                Launched during COVID-19 lockdowns, mobilizing 24 kitchens and delivering over 1 million meals to street dwellers, stranded commuters, and hospital patients. Distributed 80,000 food packets with 20-day supplies through community partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Domestic Conflict Resolution</h3>
              <p className="text-muted-foreground mb-3">
                Established centers mitigating violence against women, children, and persons with disabilities. 43 counselors provided holistic support, enabling 25,577 couples to receive conflict resolution counseling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Housing for Dignity</h3>
              <p className="text-muted-foreground mb-3">
                &apos;Nanma&apos; homes mobilized like-minded individuals to construct 150 homes for homeless and flood-affected populations. &apos;God&apos;s Own Children&apos; completed 9 individual homes at ~Rs 20 lakhs total cost.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Healthcare Access</h3>
              <p className="text-muted-foreground mb-3">
                Drug Bank supported 110 beneficiaries with life-saving medications valued at Rs 32+ lakhs. &apos;Pravasi&apos; helpdesk launched health consultancy powered by 150 specialist doctors for NRIs.
              </p>
            </div>
          </div>
        </div>

        {/* Recognition */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-primary mb-8">Academic & Professional Excellence</h2>
          <div className="bg-white rounded-2xl p-8 border border-border shadow-soft">
            <h3 className="text-xl font-bold text-primary mb-6">Core Competencies</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Strategic Law Enforcement & Crisis Management',
                'Policy Innovation in Public Welfare',
                'Narcotics Intelligence & Supply Chain Disruption',
                'Digital Governance & Behavioral Communication',
                'Capacity Building in Police, Teachers & Social Workers',
                'Cross-cultural & Interfaith Collaborations',
                'Juvenile Justice & Adolescent Empowerment',
                'Sustainable Urban Safety Frameworks',
              ].map((competency, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-accent font-bold flex-shrink-0">→</span>
                  <span className="text-muted-foreground">{competency}</span>
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
