'use client';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center py-4 border-t border-gray-300 dark:border-gray-700">
      <p className="text-sm">
        © {new Date().getFullYear()} {t('footer.rights')}
      </p>
    </footer>
  );
};

export default Footer;
