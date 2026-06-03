import { BlockSchema } from '../types/schema';

export const BLOCK_REGISTRY: Record<string, BlockSchema> = {
  'hero-banner': {
    type: 'hero-banner',
    name: 'Hero Banner',
    category: 'Headers',
    icon: '🖼️',
    fields: {
      title: { type: 'text', label: 'Title', default: 'Summer Sale' },
      subtitle: { type: 'textarea', label: 'Subtitle', default: 'Up to 50% off all summer items!' },
      buttonText: { type: 'text', label: 'Button Text', default: 'Shop Now' },
      backgroundColor: { type: 'color', label: 'Background Color', default: '#5e6ad2' },
      textColor: { type: 'color', label: 'Text Color', default: '#ffffff' }
    }
  },
  'featured-products': {
    type: 'featured-products',
    name: 'Featured Products',
    category: 'Commerce',
    icon: '🛍️',
    fields: {
      sectionTitle: { type: 'text', label: 'Section Title', default: 'Featured Products' },
      source: { type: 'select', label: 'Product Source', default: 'featured', options: [
        { label: 'Featured Category', value: 'featured' },
        { label: 'New Arrivals', value: 'new' },
        { label: 'Best Sellers', value: 'best' }
      ]},
      columns: { type: 'number', label: 'Grid Columns', default: 2 }
    }
  },
  'categories-grid': {
    type: 'categories-grid',
    name: 'Categories Grid',
    category: 'Navigation',
    icon: '🗂️',
    fields: {
      title: { type: 'text', label: 'Title', default: 'Shop by Category' },
      layout: { type: 'select', label: 'Layout Style', default: 'grid', options: [
        { label: 'Grid', value: 'grid' },
        { label: 'List', value: 'list' },
        { label: 'Horizontal Scroll', value: 'scroll' }
      ]}
    }
  }
};
