'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface GradientButtonProps {
  label: string;
  href: string;
  icon?: ReactNode;
  className?: string;
}

const GradientButton = ({ label, href, icon}: GradientButtonProps) => {
  return (
    <div className="text-center">
      <Link
        href={href}
        className="inline-block bg-gradient-to-r from-orange-500 to-yellow-400 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
      >
        {icon && <span className="mr-1">{icon}</span>}
        {label}
      </Link>
    </div>
  );
};

export default GradientButton;
