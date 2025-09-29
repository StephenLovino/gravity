import React, { useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { useScrollRotation } from './useScrollRotation';

const SplineScene = () => {
  const rotation = useScrollRotation();

  useEffect(() => {
    // Hide Spline branding and container background
    const hideSplineElements = () => {
      // Hide watermarks
      const watermarks = document.querySelectorAll('.spline-watermark, [data-spline-watermark], .spline-watermark-button, .spline-toolbar');
      watermarks.forEach(element => {
        element.style.display = 'none';
        element.style.opacity = '0';
        element.style.visibility = 'hidden';
      });

      // Hide container backgrounds
      const containers = document.querySelectorAll('.spline-viewer, .spline-container, .spline-scene');
      containers.forEach(container => {
        container.style.background = 'transparent';
        container.style.border = 'none';
        container.style.boxShadow = 'none';
      });

      // Target iframe specifically
      const iframes = document.querySelectorAll('iframe[src*="spline"]');
      iframes.forEach(iframe => {
        iframe.style.background = 'transparent';
        iframe.style.border = 'none';
      });
    };

    // Run immediately and on interval
    hideSplineElements();
    const interval = setInterval(hideSplineElements, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="spline-container"
      style={{
        transform: `rotateY(${rotation}deg) rotateX(${rotation * 0.3}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
    >
      <Spline
        scene="https://prod.spline.design/KonSYQm7nUB7toRy/scene.splinecode"
        style={{ 
          width: '100%', 
          height: '100%',
          background: 'transparent'
        }}
        onLoad={() => {
          console.log('Spline loaded');
        }}
      />
    </div>
  );
};

export default SplineScene;
