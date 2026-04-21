import { motion } from 'motion/react';
import { Target, Lightbulb, Compass, Share2 } from 'lucide-react';

export default function AboutContent() {
  const sections = [
    {
      title: 'Who we are',
      icon: Target,
      content: 'The Leadwood Centre for Diplomacy and Public Policy (LCDPP) is a Pan-African think tank committed to promoting transformative diplomacy, evidence-based policy, and sustainable development across the continent. Established to respond to the growing need for African-led solutions to African challenges, LCDPP acts as a hub for research, advocacy, dialogue, and capacity building in the fields of diplomacy, international relations, public policy, peacebuilding, and conflict resolution.'
    },
    {
      title: 'What we do',
      icon: Lightbulb,
      content: 'Our work is rooted in partnership and collaboration. We engage governments, international organizations, civil society, academic institutions, and humanitarian actors to foster inclusive and impactful policy conversations. Through training programs and capacity-building initiatives, we equip African diplomats, policy professionals, and public diplomacy practitioners with the skills and tools needed to navigate complex global systems.'
    },
    {
      title: 'Our Vision',
      icon: Compass,
      content: 'An Africa where diplomacy drives transformation, policy reflects the continent’s aspirations, and African voices shape global decisions with authority, unity, and purpose.'
    },
    {
      title: 'Our Mission',
      icon: Share2,
      content: 'To cultivate a new era of African diplomacy and public policy leadership by generating original research, nurturing dialogue across borders, empowering future thinkers and negotiators, and forging partnerships that prioritize African interests.'
    }
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl lg:text-6xl heading-serif text-primary mb-6">About the Centre</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We believe that Africa’s future depends on the strength of its institutions, 
            the quality of its policies, and the ability of its people to shape 
            and influence global governance frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {sections.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <section.icon size={24} />
              </div>
              <h2 className="text-2xl font-serif font-bold mb-4 text-primary">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </div>

        <section className="mt-20 p-12 rounded-[2rem] bg-primary text-white relative overflow-hidden">
          <div className="relative z-10 max-w-3xl">
             <h2 className="text-3xl heading-serif mb-6">Leading the Narrative</h2>
             <p className="text-lg text-white/80 leading-relaxed mb-8">
                From advocating for Africa’s voice in institutions like the United Nations and the African Union, to influencing global opinion during humanitarian crises, LCDPP is at the forefront of shaping a stronger, more resilient, and more unified continent.
             </p>
             <p className="font-serif italic text-accent text-xl">"Africa can and must lead in crafting its own narrative, solving its own problems, and securing its rightful place in the global order."</p>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/20 skew-x-12 transform translate-x-1/2 -z-0" />
        </section>
      </div>
    </div>
  );
}
