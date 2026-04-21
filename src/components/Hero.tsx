import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, BookOpen } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-height-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 transform origin-top-right -z-10" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-olive/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-2xl -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-olive/10 text-olive rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-olive"></span>
              </span>
              Pan-African Think Tank
            </div>
            
            <h1 className="text-5xl lg:text-7xl heading-serif leading-[1.1] mb-6 text-primary">
              Dialogue. <br />
              <span className="italic text-accent">Diplomacy.</span> <br />
              Development.
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Leadwood Centre for Diplomacy and Public Policy (LCDPP) is dedicated to promoting 
              transformative diplomacy and evidence-based policy for a resilient Africa.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => onNavigate('about')}
                className="btn-primary group"
              >
                Learn More About Us <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('training')}
                className="btn-outline border-secondary text-secondary hover:bg-secondary"
              >
                View Programs
              </button>
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8">
              {[
                { icon: Globe, label: 'Continental Reach' },
                { icon: Shield, label: 'Peace & Stability' },
                { icon: BookOpen, label: 'Policy Research' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <item.icon size={24} />
                  <span className="text-xs font-bold uppercase tracking-tighter text-primary/60">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:mt-12"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="/hu-chen-60XLoOgwkfA-unsplash.jpg" 
                alt="African Diplomacy"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Artistic border */}
            <div className="absolute -inset-4 border-2 border-accent/30 rounded-[2.5rem] -z-0 translate-x-4 translate-y-4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
