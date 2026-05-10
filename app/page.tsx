"use client";

import Navbar from './components/Navbar';
import { ArrowRight } from 'phosphor-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white flex items-center hero-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#ffffff15_0%,transparent_50%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 pt-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full text-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Serving Kerala &amp; Nation
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              P. Vijayan<br />IPS
            </h1>
            <p className="text-3xl text-blue-100">Additional Director General of Police (Intelligence)</p>
            <p className="text-xl max-w-lg text-blue-200">Visionary Police Officer | System Reformer | Social Innovator</p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/about" className="bg-white text-blue-950 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 text-lg transition">
                My Journey
                <ArrowRight size={24} />
              </Link>
              <Link href="/initiatives" className="border border-white/70 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 text-lg transition">
                Signature Initiatives
              </Link>
            </div>

            <div className="flex gap-12 pt-10">
              <div>
                <div className="text-5xl font-bold">26+</div>
                <div className="text-blue-200">Years of Distinguished Service</div>
              </div>
              <div>
                <div className="text-5xl font-bold">1M+</div>
                <div className="text-blue-200">Youth Impacted</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src="https://res.cloudinary.com/demo/image/upload/v1/p-vijayan-ips" 
              alt="P. Vijayan IPS"
              className="w-80 md:w-96 rounded-3xl shadow-2xl border-8 border-white/30"
            />
          </div>
        </div>
      </section>
    </>
  );
}