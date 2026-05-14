import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Metadata } from 'next';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | P. Vijayan IPS',
  description: 'Get in touch with P. Vijayan IPS office or connect through official Kerala Police channels.',
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Connect With Us</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Reach out to discuss public service initiatives, collaborations, or institutional partnerships
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              {/* Official Position */}
              <div className="bg-white rounded-2xl p-8 border border-border shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Official Position</h3>
                    <p className="text-muted-foreground mb-2">
                      Additional Director General of Police (Intelligence)
                    </p>
                    <p className="text-muted-foreground">
                      Kerala Police Headquarters, Thiruvananthapuram, Kerala, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Kerala Police Portal */}
              <div className="bg-white rounded-2xl p-8 border border-border shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                      <Globe className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Kerala Police Portal</h3>
                    <p className="text-muted-foreground mb-3">
                      Access official information through the Kerala Police official website and channels.
                    </p>
                    <a
                      href="#"
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow"
                    >
                      Visit Official Portal
                    </a>
                  </div>
                </div>
              </div>

              {/* Professional Network */}
              <div className="bg-white rounded-2xl p-8 border border-border shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                      <Linkedin className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Professional Network</h3>
                    <p className="text-muted-foreground mb-3">
                      Connect on professional networks for updates on leadership initiatives and governance insights.
                    </p>
                    <a
                      href="#"
                      className="inline-block px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:shadow-lg transition-shadow"
                    >
                      Connect Online
                    </a>
                  </div>
                </div>
              </div>

              {/* Media Inquiries */}
              <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/20">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Media & Inquiries</h3>
                    <p className="text-muted-foreground mb-3">
                      For media inquiries, press releases, or information about initiatives, please contact:
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Kerala Police Public Relations Office<br />
                      Official communication channels available through Kerala Police headquarters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Form & Info */}
          <div className="space-y-8">
            {/* Key Contact Categories */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Ways to Connect</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-8 border border-border shadow-soft">
                  <h3 className="text-xl font-bold text-primary mb-4">Institutional Collaborations</h3>
                  <p className="text-muted-foreground mb-4">
                    Interested in replicating SPC, CEEP, or other transformative initiatives? Contact through official Kerala Police channels to discuss:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>✓ Student Police Cadets Programme expansion</li>
                    <li>✓ Youth empowerment initiatives</li>
                    <li>✓ Police training modernization</li>
                    <li>✓ Child protection models</li>
                    <li>✓ Community policing strategies</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-border shadow-soft">
                  <h3 className="text-xl font-bold text-primary mb-4">Speaking Engagements</h3>
                  <p className="text-muted-foreground mb-4">
                    For invitations to speak on topics including:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>✓ Modern policing and institutional reform</li>
                    <li>✓ Youth engagement and leadership development</li>
                    <li>✓ Policy innovation and governance excellence</li>
                    <li>✓ Crisis management and community response</li>
                    <li>✓ Social policing and public welfare</li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-8 border border-border shadow-soft">
                  <h3 className="text-xl font-bold text-primary mb-4">Academic & Training</h3>
                  <p className="text-muted-foreground mb-4">
                    Guest faculty opportunities and knowledge sharing:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>✓ Police academies and training institutes</li>
                    <li>✓ Universities and research institutions</li>
                    <li>✓ Government training programmes</li>
                    <li>✓ International exchange programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Impact */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Interested in Social Impact?</h3>
              <p className="mb-4 opacity-90">
                If you&apos;re passionate about youth empowerment, child protection, or community development, learn more about contributing to transformative initiatives.
              </p>
              <a
                href="/initiatives"
                className="inline-block px-4 py-2 bg-accent text-primary rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Explore Initiatives
              </a>
            </div>
          </div>
        </div>

        {/* Office Hours & Availability */}
        <div className="mt-20 bg-muted rounded-3xl p-12 md:p-16 border border-border">
          <h2 className="text-3xl font-bold text-primary text-center mb-8">Official Channels</h2>
          <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            For official communication, inquiries, and collaboration proposals, please use the Kerala Police official channels and address correspondence through the Police Headquarters.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg p-6 text-center">
              <Phone className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="font-semibold text-primary mb-2">Kerala Police</p>
              <p className="text-sm text-muted-foreground">Main Helpline for official inquiries</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <Mail className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="font-semibold text-primary mb-2">Official Email</p>
              <p className="text-sm text-muted-foreground">Through Kerala Police official channels</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center">
              <MapPin className="w-8 h-8 text-accent mx-auto mb-3" />
              <p className="font-semibold text-primary mb-2">Kerala Police HQ</p>
              <p className="text-sm text-muted-foreground">Thiruvananthapuram, Kerala</p>
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="mt-20 bg-white rounded-3xl p-12 md:p-16 border border-border shadow-soft">
          <h2 className="text-3xl font-bold text-primary text-center mb-6">Vision Statement</h2>
          <p className="text-xl text-muted-foreground text-center italic leading-relaxed">
            &quot;A commitment to systemic transformation, evidence-based governance, and inclusive leadership that serves all citizens with integrity, compassion, and measurable impact.&quot;
          </p>
          <p className="text-center text-muted-foreground mt-6">
            Every initiative is designed for sustainability, scalability, and community ownership—creating lasting positive change across India.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
