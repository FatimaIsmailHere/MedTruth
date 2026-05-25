import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlert, ShieldQuestion, ShieldCheck,
  AlertTriangle, HelpCircle, CheckCircle2,
} from 'lucide-react';

const CONFIG = {
  0: {
    label: 'Myth',
    color: 'rose',
    bgClass: 'bg-rose-50/70 from-rose-50/80 to-rose-50/30',
    borderClass: 'border-rose-100',
    textClass: 'text-rose-700',
    barClass: 'bg-rose-500',
    icon: ShieldAlert,
    badge: AlertTriangle,
  },
  1: {
    label: 'Uncertain',
    color: 'amber',
    bgClass: 'bg-amber-50/70 from-amber-50/80 to-amber-50/30',
    borderClass: 'border-amber-100',
    textClass: 'text-amber-700',
    barClass: 'bg-amber-500',
    icon: ShieldQuestion,
    badge: HelpCircle,
  },
  2: {
    label: 'Reliable',
    color: 'emerald',
    bgClass: 'bg-emerald-50/70 from-emerald-50/80 to-emerald-50/30',
    borderClass: 'border-emerald-100',
    textClass: 'text-emerald-700',
    barClass: 'bg-emerald-500',
    icon: ShieldCheck,
    badge: CheckCircle2,
  },
};

export default function ResultCard({ result }) {
  if (!result) return null;

  const c = CONFIG[result.label];
  const Icon = c.icon;
  const Badge = c.badge;
  const confidencePercent = Math.round(result.confidence * 100);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`mt-8 rounded-3xl border ${c.borderClass} bg-gradient-to-br ${c.bgClass} p-6 md:p-8 shadow-sm`}
      >
        {/* Top Row: Icon + Label */}
        <div className="flex items-center gap-4 mb-6">
          <div className={`w-12 h-12 rounded-2xl bg-surface border ${c.borderClass} flex items-center justify-center shadow-xs`}>
            <Icon className={`w-6 h-6 ${c.textClass}`} />
          </div>
          <div>
            <div className="text-xs text-surface-400 font-semibold font-display uppercase tracking-wide mb-0.5">Analysis Outcome</div>
            <div className={`text-xl font-bold font-display ${c.textClass}`}>{c.label}</div>
          </div>
          <div className={`ml-auto flex items-center gap-1.5 px-3 py-1 rounded-full border ${c.borderClass} bg-surface text-xs font-semibold ${c.textClass} shadow-xs`}>
            <Badge className="w-3.5 h-3.5" />
            <span>Label {result.label}</span>
          </div>
        </div>

        {/* Confidence Gauge */}
        <div className="mb-6 bg-surface rounded-2xl p-5 border border-surface-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-surface-500 font-display uppercase tracking-wide">Confidence Score</span>
            <span className={`text-base font-extrabold font-display ${c.textClass}`}>{confidencePercent}%</span>
          </div>
          <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
            <div
              className={`gauge-fill h-full rounded-full ${c.barClass}`}
              style={{ width: `${confidencePercent}%` }}
            />
          </div>
        </div>

        {/* Explanation */}
        <div className="bg-surface rounded-2xl p-5 border border-surface-200 shadow-xs mb-4">
          <div className="text-xs font-bold text-surface-800 font-display uppercase tracking-wider mb-2">AI Explanation</div>
          <p className="text-sm text-surface-600 leading-relaxed font-sans">{result.explanation}</p>
        </div>

        {/* Safety Note */}
        <div className="bg-surface rounded-2xl p-5 border border-surface-200 shadow-xs">
          <div className="text-xs font-bold text-surface-800 font-display uppercase tracking-wider mb-2">Safety Advisory</div>
          <p className="text-sm text-surface-600 leading-relaxed font-sans">{result.safetyNote}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
