import { motion } from 'motion/react';
import { Facebook, Linkedin, Twitter, Mail, ChevronRight } from 'lucide-react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6 bg-white p-2 rounded-lg inline-block">
              <img 
                src="/logo.png" 
                alt="LCDPP Logo" 
                className="h-16 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Dialogue. Diplomacy. Development. Shaping Africa's diplomatic future through transformative leadership and evidence-based policy.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Twitter size={18} /></a>
              <a href="https://www.linkedin.com/company/african-centre-for-diplomacy-and-public-policy/" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Linkedin size={18} /></a>
              <a href="https://web.facebook.com/profile.php?id=61576623303140" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-accent transition-colors"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-accent">Quick Links</h4>
            <ul className="space-y-4">
              {['African Union', 'United Nations', 'COMESA', 'ECOWAS', 'SADC'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center gap-2">
                    <ChevronRight size={14} className="text-accent" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-accent">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home')} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="text-gray-300 hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => onNavigate('leadership')} className="text-gray-300 hover:text-white transition-colors">Leadership</button></li>
              <li><button onClick={() => onNavigate('training')} className="text-gray-300 hover:text-white transition-colors">Programs</button></li>
              <li><button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-white transition-colors">Contact</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 uppercase tracking-wider text-accent">Newsletter</h4>
            <p className="text-sm text-gray-300 mb-4">Subscribe to receive our latest research and policy updates.</p>
            <form className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 outline-none focus:border-accent transition-colors"
              />
              <button type="submit" className="p-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors">
                <Mail size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:row items-center justify-between gap-4 text-gray-400 text-sm">
          <p>© {currentYear} Leadwood Centre for Diplomacy and Public Policy. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
