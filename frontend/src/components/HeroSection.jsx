import { motion } from 'framer-motion';
import { Shield, Sparkles, Activity, Zap } from 'lucide-react';

const STATS = [
  { icon: Activity, value: '92.31%', label: 'Accuracy' },
  { icon: Zap, value: '~50ms', label: 'Inference' },
  { icon: Shield, value: '3-Class', label: 'Detection' },
  { icon: Sparkles, value: '67M', label: 'Parameters' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-b from-primary-50/30 via-surface to-surface">
      {/* Background Ambient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: 'radial-gradient(circle, var(--orb-1) 0%, transparent 70%)',
            opacity: 'var(--orb-opacity)',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: 'radial-gradient(circle, var(--orb-2) 0%, transparent 70%)',
            opacity: 'var(--orb-opacity)',
            animation: 'float 12s ease-in-out infinite 2s',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary-100 bg-primary-50/70 text-xs font-semibold text-primary-700 mb-8 shadow-sm"
        >
          <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
          NLP-Powered Health Claim Detection
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-display text-surface-900 leading-tight tracking-tight mb-6"
        >
          Truth in Medicine,
          <br />
          <span className="gradient-text font-black">Verified by AI</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-surface-600 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          MedTruth leverages a highly specialized DistilBERT transformer model to categorize healthcare claims as{' '}
          <span className="text-rose-600 font-bold">Myth</span>,{' '}
          <span className="text-amber-600 font-bold">Uncertain</span>, or{' '}
          <span className="text-emerald-600 font-bold">Reliable</span> — safeguarding scientific accuracy.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="#checker"
            className="px-8 py-4 text-sm font-semibold text-white bg-primary-600 rounded-2xl hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-600/10 hover:-translate-y-0.5 transition-all duration-300 no-underline"
          >
            Check a Claim Now
          </a>
          <a
            href="#model"
            className="px-8 py-4 text-sm font-semibold text-surface-800 bg-surface hover:bg-surface-50 border border-surface-200 rounded-2xl hover:-translate-y-0.5 shadow-sm transition-all duration-300 no-underline"
          >
            Model Specs
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {STATS.map((stat, i) => (
            <div key={i} className="glass rounded-2xl p-5 hover:bg-surface transition-all duration-300 shadow-sm border border-slate-100 hover:shadow-md">
              <stat.icon className="w-5 h-5 text-primary-500 mx-auto mb-2" />
              <div className="text-2xl font-extrabold text-surface-900 font-display">{stat.value}</div>
              <div className="text-xs text-surface-500 font-medium mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
