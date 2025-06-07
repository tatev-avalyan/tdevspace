'use client';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[75vh] max-w-5xl mx-auto py-16 px-4 text-center space-y-6">
      {/* Optional background graphic */}
      <div className="absolute inset-0 bg-[url('/assets/about-pattern.svg')] bg-no-repeat bg-center opacity-10 pointer-events-none" />

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-dark dark:text-white relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {t('about.title')}
      </motion.h2>

      <motion.div
        className="max-w-4xl mx-auto text-base leading-relaxed text-gray-700 dark:text-gray-300 text-left space-y-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.p variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}>
          {t('about.intro')}
        </motion.p>

        <motion.p variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 20 } }}>
          {t('about.philosophy')}
        </motion.p>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">💡 {t('about.whatWeOffer.title')}</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>👨‍🏫 {t('about.whatWeOffer.mentorship')}</li>
            <li>📦 {t('about.whatWeOffer.projects')}</li>
            <li>🌍 {t('about.whatWeOffer.forAll')}</li>
          </ul>
        </div>

        <div className="space-y-2 pt-4">
          <h3 className="font-semibold text-lg">🎯 {t('about.mission.title')}</h3>
          <p>
            <strong className="text-brand text-lg">{t('about.mission.slogan')}</strong>
          </p>
          <p>{t('about.mission.learnBuildEvolve')}</p>
          <p>{t('about.mission.belief')}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
