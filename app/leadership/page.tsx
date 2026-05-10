"use client";
import Navbar from '../components/Navbar';

export default function Leadership() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center mb-16">Leadership Journey</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Key Positions Held</h3>
            <ul className="space-y-4 text-lg">
              <li>• Additional Director General of Police (Intelligence)</li>
              <li>• Commissioner of Police – Kochi, Kozhikode, Thrissur, Thiruvananthapuram</li>
              <li>• Director, Kerala Police Academy</li>
              <li>• First Director – Social Policing Division</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Major Contributions</h3>
            <p className="text-zinc-700">Solved India’s largest bank heist (Chelembra), launched KANSAF anti-narcotics force, pioneered Student Police Cadet Programme now running in 13,000+ schools across India.</p>
          </div>
        </div>
      </div>
    </>
  );
}