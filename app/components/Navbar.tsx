'use client';
import Link from 'next/link';
import { useState } from 'react';
import { List, X } from 'phosphor-react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">PV</div>
          <div>
            <h1 className="text-2xl font-bold text-blue-950">P. Vijayan</h1>
            <p className="text-xs text-blue-600 -mt-1">IPS • ADGP Intelligence, Kerala</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="hover:text-blue-700 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-700 transition">About</Link>
          <Link href="/leadership" className="hover:text-blue-700 transition">Leadership</Link>
          <Link href="/initiatives" className="hover:text-blue-700 transition">Initiatives</Link>
          <Link href="/achievements" className="hover:text-blue-700 transition">Achievements</Link>
        </div>

        <Link href="/contact" className="hidden md:flex bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-2xl text-sm font-semibold items-center gap-2 transition">
          Contact
        </Link>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X size={28} /> : <List size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-8 space-y-6 text-lg">
            <Link href="/" onClick={() => setMobileOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="/leadership" onClick={() => setMobileOpen(false)}>Leadership</Link>
            <Link href="/initiatives" onClick={() => setMobileOpen(false)}>Initiatives</Link>
            <Link href="/achievements" onClick={() => setMobileOpen(false)}>Achievements</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="bg-blue-700 text-white py-4 rounded-2xl text-center">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}