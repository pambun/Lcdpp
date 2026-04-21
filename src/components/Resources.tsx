import { motion } from 'motion/react';
import { FileText, Newspaper, Mic2, Tv2, Calendar } from 'lucide-react';

export default function ResourcesContent() {
  const resourceCategories = [
    { name: 'Newsletter', icon: Newspaper, count: '12 Issues', color: 'bg-blue-500' },
    { name: 'Research Papers', icon: FileText, count: '45 Papers', color: 'bg-emerald-500' },
    { name: 'Press Statements', icon: Mic2, count: '28 Statements', color: 'bg-amber-500' },
    { name: 'Press Releases', icon: Tv2, count: '15 Releases', color: 'bg-purple-500' },
    { name: 'Media Stories', icon: Calendar, count: '64 Stories', color: 'bg-rose-500' },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl lg:text-6xl heading-serif text-primary mb-6">Resources & Insights</h1>
          <p className="text-xl text-gray-600">
            Access our repository of quarterly research, policy briefs, and institutional updates 
            that shape the future of African diplomacy.
          </p>
        </div>

        <section className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
           {resourceCategories.map((cat, i) => (
             <motion.div
               key={i}
               whileHover={{ y: -5 }}
               className="p-8 rounded-3xl bg-white border border-gray-100 flex flex-col items-center text-center shadow-sm cursor-pointer hover:shadow-md transition-all"
             >
                <div className={`w-14 h-14 ${cat.color} text-white rounded-full flex items-center justify-center mb-6`}>
                  <cat.icon size={28} />
                </div>
                <h3 className="font-serif font-bold text-primary mb-2">{cat.name}</h3>
                <p className="text-xs font-bold text-accent uppercase tracking-widest">{cat.count}</p>
             </motion.div>
           ))}
        </section>

        <section className="bg-paper p-8 lg:p-16 rounded-[2.5rem]">
           <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
              <div className="max-w-2xl text-center md:text-left">
                 <h2 className="text-3xl lg:text-4xl heading-serif mb-4">Research & Publications</h2>
                 <p className="text-gray-600">Explore our peer-reviewed studies and policy briefs on continental integration, regional security, and diplomacy.</p>
              </div>
           </div>

           <div className="grid gap-8">
             {[
               {
                 title: "The Role of Regional Economic Communities (RECs) in Africa’s Continental Diplomacy",
                 description: "Understanding the interplay between regional diplomacy and continental unity helps shape policies that strengthen Africa’s voice in global negotiations, enhance conflict resolution mechanisms, and promote cohesive foreign policy agendas."
               },
               {
                 title: "Public Policy Responses to Climate-Induced Migration and Conflict in Africa",
                 description: "With climate change emerging as a key driver of instability in Africa, this research supports evidence-based policies that protect vulnerable populations and enhance resilience through diplomatic and policy coordination at national and regional levels."
               },
               {
                 title: "The Influence of Digital Diplomacy on Africa’s Global Engagement",
                 description: "As global diplomacy increasingly shifts online, understanding the effectiveness, opportunities, and risks of digital diplomacy is crucial for Africa to assert its presence, counter misinformation, and drive proactive engagement in global affairs."
               }
             ].map((pub, i) => (
               <motion.div 
                 key={i} 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1 }}
                 viewport={{ once: true }}
                 className="group p-8 bg-white rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center md:items-start gap-8 hover:shadow-xl hover:border-accent/20 transition-all cursor-pointer"
               >
                  <div className="w-20 h-20 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                     <FileText size={40} />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                     <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
                        <span className="px-3 py-1 bg-paper text-primary text-[10px] font-bold uppercase tracking-widest rounded-full border border-primary/5">Research Paper</span>
                        <span className="px-3 py-1 bg- paper text-accent text-[10px] font-bold uppercase tracking-widest rounded-full border border-accent/5">April 2024</span>
                     </div>
                     <h3 className="text-xl lg:text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors leading-snug">{pub.title}</h3>
                     <p className="text-gray-600 leading-relaxed max-w-4xl">{pub.description}</p>
                     
                     <div className="mt-8 flex items-center justify-center md:justify-start gap-6">
                        <button className="text-sm font-bold text-primary uppercase tracking-widest border-b-2 border-accent/30 hover:border-accent transition-all pb-1">Download PDF</button>
                        <button className="text-sm font-bold text-primary uppercase tracking-widest border-b-2 border-accent/30 hover:border-accent transition-all pb-1">Read Online</button>
                     </div>
                  </div>
               </motion.div>
             ))}
           </div>
        </section>
      </div>
    </div>
  );
}
