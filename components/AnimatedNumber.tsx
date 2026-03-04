
import React, { useState, useEffect } from 'react';

interface Props {
  value: number;
  suffix?: string;
  duration?: number;
}

export const AnimatedNumber: React.FC<Props> = ({ value, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
};
