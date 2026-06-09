import React from 'react';
import { useNode } from '@craftjs/core';

interface TextProps {
  text: string;
  fontSize?: number;
  textAlign?: 'left' | 'center' | 'right';
  color?: string;
  fontWeight?: string | number;
}

export const Text = ({ text, fontSize = 16, textAlign = 'left', color = '#000000', fontWeight = 'normal' }: TextProps) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div 
      ref={(ref) => { if (ref) connect(drag(ref)); }}
      style={{ fontSize: `${fontSize}px`, textAlign, color, fontWeight }}
    >
      {text}
    </div>
  );
};

Text.craft = {
  props: {
    text: 'Enter text here',
    fontSize: 16,
    textAlign: 'left',
    color: '#000000',
    fontWeight: 'normal',
  },
  rules: {
    canDrag: () => true,
  }
};
