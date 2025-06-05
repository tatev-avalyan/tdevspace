'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
     <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={scrollToTop}
        className={`transition-all duration-300 ease-in-out transform hover:scale-110 
          p-3 rounded-full shadow-xl backdrop-blur-md border border-white/10
          ${
            isVisible
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }
          bg-brand text-white hover:bg-brand-light`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
