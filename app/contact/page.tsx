"use client";
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-5xl font-bold mb-8">Let’s Connect</h1>
        <p className="text-xl text-zinc-600 mb-12">For collaboration, speaking engagements, or knowledge sharing.</p>
        
        <div className="bg-white p-12 rounded-3xl shadow">
          <p className="text-2xl font-medium">P. Vijayan IPS</p>
          <p className="text-zinc-500 mt-2">Additional Director General of Police (Intelligence)</p>
          <p className="mt-8 text-lg">Kerala Police Headquarters, Thiruvananthapuram</p>
        </div>
      </div>
    </>
  );
}