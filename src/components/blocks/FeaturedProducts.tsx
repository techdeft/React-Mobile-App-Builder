import React from 'react';
import './Blocks.css';

interface FeaturedProductsProps {
  settings: Record<string, any>;
}

export function FeaturedProducts({ settings }: FeaturedProductsProps) {
  const { sectionTitle, columns } = settings;
  const gridTemplateColumns = `repeat(${columns || 2}, 1fr)`;

  // Mock products
  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$99.99', image: '🎧' },
    { id: 2, name: 'Smart Watch', price: '$199.99', image: '⌚' },
    { id: 3, name: 'Bluetooth Speaker', price: '$59.99', image: '🔈' },
    { id: 4, name: 'Fitness Tracker', price: '$49.99', image: '🏃' },
  ].slice(0, columns * 2 || 4);

  return (
    <div className="featured-products-block">
      <h3 className="section-title">{sectionTitle}</h3>
      <div className="products-grid" style={{ gridTemplateColumns }}>
        {products.map(product => (
          <div key={product.id} className="product-card">
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
