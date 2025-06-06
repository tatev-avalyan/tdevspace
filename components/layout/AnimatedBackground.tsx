'use client';

import { useRef } from 'react';
import { useAnimationFrame } from 'framer-motion';
import Image from 'next/image';
import Background from '@/public/assets/background.png';

const AnimatedBackground = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const x = Math.sin(t / 1000) * 10;
    const y = Math.cos(t / 1500) * 10;
    if (ref.current) {
      ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    }
  });

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      <Image
        src={Background}
        alt="animated bg"
        fill
        className="object-cover dark:opacity-10 transition-transform duration-300"
        priority
      />
    </div>
  );
};

export default AnimatedBackground;
