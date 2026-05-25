import { motion } from 'framer-motion';
import { BarChart3, Trophy } from 'lucide-react';

const METRICS = [
  { label: 'Evaluation Accuracy', m1: '43.78%', m2: '92.31%', m1w: 43.78, m2w: 92.31 },
  { label: 'F1-Score (Robustness)', m1: '0.48', m2: '0.9097', m1w: 48, m2w: 90.97 },
  { label: 'Evaluation Precision', m1: '0.50', m2: '0.9346', m1w: 50, m2w: 93.46 },
  { label: 'Evaluation Recall', m1: '0.44', m2: '0.9231', m1w: 44, m2w: 92.31 },
];

const COMPARISON_ROWS = [
  { aspect: 'Fine-Tuning Method', m1: 'Fresh model per isolated dataset', m2: 'Single combined domain model' },
  { aspect: 'Training Corpus', m1: 'Domain-specific subsets only', m2: 'All health sources aggregated' },
  { aspect: 'Cross-Domain Generalization', m1: 'Poor / Overfitted', m2: 'Excellent / Resilient ✓' },
  { aspect: 'Production Overhead', m1: '3 models to load and query', m2: '1 single model serving all requests ✓' },
  { aspect: 'Disk / Memory Size', m1: '3 × 268 MB (804 MB)', m2: '268 MB ✓' },
  { aspect: 'Training Duration', m1: '~2.0 Hours serving 3 runs', m2: '~1.5 Hours serving 1 run ✓' },
];

export default function PerformanceComparison() {
  return (
    <section id="performance" className="py-28 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-100 bg-primary-50/50 text-xs font-semibold text-primary-600 mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            Empirical Results
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-surface-900 mb-3 tracking-tight">
            Performance Comparison
          </h2>
          <p className="text-surface-500 max-w-lg mx-auto text-sm sm:text-base font-sans">
            Method 2 (Combined Dataset fine-tuning) yields an absolute accuracy boost of **48.53%** over separate training.
          </p>
        </motion.div>

        {/* Bar Charts */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {METRICS.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-surface-200/60 rounded-2xl p-5 shadow-xs hover:shadow-sm transition-all duration-300"
            >
              <div className="text-xs font-bold text-surface-400 font-display uppercase tracking-wider mb-4">{m.label}</div>
              {/* Method 1 Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs mb-1.5 font-medium font-sans">
                  <span className="text-surface-500">Method 1 (Separate Domains)</span>
                  <span className="text-surface-500">{m.m1}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.m1w}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                    className="h-full rounded-full bg-surface-300"
                  />
                </div>
              </div>
              {/* Method 2 Bar */}
              <div>
                <div className="flex justify-between text-xs mb-1.5 font-bold font-sans">
                  <span className="text-primary-600">Method 2 (Aggregated Combined) ✓</span>
                  <span className="text-primary-700">{m.m2}</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.m2w}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.1 }}
                    className="h-full rounded-full bg-primary-600"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-surface border border-surface-200/60 rounded-3xl p-6 md:p-8 mb-8 shadow-xs"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-200">
                  <th className="text-left py-3 px-4 text-xs font-bold text-surface-400 font-display uppercase tracking-wider">Aspect</th>
                  <th className="text-center py-3 px-4 text-xs font-bold text-surface-400 font-display uppercase tracking-wider">Method 1</th>
                  <th className="text-center py-3 px-4 text-xs font-bold text-primary-600 font-display uppercase tracking-wider">Method 2 ✓</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
                    <td className="py-3 px-4 text-sm font-semibold text-surface-700">{row.aspect}</td>
                    <td className="py-3 px-4 text-center text-sm text-surface-500 font-sans">{row.m1}</td>
                    <td className="py-3 px-4 text-center text-sm text-primary-700 font-bold bg-primary-50/10 font-sans">{row.m2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Recommendation Card */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-surface border border-primary-100 rounded-3xl p-5 flex items-center gap-4 shadow-sm"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary-50 border border-primary-100 flex items-center justify-center shrink-0 shadow-xs">
            <Trophy className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <div className="text-sm font-extrabold text-primary-700 font-display uppercase tracking-wide">Serving Paradigm Recommendation</div>
            <p className="text-xs sm:text-sm text-surface-500 leading-relaxed font-sans mt-0.5">
              Deploying **Method 2 (Aggregated Model)** reduces multi-model routing overhead, maximizes transfer learning domain overlap, and serves predictions within **~50ms**.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
