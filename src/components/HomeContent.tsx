import { motion } from 'motion/react';
import { BookText, GraduationCap, Handshake } from 'lucide-react';

import { Page } from '../types';

interface HomeContentProps {
  onNavigate: (page: Page) => void;
}

export default function HomeContent({ onNavigate }: HomeContentProps) {
  const work = [
    {
      title: 'Policy Research & Publications',
      description: 'Groundbreaking analysis on African diplomacy, governance and international relations published quarterly.',
      icon: BookText
    },
    {
      title: 'Diplomatic Capacity Building',
      description: 'Executive training programs for African foreign service officers and multilateral negotiators.',
      icon: GraduationCap
    },
    {
      title: 'Peace & Mediation Support',
      description: 'Conflict resolution frameworks tailored to African contexts through our expert networks.',
      icon: Handshake
    }
  ];

  const publications = [
    {
      title: 'Regional Economic Communities in Continental Diplomacy',
      description: 'Understanding regional interplay helps shape policies that strengthen Africa’s voice global negotiations.'
    },
    {
      title: 'Climate-Induced Migration Responses',
      description: 'Supporting evidence-based policies that protect vulnerable populations and enhance resilience.'
    },
    {
      title: 'Digital Diplomacy and Global Engagement',
      description: 'Understanding the risks and opportunities of digital tools for Africa’s assertive presence online.'
    }
  ];

  return (
    <div>
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl heading-serif mb-8 text-primary">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              The Leadwood Centre for Diplomacy and Public Policy (LCDPP) is a Pan-African think tank committed to promoting transformative diplomacy, evidence-based policy, and sustainable development across the continent. Established to respond to the growing need for African-led solutions to African challenges, LCDPP acts as a hub for research, advocacy, dialogue, and capacity building.
            </p>
            <div className="w-24 h-1 bg-accent mx-auto" />
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section className="py-24 bg-paper relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Impact</span>
            <h2 className="text-4xl heading-serif mt-2 text-primary">Shaping Africa’s Diplomatic Future</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {work.map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl border border-primary/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Publications */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:row items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl heading-serif text-primary">Latest Publications</h2>
              <p className="text-gray-600 mt-2">Expert perspectives on the evolving landscape of African policy.</p>
            </div>
            <button 
              onClick={() => onNavigate('resources')}
              className="btn-outline"
            >
              View All Research
            </button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {publications.map((item, i) => (
              <div 
                key={i} 
                onClick={() => onNavigate('resources')}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-2xl overflow-hidden mb-6">
                   <img 
                      src={`https://picsum.photos/seed/pub${i}/800/450`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer"
                   />
                   <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-primary">
                     Quarterly Review
                   </div>
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-accent transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{item.description}</p>
                <div className="mt-4 flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest">
                  Read More <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Teaser */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-400 mb-10">Our Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="h-16 w-32 flex items-center justify-center">
              <img src="/au.png" alt="African Union" className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="h-12 w-32 flex items-center justify-center">
              <img src="/un.png" alt="United Nations" className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="h-16 w-32 flex items-center justify-center">
              <img src="/comesa.png" alt="COMESA" className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
            </div>
            <div className="h-12 w-32 flex items-center justify-center">
              <img src="/sadc.png" alt="SADC" className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ArrowRight({ size }: { size: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
  );
}
