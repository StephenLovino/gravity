import { useState, useEffect } from 'react';

export const useScrollRotation = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rotationValue = scrollY * 0.1; // Adjust rotation speed
      setRotation(rotationValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return rotation;
};
