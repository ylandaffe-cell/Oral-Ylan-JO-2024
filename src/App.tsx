import { motion, useScroll, useTransform } from "motion/react";
import { 
  TreePine, 
  Wind, 
  CarFront, 
  Building2, 
  ArrowRight, 
  Globe2, 
  Zap, 
  Leaf,
  ShieldCheck,
  History
} from "lucide-react";
import { useRef } from "react";

const SectionHeader = ({ number, title, subtitle }: { number: string, title: string, subtitle: string }) => (
  <div className="flex flex-col mb-12 relative z-10">
    <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-emerald mb-3">Section {number}</span>
    <h2 className="text-5xl md:text-7xl mb-6 font-bold tracking-tighter text-white">{title}</h2>
    <p className="text-xl text-slate-400 max-w-2xl font-light leading-relaxed">{subtitle}</p>
  </div>
);

const MetricCard = ({ title, value, icon: Icon, description }: { title: string, value: string, icon: any, description: string }) => (
  <motion.div 
    whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
    className="glass p-8 rounded-[2rem] flex flex-col h-full transition-colors"
  >
    <div className="w-12 h-12 bg-brand-emerald/20 rounded-2xl flex items-center justify-center mb-6 text-brand-emerald border border-brand-emerald/30">
      <Icon size={24} />
    </div>
    <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-500 mb-2">{title}</h3>
    <div className="text-4xl font-black mb-4 text-white tracking-tighter">{value}</div>
    <p className="text-slate-400/80 text-sm leading-relaxed font-light">{description}</p>
  </motion.div>
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-brand-slate-950 overflow-x-hidden selection:bg-brand-emerald selection:text-white">
      {/* Mesh Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="mesh-blob top-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-emerald" />
        <div className="mesh-blob bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-blue-600" />
        <div className="mesh-blob top-[20%] right-[10%] w-[400px] h-[400px] bg-sky-500/50" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 backdrop-blur-md bg-white/5 border-b border-white/10 flex justify-between items-center transition-all">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-brand-emerald rounded-lg flex items-center justify-center shadow-lg shadow-brand-emerald/20">
            <div className="w-4 h-4 border-2 border-white rounded-sm rotate-45" />
          </div>
          <span className="font-bold text-xl tracking-tight uppercase text-white">Éclat <span className="text-brand-emerald text-sm italic">Vert</span></span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">
          <a href="#vision" className="hover:text-brand-emerald transition-colors">Vision</a>
          <a href="#impact" className="hover:text-brand-emerald transition-colors">Impact</a>
          <a href="#heritage" className="hover:text-brand-emerald transition-colors">Héritage</a>
        </div>
        <button className="px-6 py-2 bg-white text-brand-slate-950 rounded-xl text-[10px] uppercase font-black tracking-widest hover:bg-brand-emerald hover:text-white transition-all shadow-xl shadow-white/5">
          Rapport 2024
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex flex-col justify-center items-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-brand-emerald/10 border border-brand-emerald/20 rounded-full text-[10px] font-black text-brand-emerald uppercase tracking-[0.3em] mb-8"
          >
            Analyse : Métropoles Durables
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-[8vw] font-black text-white leading-[0.9] tracking-tighter mb-8"
          >
            L'Empreinte <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-emerald to-blue-400">Paris 2024</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
              Une immersion analytique dans l'impact environnemental des Jeux. 
              Entre promesses de neutralité et réalités urbaines durables.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center mt-12"
          >
            <button className="px-8 py-4 bg-brand-emerald text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-brand-emerald/80 transition-all shadow-2xl shadow-brand-emerald/30">
              Explorer les Données
            </button>
            <button className="px-8 py-4 glass text-white rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all">
              Le Rapport Complet
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/30"
        >
          <ArrowRight className="rotate-90" size={32} />
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-6 md:px-12 py-24">
        {/* Section 01: La Vision Frugale */}
        <section id="vision" className="mb-32">
          <SectionHeader 
            number="01" 
            title="La Frugalité Olympique" 
            subtitle="Contrairement aux éditions précédentes marquées par le gigantisme, Paris a misé sur une approche radicalement différente : faire mieux avec moins."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard 
              title="Empreinte Carbone"
              value="-50%"
              icon={Globe2}
              description="Réduction de l'empreinte carbone par rapport aux Jeux de Londres 2012 et Rio 2016."
            />
            <MetricCard 
              title="Infrastructures"
              value="95%"
              icon={Building2}
              description="Utilisation de sites déjà existants ou temporaires pour éviter les 'éléphants blancs'."
            />
            <MetricCard 
              title="Énergie"
              value="100%"
              icon={Zap}
              description="Électricité issue de sources renouvelables (éolien et solaire) pour l'ensemble des sites."
            />
            <MetricCard 
              title="Mobilité"
              value="100%"
              icon={CarFront}
              description="Sites accessibles en transports en commun ou à vélo via le réseau 'Olympistes'."
            />
          </div>
        </section>

        {/* Deep Dive Section */}
        <section className="mb-32">
          <div className="glass-dark text-slate-100 rounded-[3rem] p-8 md:p-20 overflow-hidden relative border border-white/5">
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-7xl mb-10 leading-[0.9] font-bold tracking-tighter text-white">Transformation <br/><span className="text-brand-emerald italic tracking-tight">& Biodiversité</span></h2>
                <div className="space-y-8 text-slate-400 font-light leading-relaxed text-lg">
                  <p>
                    Les Jeux de Paris 2024 ont été conçus comme un accélérateur de transition écologique pour la métropole. 
                    Le Village Olympique, situé en Seine-Saint-Denis, n'est pas seulement un lieu d'hébergement, 
                    c'est le prototype d'un éco-quartier du futur.
                  </p>
                  <p>
                    Matériaux biosourcés, géothermie, recyclage des eaux usées et îlots de fraîcheur : 
                    chaque bâtiment a été pensé pour résister aux canicules de 2050.
                  </p>
                </div>
                <div className="mt-12 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-2xl text-[10px] font-bold tracking-widest text-brand-emerald border border-white/10 uppercase">
                    <TreePine size={14} /> 9000 ARBRES PLANTÉS
                  </div>
                  <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-2xl text-[10px] font-bold tracking-widest text-brand-emerald border border-white/10 uppercase">
                    <Leaf size={14} /> 100% BOIS CERTIFIÉ
                  </div>
                </div>
              </div>
              <div className="relative h-[500px] lg:h-[650px] rounded-[2.5rem] overflow-hidden glass border border-white/10 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-emerald/10 to-transparent opacity-50" />
                  <div className="w-64 h-64 border border-brand-emerald/20 rounded-full animate-pulse" />
                  <div className="absolute font-mono text-[10px] uppercase tracking-[0.5em] text-brand-emerald/40 rotate-90">SYSTÈME URBAIN RÉSILIENT</div>
                </div>
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 p-12 gap-8">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div key={i} className={`flex items-center justify-center ${i % 3 === 0 ? 'col-start-2' : ''}`}>
                      <div className="w-1.5 h-1.5 bg-brand-emerald rounded-full shadow-[0_0_15px_#10b981]" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-10 left-10 right-10 p-8 glass-dark rounded-3xl border border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-brand-emerald font-black">Statut Héritage</span>
                  <div className="text-3xl font-black mt-2 text-white tracking-tighter">6,000 Nouveaux logements</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Le revers de la médaille */}
        <section id="impact" className="mb-32">
          <SectionHeader 
            number="02" 
            title="Défis Cruciaux" 
            subtitle="L'organisation d'un événement global impose des tensions environnementales immédiates pour des gains futurs."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-10 rounded-[2.5rem] hover:bg-white/[0.08] transition-colors group">
              <div className="flex items-center gap-3 mb-6 text-brand-emerald">
                <div className="p-3 bg-brand-emerald/10 rounded-xl group-hover:scale-110 transition-transform">
                  <Wind size={20} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-100">Qualité de l'air</h3>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Le renforcement temporaire des transports et les zones piétonnes ont réduit le CO2 local, 
                mais les chantiers massifs ont imposé une pression atmosphérique sur le long terme.
              </p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] hover:bg-white/[0.08] transition-colors group">
              <div className="flex items-center gap-3 mb-6 text-brand-emerald">
                <div className="p-3 bg-brand-emerald/10 rounded-xl group-hover:scale-110 transition-transform">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-100">Baignade Urbaine</h3>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Le plan baignade (1.4 Md€) a permis de rendre la Seine baignable pour la première fois en 100 ans. 
                Une prouesse écologique majeure mais d'une grande fragilité.
              </p>
            </div>
            <div className="glass p-10 rounded-[2.5rem] hover:bg-white/[0.08] transition-colors group">
              <div className="flex items-center gap-3 mb-6 text-brand-emerald">
                <div className="p-3 bg-brand-emerald/10 rounded-xl group-hover:scale-110 transition-transform">
                  <History size={20} />
                </div>
                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-100">Modèle Circulaire</h3>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                L'ambition de l'économie circulaire s'est heurtée à la logistique du gigantisme. 
                Le défi reste de transformer cet élan en politique pérenne.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="heritage" className="border-t border-white/5 pt-32 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-brand-emerald/10 blur-[100px] -z-10" />
          <h2 className="text-6xl md:text-[12rem] mb-12 font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 tracking-tighter uppercase leading-none">
            HÉritage
          </h2>
          <p className="max-w-3xl mx-auto text-2xl text-slate-400 mb-16 font-light leading-normal italic">
            "Le succès des Jeux de demain ne se mesurera plus à leur démesure, mais à leur discrétion et leur intégration dans le vivant."
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-white text-brand-slate-950 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-brand-emerald hover:text-white transition-all shadow-2xl shadow-white/5">
              Explorer les données
            </button>
            <button className="px-10 py-5 glass text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-white/10 transition-all border border-white/20">
              En savoir plus
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-10 glass-dark py-12 px-12 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500 border-t border-white/5 mt-32">
        <div>© 2024 Éclat Vert — Analyse Environnementale Métropolitaine</div>
        <div className="mt-6 md:mt-0 flex gap-12">
          <a href="#" className="hover:text-brand-emerald transition-colors">Documentation</a>
          <a href="#" className="hover:text-brand-emerald transition-colors">Données</a>
          <a href="#" className="hover:text-brand-emerald transition-colors">Confidentialité</a>
        </div>
      </footer>
    </div>
  );
}
