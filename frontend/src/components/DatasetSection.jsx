import { motion } from 'framer-motion';
import { Database, FileSpreadsheet, Bug } from 'lucide-react';

const DATASETS = [
  {
    icon: FileSpreadsheet,
    name: 'Monant Medical',
    file: 'Monant Medical.xlsx',
    description: 'Curated medical claims dataset covering a broad range of health topics and clinical assertions.',
    color: 'from-primary-50 to-primary-100/50',
    border: 'border-primary-100',
    iconColor: 'text-primary-600',
    tag: 'Medical',
  },
  {
    icon: Database,
    name: 'MedTruth Health Myths',
    file: 'medtruth_health_myths_dataset_10000.xlsx',
    description: '10,000 annotated health myth entries, covering nutrition, treatments, and lifestyle misinformation.',
    color: 'from-emerald-50 to-emerald-100/50',
    border: 'border-emerald-100',
    iconColor: 'text-emerald-600',
    tag: '10K Entries',
  },
  {
    icon: Bug,
    name: 'COVID-19 Myths',
    file: 'covid myths.xlsx',
    description: 'Pandemic-era misinformation dataset capturing viral false claims about COVID-19 transmission, treatment, and vaccines.',
    color: 'from-amber-50 to-amber-100/50',
    border: 'border-amber-100',
    iconColor: 'text-amber-600',
    tag: 'COVID-19',
  },
];

export default function DatasetSection() {
  return (
    <section id="datasets" className="py-28 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-100 bg-primary-50/50 text-xs font-semibold text-primary-600 mb-4">
            <Database className="w-3.5 h-3.5" />
            Training Assets
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-surface-900 mb-3 tracking-tight">
            Datasets
          </h2>
          <p className="text-surface-500 max-w-lg mx-auto text-sm sm:text-base font-sans">
            MedTruth is pre-trained and fine-tuned on three comprehensive, expert-verified corpora.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {DATASETS.map((ds, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-surface border border-surface-200/60 rounded-3xl p-6 hover:shadow-md transition-all duration-300 group hover:-translate-y-1 shadow-sm"
            >
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${ds.color} border ${ds.border} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300`}>
                <ds.icon className={`w-5 h-5 ${ds.iconColor}`} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-lg font-bold font-display text-surface-900">{ds.name}</h3>
                <span className={`px-2.5 py-0.5 text-xs font-semibold rounded-full border ${ds.border} ${ds.iconColor} bg-gradient-to-r ${ds.color}`}>
                  {ds.tag}
                </span>
              </div>
              <p className="text-sm text-surface-500 leading-relaxed font-sans mb-4">{ds.description}</p>
              <code className="text-xs text-primary-700 bg-primary-50/50 border border-primary-100/50 px-2.5 py-1.5 rounded-xl font-mono">
                {ds.file}
              </code>
            </motion.div>
          ))}
        </div>

        {/* Format Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 border border-surface-200/60 bg-surface-50 rounded-2xl p-4 text-center shadow-xs"
        >
          <p className="text-xs sm:text-sm text-surface-500 font-medium font-sans">
            All data sources are programmatically unified into a clean standardized structure:{' '}
            <code className="text-primary-700 font-bold bg-primary-50 px-2 py-0.5 rounded-lg border border-primary-100/50 ml-1.5">
              claim, source_type, label
            </code>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
