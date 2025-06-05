'use client';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-[75vh] max-w-4xl mx-auto px-4 py-12 text-center space-y-6">
      <h2 className="text-3xl md:text-4xl font-bold text-dark">
        {t('about.title')}
      </h2>

      <div className="max-w-3xl mx-auto text-base leading-relaxed text-gray-700 dark:text-gray-300 text-left space-y-5">
        <p>{t('about.intro')}</p>

        <p>{t('about.philosophy')}</p>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">💡 {t('about.whatWeOffer.title')}</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>{t('about.whatWeOffer.mentorship')}</li>
            <li>{t('about.whatWeOffer.projects')}</li>
            <li>{t('about.whatWeOffer.bilingual')}</li>
            <li>{t('about.whatWeOffer.forAll')}</li>
          </ul>
        </div>

        <div className="space-y-2 pt-4">
          <h3 className="font-semibold text-lg">🎯 {t('about.mission.title')}</h3>
          <p>
            <strong className="text-brand">{t('about.mission.slogan')}</strong>
          </p>
          <p>{t('about.mission.learnBuildEvolve')}</p>
          <p>{t('about.mission.belief')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
