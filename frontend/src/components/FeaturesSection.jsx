import { motion } from 'framer-motion';
import {
  Brain, ShieldCheck, Clock, Globe,
  Microscope, BookOpen, Lock, Sparkles,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Brain,
    title: 'Deep NLP Analysis',
    description: 'Powered by DistilBERT transformer architecture for contextual understanding of medical language.',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
  {
    icon: ShieldCheck,
    title: '3-Class Detection',
    description: 'Classifies claims into Myth, Uncertain, or Reliable with detailed confidence scoring.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
  },
  {
    icon: Clock,
    title: 'Real-Time Inference',
    description: 'Analyze health claims in approximately 50ms per claim, even on CPU-only hardware.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
  },
  {
    icon: Globe,
    title: 'Multi-Domain Coverage',
    description: 'Trained on general medical, health myth, and COVID-19 datasets for broad misinformation detection.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
  },
  {
    icon: Microscope,
    title: 'Evidence-Based',
    description: 'Model explanations reference established scientific consensus and health organization guidelines.',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
  {
    icon: BookOpen,
    title: 'Smart Preprocessing',
    description: 'Auto-detects columns, normalizes labels, removes duplicates, and validates data quality automatically.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
  },
  {
    icon: Lock,
    title: 'Safety Guardrails',
    description: 'Every prediction includes medical disclaimers and recommendations to consult healthcare professionals.',
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-100',
  },
  {
    icon: Sparkles,
    title: 'Production Ready',
    description: 'Lightweight 268MB single model with 92.31% accuracy, optimized for real-world serving.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-28 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-100 bg-primary-50/50 text-xs font-semibold text-primary-600 mb-4 tracking-wide uppercase font-display">
            <Sparkles className="w-3.5 h-3.5" />
            Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-surface-900 mb-3 tracking-tight">
            AI Engine Features
          </h2>
          <p className="text-surface-500 max-w-lg mx-auto text-sm sm:text-base font-sans">
            Engineered with deep healthcare intelligence, high serving performance, and rigorous clinical safety in mind.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="bg-surface border border-surface-200/60 rounded-2xl p-5 hover:shadow-md transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-xl ${feat.bgColor} border ${feat.borderColor} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-xs`}>
                <feat.icon className={`w-5 h-5 ${feat.color}`} />
              </div>
              <h3 className="text-sm font-bold font-display text-surface-900 mb-2">{feat.title}</h3>
              <p className="text-xs text-surface-500 leading-relaxed font-sans">{feat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
