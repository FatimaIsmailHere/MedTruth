import { motion } from 'framer-motion';
import { Heart, Target, Users, Shield, Compass, Brain } from 'lucide-react';

const teamMembers = [
  {
    name: "Faizan Haider",
    role: "AI Engineer & Frontend Developer",
    initials: "FH",
    gradient: "from-blue-500/20 to-primary-600/30",
    glowColor: "rgba(59, 130, 246, 0.08)",
    bio: "Faizan Haider is a Data Science student and aspiring AI engineer with a strong passion for Machine Learning, NLP, and Generative AI. He specializes in building intelligent systems, modern AI-powered web applications, and scalable SaaS solutions. In MedTruth, he focuses on frontend architecture, user experience, and AI product integration to create a trustworthy healthcare misinformation detection platform.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "React",
      "FastAPI",
      "Python",
      "Data Science"
    ],
    linkedin: "https://www.linkedin.com/in/faizan-haider998"
  },
  {
    name: "Fatima Ismail",
    role: "Associate Data Scientist & ML Researcher",
    initials: "FI",
    gradient: "from-emerald-500/20 to-primary-600/30",
    glowColor: "rgba(16, 185, 129, 0.08)",
    bio: "Fatima Ismail is a Data Science student with expertise in Machine Learning, Data Analytics, and AI-driven systems. With hands-on experience in data analysis, visualization, and ML applications, she contributes to MedTruth by focusing on research, model understanding, and intelligent healthcare data insights. Her strong academic background and practical AI experience help strengthen the project's analytical foundation.",
    skills: [
      "Machine Learning",
      "Data Analytics",
      "MongoDB",
      "Python",
      "EDA",
      "Visualization",
      "AI Research"
    ],
    linkedin: "https://www.linkedin.com/in/fatima-ismail-67461538a"
  }
];

const aboutCards = [
  {
    icon: Target,
    title: 'Our Mission',
    text: 'To empower individuals with AI tools that help distinguish reliable health information from myths and unverified claims circulating online.',
    color: 'text-primary-600',
    bgColor: 'bg-primary-50',
    borderColor: 'border-primary-100',
  },
  {
    icon: Heart,
    title: 'Why It Matters',
    text: 'Health misinformation can lead to harmful decisions. By detecting false claims early, we help protect communities and promote evidence-based healthcare.',
    color: 'text-rose-600',
    bgColor: 'bg-rose-50',
    borderColor: 'border-rose-100',
  },
  {
    icon: Users,
    title: 'Who It Helps',
    text: 'Researchers, healthcare professionals, content moderators, and everyday users seeking trustworthy health information in the digital age.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-50',
    borderColor: 'border-emerald-100',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden bg-surface-50">
      {/* Subtle Light Ambient background blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-35 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #dbeafe 0%, transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ================= About Project ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-100 bg-primary-50/50 text-xs font-semibold text-primary-600 mb-4 tracking-wide uppercase font-display">
            <Compass className="w-3.5 h-3.5" />
            Project Hub
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-surface-900 mb-4 tracking-tight">
            About MedTruth
          </h2>
          <p className="text-surface-500 max-w-xl mx-auto text-sm md:text-base font-sans">
            MedTruth is an advanced academic NLP initiative designed to counteract digital healthcare misinformation through robust model transparency.
          </p>
        </motion.div>

        {/* About Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {aboutCards.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-surface-200/60 rounded-3xl p-8 hover:shadow-md transition-all duration-300 group shadow-sm"
            >
              <div className={`w-12 h-12 rounded-2xl ${item.bgColor} border ${item.borderColor} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300 shadow-xs`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <h3 className="text-lg font-bold font-display text-surface-900 mb-3 group-hover:text-primary-600 transition-colors">{item.title}</h3>
              <p className="text-sm text-surface-500 leading-relaxed font-sans">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ================= Meet The Team ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary-100 bg-primary-50/50 text-xs font-semibold text-primary-600 mb-4 tracking-wide uppercase font-display">
            <Brain className="w-3.5 h-3.5" />
            Core Brains
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold font-display text-surface-900 mb-4 tracking-tight">
            Meet the Team
          </h2>
          <p className="text-surface-500 max-w-xl mx-auto text-sm md:text-base font-sans">
            The visionary minds pioneering state-of-the-art NLP implementations to promote truth in digital healthcare.
          </p>
        </motion.div>

        {/* Founders Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ 
                y: -5, 
                boxShadow: `0 20px 40px -15px ${member.glowColor}`,
                borderColor: 'rgba(59, 130, 246, 0.2)' 
              }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-surface-200/60 flex flex-col justify-between transition-all duration-300 relative group shadow-sm"
            >
              <div>
                {/* Header: Avatar Placeholder + Info */}
                <div className="flex items-start gap-4 mb-6">
                  {/* Futuristic Initial Avatar */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.gradient} border border-slate-200/50 flex items-center justify-center font-display text-2xl font-bold text-primary-700 shadow-inner relative overflow-hidden group-hover:scale-103 transition-transform duration-300`}>
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/30 blur-sm pointer-events-none" />
                    {member.initials}
                  </div>

                  {/* Name and Badge */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-display text-surface-900 tracking-tight group-hover:text-primary-600 transition-colors">
                      {member.name}
                    </h3>
                    <div className="mt-1.5 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary-50 text-primary-600 border border-primary-100 font-sans tracking-wide">
                      {member.role}
                    </div>
                  </div>

                  {/* LinkedIn Icon */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-surface-50 hover:bg-primary-50 hover:text-primary-600 border border-surface-200 hover:border-primary-200 text-surface-500 transition-all duration-200 shadow-xs"
                    aria-label={`${member.name} LinkedIn Profile`}
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>

                {/* Bio text */}
                <p className="text-sm text-surface-500 leading-relaxed font-sans mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Skills/Tags Section */}
              <div>
                <div className="text-xs font-bold font-display text-surface-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-primary-500" />
                  Areas of Expertise
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-2.5 py-1 text-xs text-surface-600 bg-surface-50 border border-surface-200/80 rounded-lg font-sans font-medium hover:border-primary-200 hover:text-primary-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border border-amber-200/80 bg-gradient-to-r from-amber-50/50 to-transparent rounded-3xl p-6 text-center max-w-4xl mx-auto shadow-xs"
        >
          <p className="text-xs md:text-sm text-surface-500 leading-relaxed font-sans">
            <span className="text-amber-600 font-extrabold font-display tracking-wide uppercase mr-1.5">⚠️ Disclaimer:</span> MedTruth is an academic research platform and is not designed to replace clinical diagnoses or consults. Always seek professional advice from certified healthcare clinicians for personal medical issues.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
