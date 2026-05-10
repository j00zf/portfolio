"use client";
import Link from 'next/link';
import { useState } from 'react';
import { List, X, UserCircle } from 'phosphor-react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-gradient-to-br from-blue-700 to-indigo-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-inner">
            PV
          </div>
          <div>
            <h1 className="text-2xl font-bold text-blue-950 tracking-tight">P. Vijayan</h1>
            <p className="text-xs text-blue-600 -mt-1 font-medium">IPS • ADGP Intelligence, Kerala</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          <Link href="/" className="hover:text-blue-700 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-blue-700 transition-colors">About</Link>
          <Link href="/leadership" className="hover:text-blue-700 transition-colors">Leadership</Link>
          <Link href="/initiatives" className="hover:text-blue-700 transition-colors">Initiatives</Link>
          <Link href="/achievements" className="hover:text-blue-700 transition-colors">Achievements</Link>
        </nav>

        {/* CTA Button */}
        <Link 
          href="/contact" 
          className="hidden md:flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300"
        >
          <UserCircle size={20} />
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)} 
          className="md:hidden text-zinc-700"
        >
          {mobileOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-8 space-y-6 text-lg font-medium">
            <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-blue-700">Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-blue-700">About</Link>
            <Link href="/leadership" onClick={() => setMobileOpen(false)} className="hover:text-blue-700">Leadership</Link>
            <Link href="/initiatives" onClick={() => setMobileOpen(false)} className="hover:text-blue-700">Initiatives</Link>
            <Link href="/achievements" onClick={() => setMobileOpen(false)} className="hover:text-blue-700">Achievements</Link>
            
            <Link 
              href="/contact" 
              onClick={() => setMobileOpen(false)}
              className="bg-blue-700 text-white py-4 rounded-2xl text-center mt-4"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}