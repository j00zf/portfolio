import Navbar from '../components/Navbar';

export default function Achievements() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center mb-16">Recognitions &amp; Awards</h1>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl">President’s Police Medal (2015 &amp; 2025)</div>
            <div className="bg-white p-8 rounded-3xl">Union Home Minister’s Utkrishta Seva Medal (2021)</div>
            <div className="bg-white p-8 rounded-3xl">Kerala CM’s Public Policy Innovation Award (2014, 2017)</div>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-3xl">CNN-IBN Indian of the Year (Popular Choice) 2014</div>
            <div className="bg-white p-8 rounded-3xl">Edward S. Mason Fellow, Harvard Kennedy School</div>
            <div className="bg-white p-8 rounded-3xl">Global Tobacco Control Leadership, Johns Hopkins</div>
          </div>
        </div>
      </div>
    </>
  );
}