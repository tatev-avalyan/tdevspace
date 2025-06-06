'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface GradientButtonProps {
  label: string;
  href?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GradientButton = ({ label, href, icon, onClick, className }: GradientButtonProps) => {
  const baseClass =
    'shadow-xl inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out';

  if (onClick) {
    return (
      <div className="text-center">
        <button onClick={onClick} className={`${baseClass} ${className || ''}`}>
          {icon && <span className="mr-1">{icon}</span>}
          {label}
        </button>
      </div>
    );
  }

  if (href) {
    return (
      <div className="text-center">
        <Link href={href} className={`${baseClass} ${className || ''}`}>
          {icon && <span className="mr-1">{icon}</span>}
          {label}
        </Link>
      </div>
    );
  }

  return null;
};

export default GradientButton;
