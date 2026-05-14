import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">About</h3>
            <p className="text-sm opacity-90 leading-relaxed">
              P. Vijayan IPS - Additional Director General of Police (Intelligence), Kerala. A visionary leader dedicated to systemic reform and social innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition-opacity">
                  Biography
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="opacity-90 hover:opacity-100 transition-opacity">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="opacity-90 hover:opacity-100 transition-opacity">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/recognition" className="opacity-90 hover:opacity-100 transition-opacity">
                  Recognition
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>Official Kerala Police Portal</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <span>Professional Network</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-sm text-center opacity-75">
            © {currentYear} P. Vijayan IPS. All rights reserved. | Official Profile
          </p>
        </div>
      </div>
    </footer>
  );
}
