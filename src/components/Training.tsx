import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Clock, Users, CheckCircle2 } from 'lucide-react';

export default function TrainingContent() {
  const programs = [
    {
      title: 'Strategic Communication & Digital Diplomacy',
      description: 'Empowers diplomats and policy actors with modern skills to navigate the digital landscape, craft compelling narratives, and manage online diplomacy.',
      duration: '4 Weeks',
      participants: '30 per Cohort'
    },
    {
      title: 'Policy Research, Analysis & Advisory',
      description: 'Designed for professionals to build expertise in conducting evidence-based research, developing policy briefs, and providing actionable recommendations.',
      duration: '6 Weeks',
      participants: '25 per Cohort'
    },
    {
      title: 'Conflict Prevention & Regional Peacebuilding',
      description: 'Hands-on training focusing on practical skills in early warning systems, mediation, and culturally informed diplomatic solutions.',
      duration: '8 Weeks',
      participants: '20 per Cohort'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl lg:text-6xl heading-serif text-primary mb-6">Capacity Building</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            At the Leadwood Centre for Diplomacy and Public Policy (LCDPP), we believe that Africa’s transformation 
            begins with empowered people and institutions.
          </p>
        </div>

        <section className="grid lg:grid-cols-3 gap-8">
           {programs.map((prog, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col h-full shadow-sm"
             >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">{prog.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow">{prog.description}</p>
                
                <div className="space-y-4 mb-8 pt-6 border-t border-gray-50">
                   <div className="flex items-center gap-3 text-sm text-gray-500">
                     <Clock size={16} /> {prog.duration}
                   </div>
                   <div className="flex items-center gap-3 text-sm text-gray-500">
                     <Users size={16} /> {prog.participants}
                   </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 btn-primary py-3 px-0 text-sm">Register</button>
                  <button className="flex-1 btn-outline py-3 px-0 text-sm">Brochure</button>
                </div>
             </motion.div>
           ))}
        </section>

        <section className="mt-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="bg-primary p-12 rounded-[2.5rem] text-white">
                <h2 className="text-3xl heading-serif mb-8">Program Qualifications</h2>
                <ul className="space-y-6">
                   {[
                     'Degree in International Relations, Public Policy, or related fields',
                     'Proven experience in diplomatic or humanitarian sectors',
                     'Commitment to Pan-African development values',
                     'Fluency in English (additional AU languages are an edge)'
                   ].map((item, i) => (
                     <li key={i} className="flex gap-4 items-start">
                       <CheckCircle2 className="mt-1 shrink-0" size={20} />
                       <span className="text-white/80">{item}</span>
                     </li>
                   ))}
                </ul>
                <div className="mt-12 p-6 bg-white/5 rounded-2xl border border-white/10">
                   <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-widest">Upcoming Enrollment</p>
                   <p className="text-2xl font-serif">September 2026 Cohort</p>
                   <button className="mt-6 w-full py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-all">Apply Now</button>
                </div>
             </div>

             <div>
                <h2 className="text-4xl heading-serif text-primary mb-6">Expert-Led Instruction</h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                   Our training programs are facilitated by seasoned diplomats, renowned scholars, and policy practitioners 
                   who bring decades of practical experience from international organizations like the African Union and United Nations.
                </p>
                <div className="grid grid-cols-2 gap-6">
                   <div className="p-6 bg-white rounded-2xl border border-gray-100">
                      <div className="text-3xl font-display font-bold text-primary mb-1">500+</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-widest">Alumni</div>
                   </div>
                   <div className="p-6 bg-white rounded-2xl border border-gray-100">
                      <div className="text-3xl font-display font-bold text-primary mb-1">15+</div>
                      <div className="text-xs font-bold text-accent uppercase tracking-widest">Active Countries</div>
                   </div>
                </div>
             </div>
          </div>
        </section>
      </div>
    </div>
  );
}
