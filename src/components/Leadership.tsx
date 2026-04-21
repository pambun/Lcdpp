import { motion } from 'motion/react';
import { Leader } from '../types';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function LeadershipContent() {
  const boardMembers: Leader[] = [
    {
      name: 'Isaac Antwi-Boasiako, MPRII',
      title: 'Board of Directors',
      photo: 'https://lh3.googleusercontent.com/d/1Io5g5NqXci8CDckAmCOt0rZN0jKwXami',
      bio: 'Isaac Antwi-Boasiako, MPRII, is a PhD candidate in International Communications, specialising in Public Diplomacy and Public Relations. He holds multiple degrees including an MA in International Relations from the University of Plymouth and a Postgraduate Diploma in Higher Education from University College Cork. With extensive experience in international relations and strategic communications, Isaac has published widely in peer-reviewed journals. He is currently an Assistant Lecturer at the School of Media, Technological University Dublin.',
      category: 'board'
    },
    {
      name: 'Abdirahman Abdi Ahmed',
      title: 'Founder & Board Member',
      photo: 'https://lh3.googleusercontent.com/d/1kBX_mHTBMS0QIs00aIOWEShCL8ZuX7OO',
      bio: 'Seasoned public servant, development expert, and humanitarian leader committed to peace, inclusive governance, and sustainable development. He is the founder of the Africa Center for Diplomacy and Public Policy and currently serves as Minister of Planning, Investment, and International Cooperation in Jubaland. He holds a Master’s in Peace, Governance, and Development and is an alumnus of leadership and diplomacy programs in Kenya, France, and Poland.',
      category: 'board'
    },
    {
      name: 'Patrick Maluki, PhD',
      title: 'Board Member',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2574&auto=format&fit=crop',
      bio: 'Accomplished scholar and consultant in diplomacy and international conflict management. He is an Associate Professor and Director at the Institute of Diplomacy and International Studies, University of Nairobi. Dr. Maluki chairs the Council of the Foreign Service Academy and co-chairs the Sustainable Development Solutions Network–Kenya Chapter. With over 20 years of experience, he has trained diplomats and policy leaders across Africa.',
      category: 'board'
    }
  ];

  const executiveTeam = [
    { name: 'Elias Pande', title: 'Executive Director', role: 'Executive' },
    { name: 'Arshad Mohamed', title: 'Director Operations', role: 'Director' },
    { name: 'Beth Muigai', title: 'Director, Communications and Events', role: 'Director' },
    { name: 'Zahra Abdi', title: 'Director, Programs', role: 'Director' },
    { name: 'TBA', title: 'Director Partnerships and Collaborations', role: 'Director' },
    { name: 'Sheila Wafula', title: 'Finance Lead', role: 'Management' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-20">
          <h1 className="text-5xl lg:text-6xl heading-serif text-primary mb-6">Leadership</h1>
          <p className="text-xl text-gray-600">
            Our leadership team comprises visionary experts dedicated to shaping Africa's narrative
            through diplomacy and strategic policy leadership.
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-12">Board of Directors</h2>
            <div className="grid gap-12">
              {boardMembers.map((leader, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="grid lg:grid-cols-12 gap-12 items-start p-8 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm"
                >
                  <div className="lg:col-span-4 aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-paper">
                    <img 
                       src={leader.photo} 
                       alt={leader.name} 
                       className="w-full h-full object-cover"
                       referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="lg:col-span-8">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-serif font-bold text-primary">{leader.name}</h3>
                        <p className="text-accent font-semibold">{leader.title}</p>
                      </div>
                      <div className="flex gap-3">
                         <a 
                           href="https://www.linkedin.com/company/african-centre-for-diplomacy-and-public-policy/" 
                           target="_blank" 
                           rel="noreferrer"
                           className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all"
                         >
                           <Linkedin size={18} />
                         </a>
                         <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent transition-all"><ExternalLink size={18} /></button>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-8">
                      {leader.bio}
                    </p>
                    <button className="text-primary font-bold uppercase tracking-wider text-xs border-b-2 border-accent pb-1">Full Profile</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="py-20 bg-paper -mx-6 px-6">
            <div className="container mx-auto">
               <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-accent mb-12 text-center md:text-left">Executive & Management Team</h2>
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {executiveTeam.map((p, i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5 }}
                      className="bg-white p-8 rounded-3xl border border-gray-100 flex flex-col items-center text-center group transition-all"
                    >
                       <div className="w-24 h-24 rounded-full bg-primary/5 mb-6 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all overflow-hidden relative">
                         <img 
                           src={`https://api.dicebear.com/7.x/initials/svg?seed=${p.name}`} 
                           alt={p.name}
                           className="w-full h-full rounded-full group-hover:scale-110 transition-transform"
                         />
                       </div>
                       <h4 className="text-xl font-serif font-bold text-primary mb-1 underline-offset-4 group-hover:underline decoration-accent">{p.name}</h4>
                       <p className="text-accent font-bold text-xs uppercase tracking-widest">{p.title}</p>
                       <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                         <button className="text-gray-400 hover:text-primary transition-colors"><Mail size={16} /></button>
                         <a 
                           href="https://www.linkedin.com/company/african-centre-for-diplomacy-and-public-policy/" 
                           target="_blank"
                           rel="noreferrer"
                           className="text-gray-400 hover:text-primary transition-colors"
                         >
                           <Linkedin size={16} />
                         </a>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
