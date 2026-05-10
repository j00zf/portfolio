import Navbar from '../components/Navbar';

export default function About() {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold text-center mb-4">About P. Vijayan IPS</h1>
        <p className="text-center text-xl text-zinc-600 max-w-3xl mx-auto">1999-batch IPS Officer | Passionate Solution Provider</p>

        <div className="mt-16 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-8">
            <p className="text-lg leading-relaxed text-zinc-700">
              Rising from modest beginnings, Mr. P. Vijayan has become one of India’s most respected and innovative police leaders. 
              With over 26 years of service, he has transformed policing into a citizen-centric, empathetic, and solution-oriented service.
            </p>
            <blockquote className="border-l-4 border-blue-600 pl-6 italic text-xl">
              “I represent Positivity and Possibilities (Pos-Poss)”
            </blockquote>
          </div>

          <div className="md:col-span-7">
            <h3 className="text-2xl font-semibold mb-6">Leadership Philosophy</h3>
            <div className="grid grid-cols-2 gap-6">
              {['Systemic Innovation', 'Gender & Youth Inclusivity', 'Evidence-Based Impact', 'Replicable Models', 'Stakeholder Ownership', 'India First'].map((item, i) => (
                <div key={i} className="bg-zinc-50 p-6 rounded-3xl card-hover">
                  <span className="text-blue-600 text-2xl">•</span>
                  <p className="font-medium mt-2">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}