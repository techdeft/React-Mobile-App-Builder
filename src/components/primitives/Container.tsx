import React from 'react';
import { useNode } from '@craftjs/core';

interface ContainerProps {
  background?: string;
  padding?: number;
  flexDirection?: 'row' | 'column';
  alignItems?: string;
  justifyContent?: string;
  gap?: number;
  children?: React.ReactNode;
}

export const Container = ({ 
  background = '#ffffff', 
  padding = 20, 
  flexDirection = 'column',
  alignItems = 'flex-start',
  justifyContent = 'flex-start',
  gap = 0,
  children 
}: ContainerProps) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div
      ref={(ref) => { if (ref) connect(drag(ref)); }}
      style={{ 
        background, 
        padding: `${padding}px`,
        display: 'flex',
        flexDirection,
        alignItems,
        justifyContent,
        gap: `${gap}px`,
        minHeight: '50px', // So empty containers can be dragged into
        border: '1px dashed #ccc' // Temporary visual guide
      }}
    >
      {children}
    </div>
  );
};

Container.craft = {
  props: {
    background: '#ffffff',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 0,
  },
  rules: {
    canDrag: () => true,
  }
};
