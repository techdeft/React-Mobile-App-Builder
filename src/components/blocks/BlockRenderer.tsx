import React from 'react';
import { BlockInstance } from '../../types/schema';
import { HeroBanner } from './HeroBanner';
import { FeaturedProducts } from './FeaturedProducts';
import { CategoriesGrid } from './CategoriesGrid';

interface BlockRendererProps {
  block: BlockInstance;
}

export function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case 'hero-banner':
      return <HeroBanner settings={block.settings} />;
    case 'featured-products':
      return <FeaturedProducts settings={block.settings} />;
    case 'categories-grid':
      return <CategoriesGrid settings={block.settings} />;
    default:
      return <div style={{ padding: 20, textAlign: 'center', background: '#f5f5f5', color: '#666' }}>Unknown Block: {block.type}</div>;
  }
}
