// ============================================
// MedTruth — Dummy Prediction API
// Replace this with real backend API later
// ============================================

// Keyword-based dummy classification logic
const KEYWORD_MAP = {
  myth: {
    keywords: ['cure', 'cures', 'kills', 'miracle', 'hoax', 'fake', '5g', 'microchip', 'bleach', 'inject', 'garlic cures', 'onion', 'crystal healing', 'magnetic', 'detox foot'],
    label: 0,
    labelText: 'Myth',
    explanation: 'This claim contains language commonly associated with health misinformation. Scientific evidence does not support this assertion. Claims like these often spread through social media without peer-reviewed backing.',
    safetyNote: '⚠️ Do not follow medical advice from unverified sources. Always consult a licensed healthcare professional before making health decisions.',
  },
  uncertain: {
    keywords: ['may', 'might', 'possibly', 'some studies', 'inconclusive', 'debated', 'mixed evidence', 'unclear', 'controversial', 'preliminary'],
    label: 1,
    labelText: 'Uncertain',
    explanation: 'This claim references a topic where scientific evidence is still evolving. While some early studies show potential, there is no definitive consensus in the medical community yet.',
    safetyNote: '🔍 More research is needed. Discuss emerging treatments with your doctor before trying them.',
  },
  reliable: {
    keywords: ['vaccine', 'vaccination', 'hydration', 'exercise', 'sleep', 'vitamin d', 'balanced diet', 'hand washing', 'sunscreen', 'WHO recommends', 'CDC'],
    label: 2,
    labelText: 'Reliable',
    explanation: 'This claim is consistent with current scientific evidence and guidelines from established health organizations such as the WHO and CDC.',
    safetyNote: '✅ This information aligns with medical consensus. Continue following evidence-based health practices.',
  },
};

// Example claims for quick testing
export const EXAMPLE_CLAIMS = [
  { text: "Drinking bleach can cure COVID-19", expected: "Myth" },
  { text: "Regular exercise reduces the risk of heart disease", expected: "Reliable" },
  { text: "Some studies suggest turmeric may have anti-inflammatory properties", expected: "Uncertain" },
  { text: "5G towers spread coronavirus", expected: "Myth" },
  { text: "Vaccines help prevent infectious diseases", expected: "Reliable" },
  { text: "Garlic cures all viral infections", expected: "Myth" },
];

/**
 * Simulate an AI prediction API call.
 * Replace the body of this function with a real fetch() to your backend.
 *
 * @param {string} claimText - The health claim to analyze
 * @returns {Promise<object>} - Prediction result
 */
export async function analyzeClaimAPI(claimText) {
  // Simulate network delay (1.5 – 3 seconds)
  const delay = 1500 + Math.random() * 1500;
  await new Promise((resolve) => setTimeout(resolve, delay));

  const lowerText = claimText.toLowerCase();

  // Check keywords in priority order
  for (const category of [KEYWORD_MAP.myth, KEYWORD_MAP.reliable, KEYWORD_MAP.uncertain]) {
    for (const keyword of category.keywords) {
      if (lowerText.includes(keyword)) {
        return {
          label: category.label,
          labelText: category.labelText,
          confidence: 0.82 + Math.random() * 0.15, // 82% – 97%
          explanation: category.explanation,
          safetyNote: category.safetyNote,
        };
      }
    }
  }

  // Default fallback — uncertain
  return {
    label: 1,
    labelText: 'Uncertain',
    confidence: 0.55 + Math.random() * 0.2,
    explanation: 'The AI model could not find strong indicators to classify this claim definitively. The topic may require further expert review.',
    safetyNote: '🔍 When in doubt, consult a healthcare professional for personalized medical advice.',
  };
}
