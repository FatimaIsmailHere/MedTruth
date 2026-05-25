import { Shield } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-surface-200/60 py-16 px-4 bg-surface-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 no-underline">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-xs">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="text-base font-bold text-surface-900 font-display tracking-tight">
              Med<span className="text-primary-600">Truth</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="#checker" className="text-surface-500 hover:text-primary-600 transition-colors no-underline font-medium">Checker</a>
            <a href="#model" className="text-surface-500 hover:text-primary-600 transition-colors no-underline font-medium">Model</a>
            <a href="#performance" className="text-surface-500 hover:text-primary-600 transition-colors no-underline font-medium">Performance</a>
            <a href="#about" className="text-surface-500 hover:text-primary-600 transition-colors no-underline font-medium">About</a>
          </div>

          {/* Copyright */}
          <div className="text-xs font-medium text-surface-400">
            © {new Date().getFullYear()} MedTruth · NLP Course Project
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-8 pt-6 border-t border-surface-200/60 text-center">
          <p className="text-xs text-surface-400 leading-relaxed max-w-2xl mx-auto font-sans">
            MedTruth is an academic project utilizing DistilBERT for health misinformation detection. 
            This tool is for educational and research purposes only. It is not intended to provide medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
