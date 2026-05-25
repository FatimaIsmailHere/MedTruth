import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, RotateCcw, Loader2, Sparkles } from 'lucide-react';
import { analyzeClaimAPI, EXAMPLE_CLAIMS } from '../utils/dummyApi';
import ResultCard from './ResultCard';

const MAX_CHARS = 500;

export default function ClaimChecker() {
  const [claimText, setClaimText] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const charCount = claimText.length;
  const charPercent = (charCount / MAX_CHARS) * 100;
  const charColor =
    charPercent > 90 ? 'text-rose-500 font-bold' : charPercent > 70 ? 'text-amber-500 font-medium' : 'text-surface-400';

  async function handleAnalyze() {
    if (!claimText.trim() || loading) return;
    setLoading(true);
    setResult(null);
    try {
      const prediction = await analyzeClaimAPI(claimText);
      setResult(prediction);
    } catch {
      setResult({
        label: 1,
        labelText: 'Error',
        confidence: 0,
        explanation: 'Something went wrong. Please try again.',
        safetyNote: 'If this persists, the backend may be offline.',
      });
    } finally {
      setLoading(false);
    }
  }

  function handleReset() {
    setClaimText('');
    setResult(null);
  }

  function handleExample(text) {
    setClaimText(text);
    setResult(null);
  }

  return (
    <section id="checker" className="py-28 px-4 bg-surface-50">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-100 bg-primary-50/50 text-xs font-semibold text-primary-600 mb-4">
            <Search className="w-3.5 h-3.5" />
            AI Diagnostic
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-surface-900 mb-3 tracking-tight">
            Check a Health Claim
          </h2>
          <p className="text-surface-500 max-w-lg mx-auto text-sm sm:text-base font-sans">
            Enter a medical claim below to analyze its scientific credibility against verified evidence.
          </p>
        </motion.div>

        {/* Input Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-surface border border-surface-200/60 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          {/* Textarea */}
          <div className="relative">
            <textarea
              value={claimText}
              onChange={(e) => {
                if (e.target.value.length <= MAX_CHARS) setClaimText(e.target.value);
              }}
              placeholder='e.g. "Drinking warm water prevents COVID-19"'
              rows={4}
              className="w-full bg-surface-50 border border-surface-200 rounded-2xl p-4 text-surface-900 placeholder-surface-400 resize-none focus:border-primary-400 focus:bg-surface focus:ring-4 focus:ring-primary-100/50 transition-all duration-300 text-sm leading-relaxed"
            />
            <div className={`absolute bottom-3 right-4 text-xs font-mono ${charColor}`}>
              {charCount}/{MAX_CHARS}
            </div>
          </div>

          {/* Example Claims */}
          <div className="mt-5 mb-7">
            <div className="text-xs font-semibold text-surface-500 mb-2.5 flex items-center gap-1.5 font-display uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-primary-500" /> Quick Templates:
            </div>
            <div className="flex flex-wrap gap-2">
              {EXAMPLE_CLAIMS.slice(0, 4).map((ex, i) => (
                <button
                  key={i}
                  onClick={() => handleExample(ex.text)}
                  className="px-3.5 py-2 text-xs font-medium text-surface-600 bg-surface-50 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-200 border border-surface-200/80 rounded-xl transition-all duration-200 cursor-pointer"
                >
                  {ex.text.length > 45 ? ex.text.slice(0, 45) + '…' : ex.text}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleAnalyze}
              disabled={!claimText.trim() || loading}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white rounded-2xl transition-all duration-300 cursor-pointer border-none shadow-sm ${
                !claimText.trim() || loading
                  ? 'bg-surface-200 text-surface-400 cursor-not-allowed shadow-none'
                  : 'bg-primary-600 hover:bg-primary-700 hover:shadow-md hover:shadow-primary-600/10 hover:-translate-y-0.5'
              }`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Analyzing claim evidence...
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  Analyze Credibility
                </>
              )}
            </button>
            {(claimText || result) && (
              <button
                onClick={handleReset}
                className="px-4.5 py-3.5 text-sm font-medium text-surface-600 hover:text-surface-900 bg-surface-50 border border-surface-200 hover:bg-surface-100 rounded-2xl transition-all duration-200 cursor-pointer border-none shadow-sm"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Loading Skeleton */}
          {loading && (
            <div className="mt-8 space-y-4">
              <div className="shimmer h-4 rounded-lg w-3/4" />
              <div className="shimmer h-4 rounded-lg w-1/2" />
              <div className="shimmer h-24 rounded-2xl" />
            </div>
          )}

          {/* Result */}
          {!loading && result && <ResultCard result={result} />}
        </motion.div>
      </div>
    </section>
  );
}
