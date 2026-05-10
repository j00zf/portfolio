"use client";
import Navbar from '../components/Navbar';
import { CheckCircle } from 'phosphor-react';

export default function Initiatives() {
  const initiatives = [
    { title: "Student Police Cadets (SPC)", desc: "1 Million+ students | 13,000+ schools | International recognition" },
    { title: "Punyam Poonkavanam", desc: "Praised by Hon’ble Prime Minister in Mann Ki Baat" },
    { title: "Children and Police (CAP)", desc: "150+ Child-Friendly Police Stations" },
    { title: "Project HOPE", desc: "4200+ students reintegrated into education" },
    { title: "KANSAF & DANSAF", desc: "Highly successful anti-narcotics operations" },
    { title: "Feed-A-Stomach", desc: "1 Million+ meals distributed during COVID-19" },
  ];

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center mb-16">Signature Initiatives</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initiatives.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl card-hover border border-zinc-100">
              <CheckCircle size={42} className="text-emerald-600 mb-6" />
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
              <p className="text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}