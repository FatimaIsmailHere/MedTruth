// ============================================
// MedTruth — Main Application
// AI Health Misinformation Detection Frontend
// ============================================

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ClaimChecker from './components/ClaimChecker';
import DatasetSection from './components/DatasetSection';
import ModelArchitecture from './components/ModelArchitecture';
import PerformanceComparison from './components/PerformanceComparison';
import FeaturesSection from './components/FeaturesSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-surface text-surface-800">
      <Navbar />
      <main>
        <HeroSection />
        <ClaimChecker />
        <DatasetSection />
        <ModelArchitecture />
        <PerformanceComparison />
        <FeaturesSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
