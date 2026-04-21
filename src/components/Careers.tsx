import { motion } from 'motion/react';
import { Briefcase, Heart, Lightbulb } from 'lucide-react';

export default function CareersContent() {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl heading-serif text-primary mb-6">Careers</h1>
          <p className="text-xl text-gray-600 mb-8">
            Join a collective of visionary researchers, mediators, and policy experts 
            working to build a stronger Africa.
          </p>
          <div className="flex gap-4">
             <div className="px-4 py-2 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest animate-pulse">
               Actively Hiring
             </div>
          </div>
        </div>

        <section className="grid lg:grid-cols-3 gap-8 mb-20">
           {[
             { title: 'Research Fellows', icon: Lightbulb, desc: 'Lead original research on international conflict and regional unit.' },
             { title: 'Project Managers', icon: Briefcase, desc: 'Coordinate our continental capacity-building programs.' },
             { title: 'Policy Interns', icon: Heart, desc: 'Passionate emerging thinkers looking to shape the future of African policy.' },
           ].map((job, i) => (
             <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm">
                <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center mb-8">
                  <job.icon size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{job.title}</h3>
                <p className="text-gray-600 mb-8">{job.desc}</p>
                <button className="text-primary font-bold uppercase tracking-widest text-xs border-b-2 border-accent pb-1">View Role</button>
             </div>
           ))}
        </section>

        <section className="bg-primary text-white p-12 rounded-[2.5rem] relative overflow-hidden">
           <div className="relative z-10 text-center max-w-2xl mx-auto">
              <h2 className="text-3xl heading-serif mb-6">Don't see a fit?</h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed">
                We are always looking for passionate partners and experts. 
                Send your CV and a brief cover letter to our talent team at 
                <span className="text-accent underline decoration-2 underline-offset-4 ml-2">careers@lcdpp.org</span>
              </p>
              <button className="btn-primary bg-white text-primary hover:bg-accent hover:text-white">General Application</button>
           </div>
           <div className="absolute top-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-0" />
           <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -z-0" />
        </section>
      </div>
    </div>
  );
}
