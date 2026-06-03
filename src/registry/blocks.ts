import { BlockSchema } from '../types/schema';

const sharedHeaderFields = {
  title: { type: 'text' as const, label: 'Title', default: 'Summer Sale' },
  subtitle: { type: 'textarea' as const, label: 'Subtitle', default: 'Up to 50% off all summer items!' },
  buttonText: { type: 'text' as const, label: 'Button Text', default: 'Shop Now' },
  backgroundColor: { type: 'color' as const, label: 'Background Color', default: '#5e6ad2' },
  textColor: { type: 'color' as const, label: 'Text Color', default: '#ffffff' }
};

const sharedCommerceFields = {
  sectionTitle: { type: 'text' as const, label: 'Section Title', default: 'Featured Products' },
  source: { type: 'select' as const, label: 'Product Source', default: 'featured', options: [
    { label: 'Featured Category', value: 'featured' },
    { label: 'New Arrivals', value: 'new' },
    { label: 'Best Sellers', value: 'best' }
  ]},
  columns: { type: 'number' as const, label: 'Grid Columns', default: 2 }
};

export const BLOCK_REGISTRY: Record<string, BlockSchema> = {
  // Headers / Navigations (3 options)
  'navbar-basic': {
    type: 'navbar-basic', name: 'Basic Navbar', category: 'Headers', icon: '🔝',
    previewImage: 'https://placehold.co/400x100/f3f4f6/374151?text=Basic+Navbar',
    fields: {
      navbarBgColor: { type: 'color', label: 'Navbar BG Color', default: '#ffffff', group: 'Navbar' },
      logoText: { type: 'text', label: 'Logo Text', default: 'Brand', group: 'Logo' },
      logoBgColor: { type: 'color', label: 'Logo BG Color', default: 'transparent', group: 'Logo' },
      links: { type: 'text', label: 'Links (comma separated)', default: 'Home, Features, Pricing, About', group: 'Nav Items' },
      textColor: { type: 'color', label: 'Link Text Color', default: '#4b5563', group: 'Nav Items' },
      activeTextColor: { type: 'color', label: 'Active Link Color', default: '#3b82f6', group: 'Nav Items' },
      textSize: { type: 'number', label: 'Text Size (px)', default: 14, group: 'Nav Items' },
      buttonText: { type: 'text', label: 'Button Text', default: 'Sign In', group: 'Button' },
      buttonColor: { type: 'color', label: 'Button BG Color', default: '#2563eb', group: 'Button' },
      buttonTextColor: { type: 'color', label: 'Button Text Color', default: '#ffffff', group: 'Button' },
      buttonTextSize: { type: 'number', label: 'Button Text Size (px)', default: 14, group: 'Button' },
      borderRadius: { type: 'number', label: 'Border Radius (px)', default: 8, group: 'Button' }
    }
  },
  'navbar-centered': {
    type: 'navbar-centered', name: 'Centered Navbar', category: 'Headers', icon: '↔️',
    previewImage: 'https://placehold.co/400x100/f3f4f6/374151?text=Centered+Navbar',
    fields: {
      navbarBgColor: { type: 'color', label: 'Navbar BG Color', default: '#ffffff', group: 'Navbar' },
      logoText: { type: 'text', label: 'Logo Text', default: 'Brand', group: 'Logo' },
      logoBgColor: { type: 'color', label: 'Logo BG Color', default: 'transparent', group: 'Logo' },
      links: { type: 'text', label: 'Links (comma separated)', default: 'Home, Features, Pricing, About', group: 'Nav Items' },
      textColor: { type: 'color', label: 'Link Text Color', default: '#4b5563', group: 'Nav Items' },
      activeTextColor: { type: 'color', label: 'Active Link Color', default: '#3b82f6', group: 'Nav Items' },
      textSize: { type: 'number', label: 'Text Size (px)', default: 14, group: 'Nav Items' },
      buttonText: { type: 'text', label: 'Button Text', default: 'Sign In', group: 'Button' },
      buttonColor: { type: 'color', label: 'Button BG Color', default: '#2563eb', group: 'Button' },
      buttonTextColor: { type: 'color', label: 'Button Text Color', default: '#ffffff', group: 'Button' },
      buttonTextSize: { type: 'number', label: 'Button Text Size (px)', default: 14, group: 'Button' },
      borderRadius: { type: 'number', label: 'Border Radius (px)', default: 8, group: 'Button' }
    }
  },
  'navbar-minimal': {
    type: 'navbar-minimal', name: 'Minimal Navbar', category: 'Headers', icon: '➖',
    previewImage: 'https://placehold.co/400x100/f3f4f6/374151?text=Minimal+Navbar',
    fields: {
      navbarBgColor: { type: 'color', label: 'Navbar BG Color', default: '#ffffff', group: 'Navbar' },
      logoText: { type: 'text', label: 'Logo Text', default: 'Brand', group: 'Logo' },
      logoBgColor: { type: 'color', label: 'Logo BG Color', default: 'transparent', group: 'Logo' },
      links: { type: 'text', label: 'Links (comma separated)', default: 'Home, Features, Pricing, About', group: 'Nav Items' },
      textColor: { type: 'color', label: 'Link Text Color', default: '#4b5563', group: 'Nav Items' },
      activeTextColor: { type: 'color', label: 'Active Link Color', default: '#3b82f6', group: 'Nav Items' },
      textSize: { type: 'number', label: 'Text Size (px)', default: 14, group: 'Nav Items' }
    }
  },

  // Hero Sections (6 options)
  'hero-banner-center': {
    type: 'hero-banner-center', name: 'Hero Center', category: 'Hero Sections', icon: '🖼️', 
    previewImage: 'https://placehold.co/400x150/e0e7ff/4f46e5?text=Hero+Center', fields: sharedHeaderFields
  },
  'hero-banner-left': {
    type: 'hero-banner-left', name: 'Hero Left Align', category: 'Hero Sections', icon: '📝', 
    previewImage: 'https://placehold.co/400x150/e0e7ff/4f46e5?text=Hero+Left', fields: sharedHeaderFields
  },
  'hero-banner-minimal': {
    type: 'hero-banner-minimal', name: 'Hero Minimal', category: 'Hero Sections', icon: '✨', 
    previewImage: 'https://placehold.co/400x150/f3f4f6/374151?text=Hero+Minimal', fields: sharedHeaderFields
  },
  'hero-banner-split': {
    type: 'hero-banner-split', name: 'Hero Split', category: 'Hero Sections', icon: '◨', 
    previewImage: 'https://placehold.co/400x150/e0e7ff/4f46e5?text=Hero+Split', fields: sharedHeaderFields
  },
  'hero-banner-image-bg': {
    type: 'hero-banner-image-bg', name: 'Hero Image BG', category: 'Hero Sections', icon: '🌄', 
    previewImage: 'https://placehold.co/400x150/374151/ffffff?text=Image+Background', fields: sharedHeaderFields
  },
  'hero-banner-gradient': {
    type: 'hero-banner-gradient', name: 'Hero Gradient', category: 'Hero Sections', icon: '🌈', 
    previewImage: 'https://placehold.co/400x150/4f46e5/ffffff?text=Gradient+Hero', fields: sharedHeaderFields
  },

  // Commerce (6 options)
  'featured-products-grid': {
    type: 'featured-products-grid', name: 'Products Grid', category: 'Commerce', icon: '🛍️', fields: sharedCommerceFields
  },
  'featured-products-list': {
    type: 'featured-products-list', name: 'Products List', category: 'Commerce', icon: '📋', fields: sharedCommerceFields
  },
  'featured-products-scroll': {
    type: 'featured-products-scroll', name: 'Products Scroll', category: 'Commerce', icon: '↔️', fields: sharedCommerceFields
  },
  'featured-products-large': {
    type: 'featured-products-large', name: 'Large Cards', category: 'Commerce', icon: '🪧', fields: sharedCommerceFields
  },
  'featured-products-compact': {
    type: 'featured-products-compact', name: 'Compact View', category: 'Commerce', icon: '🗜️', fields: sharedCommerceFields
  },
  'featured-products-highlight': {
    type: 'featured-products-highlight', name: 'Highlight Item', category: 'Commerce', icon: '⭐', fields: sharedCommerceFields
  },

  // Navigation (3 options)
  'categories-grid': {
    type: 'categories-grid', name: 'Categories Grid', category: 'Navigation', icon: '🗂️',
    fields: { title: { type: 'text', label: 'Title', default: 'Shop by Category' } }
  },
  'categories-scroll': {
    type: 'categories-scroll', name: 'Categories Scroll', category: 'Navigation', icon: '🔄',
    fields: { title: { type: 'text', label: 'Title', default: 'Shop by Category' } }
  },
  'categories-list': {
    type: 'categories-list', name: 'Categories List', category: 'Navigation', icon: '📑',
    fields: { title: { type: 'text', label: 'Title', default: 'Shop by Category' } }
  }
};
