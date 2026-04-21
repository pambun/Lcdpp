import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Facebook, Linkedin, Twitter } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  onNavigate: (page: Page) => void;
  currentPage: Page;
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', action: () => onNavigate('home'), id: 'home' },
    { 
      name: 'About Us', 
      id: 'about',
      dropdown: [
        { name: 'Who we are', action: () => onNavigate('about') },
        { name: 'What we do', action: () => onNavigate('about') },
        { name: 'Vision & Mission', action: () => onNavigate('about') },
      ]
    },
    { name: 'Leadership', action: () => onNavigate('leadership'), id: 'leadership' },
    { 
      name: 'Training', 
      id: 'training',
      dropdown: [
        { name: 'Programs', action: () => onNavigate('training') },
        { name: 'Qualifications', action: () => onNavigate('training') },
        { name: 'Registration', action: () => onNavigate('training') },
      ]
    },
    { 
      name: 'Resources', 
      id: 'resources',
      dropdown: [
        { name: 'Newsletter', action: () => onNavigate('resources') },
        { name: 'Research Papers', action: () => onNavigate('resources') },
        { name: 'Press Statements', action: () => onNavigate('resources') },
      ]
    },
    { name: 'Careers', action: () => onNavigate('careers'), id: 'careers' },
    { name: 'Contact', action: () => onNavigate('contact'), id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      {/* Top Bar for Socials */}
      {!scrolled && (
        <div className="hidden lg:block border-b border-primary/10 mb-4 pb-4">
          <div className="container mx-auto px-6 flex justify-between items-center text-xs font-semibold tracking-widest text-primary/60">
            <div className="flex gap-4">
              <span>Nairobi - Kenya</span>
              <span>•</span>
              <span>Mogadishu - Somalia</span>
            </div>
            <div className="flex gap-4 items-center">
               <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Twitter size={14} /></a>
               <a href="https://www.linkedin.com/company/african-centre-for-diplomacy-and-public-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin size={14} /></a>
               <a href="https://web.facebook.com/profile.php?id=61576623303140" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Facebook size={14} /></a>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div 
             onClick={() => onNavigate('home')} 
             className="cursor-pointer group flex items-center gap-3"
          >
            <img 
               src="/logo.png" 
               alt="LCDPP Logo" 
               className="h-12 w-auto object-contain"
               referrerPolicy="no-referrer"
               onError={(e) => {
                 (e.target as HTMLImageElement).style.display = 'none';
                 (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
               }}
            />
            <div className="hidden group-hover:flex items-center gap-2">
               <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-lg text-white font-bold text-xl font-display">L</div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold leading-none tracking-tight text-primary">LCDPP</h1>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">Diplomacy & Policy</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button 
                  onClick={() => item.action ? item.action() : null}
                  className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors ${currentPage === item.id ? 'text-accent' : 'text-primary hover:text-accent'}`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown size={14} />}
                </button>

                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-xl border border-gray-100 overflow-hidden py-2"
                    >
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => { sub.action(); setActiveDropdown(null); }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-paper hover:text-accent transition-colors"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <button 
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {menuItems.map((item) => (
                <div key={item.id}>
                  <button 
                    onClick={() => { 
                      if(item.action) { item.action(); setIsOpen(false); }
                      else { setActiveDropdown(activeDropdown === item.id ? null : item.id); }
                    }}
                    className="w-full text-left flex justify-between items-center text-lg font-serif font-bold text-primary"
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={20} className={activeDropdown === item.id ? 'rotate-180 transition-transform' : ''} />}
                  </button>
                  {item.dropdown && activeDropdown === item.id && (
                    <div className="mt-4 pl-4 space-y-4 border-l-2 border-accent/20">
                      {item.dropdown.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={() => { sub.action(); setIsOpen(false); }}
                          className="block text-gray-600 font-medium"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
