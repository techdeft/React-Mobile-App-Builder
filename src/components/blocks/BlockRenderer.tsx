import React from 'react';
import { BlockInstance } from '../../types/schema';
import { HeroBanner } from './HeroBanner';
import { FeaturedProducts } from './FeaturedProducts';
import { CategoriesGrid } from './CategoriesGrid';
import { NavbarHeader } from './NavbarHeader';

interface BlockRendererProps {
  block: BlockInstance;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  if (block.type.startsWith('navbar')) {
    return <NavbarHeader type={block.type} settings={block.settings} />;
  }

  if (block.type.startsWith('hero-banner')) {
    return <HeroBanner type={block.type} settings={block.settings} />;
  }
  
  if (block.type.startsWith('featured-products')) {
    return <FeaturedProducts type={block.type} settings={block.settings} />;
  }
  
  if (block.type.startsWith('categories')) {
    return <CategoriesGrid type={block.type} settings={block.settings} />;
  }

  return (
    <div style={{ padding: 20, textAlign: 'center', background: '#f5f5f5', color: '#666' }}>
      Unknown Block: {block.type}
    </div>
  );
}
