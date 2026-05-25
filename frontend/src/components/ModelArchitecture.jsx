import { motion } from 'framer-motion';
import { Cpu, Layers, Gauge, Zap, Box, Hash } from 'lucide-react';

const SPECS = [
  { icon: Cpu, label: 'Base Architecture', value: 'DistilBERT', sub: 'distilbert-base-uncased' },
  { icon: Box, label: 'Model Size', value: '268 MB', sub: '67M parameters' },
  { icon: Zap, label: 'Optimization', value: '60% Faster', sub: 'vs standard BERT' },
  { icon: Layers, label: 'Footprint', value: '40% Smaller', sub: 'vs standard BERT' },
  { icon: Hash, label: 'Context Length', value: '128 Tokens', sub: 'input max length' },
  { icon: Gauge, label: 'Latency', value: '~50ms', sub: 'inference speed per claim' },
];

const COMPARISON = [
  { aspect: 'Parameters', bert: '110M', distilbert: '67M' },
  { aspect: 'Layers', bert: '12', distilbert: '6' },
  { aspect: 'Speed', bert: 'Baseline', distilbert: '60% Faster' },
  { aspect: 'Size', bert: '440 MB', distilbert: '268 MB' },
  { aspect: 'Accuracy Retained', bert: '100%', distilbert: '97% Retained' },
];

export default function ModelArchitecture() {
  return (
    <section id="model" className="py-28 px-4 bg-surface-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-100 bg-primary-50/50 text-xs font-semibold text-primary-600 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Specs Sheet
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-surface-900 mb-3 tracking-tight">
            Model Architecture
          </h2>
          <p className="text-surface-500 max-w-lg mx-auto text-sm sm:text-base font-sans">
            Built on a distilled language representation model, maximizing clinical evaluation speed while preserving reasoning depth.
          </p>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {SPECS.map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-surface border border-surface-200/60 rounded-2xl p-5 shadow-xs hover:shadow-sm transition-all duration-300 group"
            >
              <spec.icon className="w-5 h-5 text-primary-500 mb-3 group-hover:scale-105 transition-transform" />
              <div className="text-xs text-surface-400 font-bold font-display uppercase tracking-wider mb-1">{spec.label}</div>
              <div className="text-xl font-extrabold text-surface-900 font-display">{spec.value}</div>
              <div className="text-xs text-surface-500 font-medium font-sans mt-0.5">{spec.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface border border-surface-200/60 rounded-3xl p-6 md:p-8 shadow-sm"
        >
          <h3 className="text-base font-bold text-surface-900 font-display mb-6 text-center uppercase tracking-wider">Transformer Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-200">
                  <th className="text-left py-3 px-4 text-xs font-bold text-surface-400 font-display uppercase tracking-wider">Aspect</th>
                  <th className="text-center py-3 px-4 text-xs font-bold text-surface-400 font-display uppercase tracking-wider">BERT</th>
                  <th className="text-center py-3 px-4 text-xs font-bold text-primary-600 font-display uppercase tracking-wider">DistilBERT ✓</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr key={i} className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
                    <td className="py-3 px-4 text-sm font-semibold text-surface-700">{row.aspect}</td>
                    <td className="py-3 px-4 text-center text-sm text-surface-500 font-sans">{row.bert}</td>
                    <td className="py-3 px-4 text-center text-sm text-primary-700 font-bold font-sans bg-primary-50/10">{row.distilbert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
