import React from 'react';
import './Blocks.css';

interface FeaturedProductsProps {
  type: string;
  settings: Record<string, any>;
}

export function FeaturedProducts({ type, settings }: FeaturedProductsProps) {
  const { sectionTitle, columns } = settings;
  
  const isList = type === 'featured-products-list';
  const isScroll = type === 'featured-products-scroll';
  const isLarge = type === 'featured-products-large';
  
  const layoutClass = isList ? 'products-list' : isScroll ? 'products-scroll' : 'products-grid';
  
  // Use settings or default for grid
  const cols = isLarge ? 1 : (columns || 2);
  const gridTemplateColumns = !isList && !isScroll ? `repeat(${cols}, 1fr)` : undefined;

  // Mock products
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', image: '🎧' },
    { id: 2, name: 'Smart Watch', price: '$199.99', image: '⌚' },
    { id: 3, name: 'Bluetooth Speaker', price: '$59.99', image: '🔈' },
    { id: 4, name: 'Fitness Tracker', price: '$49.99', image: '🏃' },
  ].slice(0, cols * 2 || 4);

  return (
    <div className="featured-products-block">
      <h3 className="section-title">{sectionTitle}</h3>
      <div className={layoutClass} style={{ gridTemplateColumns }}>
        {products.map(product => (
          <div key={product.id} className={`product-card ${isLarge ? 'large-card' : ''}`}>
            <div className="product-image">{product.image}</div>
            <div className="product-info">
              <div className="product-name">{product.name}</div>
              <div className="product-price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
