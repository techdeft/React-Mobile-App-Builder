import React from 'react';
import './Blocks.css';

interface HeroBannerProps {
  settings: Record<string, any>;
}

export function HeroBanner({ settings }: HeroBannerProps) {
  const { title, subtitle, buttonText, backgroundColor, textColor } = settings;

  return (
    <div 
      className="hero-banner-block"
      style={{ backgroundColor: backgroundColor || '#5e6ad2', color: textColor || '#ffffff' }}
    >
      <h2 className="hero-title">{title}</h2>
      <p className="hero-subtitle">{subtitle}</p>
      <button className="hero-btn" style={{ color: backgroundColor, backgroundColor: textColor }}>
        {buttonText}
      </button>
    </div>
  );
}
