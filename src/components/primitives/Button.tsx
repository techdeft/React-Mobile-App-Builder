import React from 'react';
import { useNode } from '@craftjs/core';

interface ButtonProps {
  text: string;
  background?: string;
  color?: string;
  padding?: number;
  borderRadius?: number;
}

export const Button = ({ text, background = '#2563eb', color = '#ffffff', padding = 10, borderRadius = 4 }: ButtonProps) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <button 
      ref={(ref) => { if (ref) connect(drag(ref)); }}
      style={{ 
        background, 
        color, 
        padding: `${padding}px ${padding * 2}px`, 
        borderRadius: `${borderRadius}px`,
        border: 'none',
        cursor: 'pointer'
      }}
    >
      {text}
    </button>
  );
};

Button.craft = {
  props: {
    text: 'Click Me',
    background: '#2563eb',
    color: '#ffffff',
    padding: 10,
    borderRadius: 4,
  },
  rules: {
    canDrag: () => true,
  }
};
