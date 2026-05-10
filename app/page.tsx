"use client";
import Header from './components/Header';
import Link from 'next/link';
import { ArrowRight, Medal, Users, Target } from 'phosphor-react';

export default function Home() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-blue-950 via-indigo-900 to-blue-900 text-white flex items-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:40px_40px]"></div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-3xl text-sm font-medium">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              1999 Batch IPS Officer
            </div>

            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tighter">
              P. Vijayan<br />
              <span className="text-blue-300">IPS</span>
            </h1>

            <p className="text-2xl md:text-3xl text-blue-100 font-light">
              Additional Director General of Police (Intelligence), Kerala
            </p>

            <p className="text-lg max-w-lg text-blue-200">
              Visionary Police Officer | System Reformer | Social Innovator<br />
              Turning Challenges into Opportunities for Nation Building
            </p>

            <div className="flex flex-wrap gap-4">
              <Link 
                href="/about"
                className="bg-white text-blue-950 hover:bg-blue-50 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 text-lg group transition"
              >
                Know My Journey
                <ArrowRight size={24} className="group-hover:translate-x-1 transition" />
              </Link>

              <Link 
                href="/initiatives"
                className="border border-white/60 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 text-lg transition"
              >
                Explore Initiatives
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-bold">26+</div>
                <div className="text-blue-300 text-sm">Years of Service</div>
              </div>
              <div>
                <div className="text-4xl font-bold">1M+</div>
                <div className="text-blue-300 text-sm">Youth Impacted</div>
              </div>
              <div>
                <div className="text-4xl font-bold">150+</div>
                <div className="text-blue-300 text-sm">Child Friendly Stations</div>
              </div>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src="https://picsum.photos/id/64/600/720" 
                alt="P. Vijayan IPS"
                className="w-80 md:w-[420px] rounded-3xl shadow-2xl border-8 border-white/20 object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-950 p-6 rounded-3xl shadow-xl max-w-[260px]">
                <p className="italic text-base">"I represent Positivity and Possibilities (Pos-Poss)"</p>
                <p className="text-xs mt-4 text-right font-medium">- P. Vijayan IPS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 animate-bounce">
          <ArrowRight size={32} className="rotate-90 text-white/60" />
        </div>
      </section>
    </>
  );
}