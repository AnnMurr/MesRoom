import React, { useState, useEffect } from 'react';
import "./styledSpaceBackground.css";

export const SpaceBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 70; i++) {
        newStars.push({
          id: Date.now() + i,
          left: Math.random() * 100 + 'vw',
          top: Math.random() * 100 + 'vh',
          animationDelay: Math.random() * 20 + 's',
          directionX: Math.random() > 0.5 ? 'left' : 'right',
          directionY: Math.random() > 0.5 ? 'top' : 'bottom',
        });
      }

      setStars(prevStars => [...prevStars, ...newStars].slice(0, 70));
      setTimeout(generateStars, 15000);
    };

    generateStars();
  }, []);

  return (
    <div className="space-container">
      {stars.map((star, index) => (
        <div
          key={star.id}
          className={index < 30 ? 'star_anim' : 'star'}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.animationDelay,
            animationName: `star-animation-${star.directionX}-${star.directionY}`,
          }}
        />
      ))}
    </div>
  );
};
