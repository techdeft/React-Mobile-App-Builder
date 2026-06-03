import React from 'react';
import './Blocks.css';

interface CategoriesGridProps {
  settings: Record<string, any>;
}

export function CategoriesGrid({ settings }: CategoriesGridProps) {
  const { title, layout } = settings;

  const categories = [
    { id: 1, name: 'Electronics', icon: '💻' },
    { id: 2, name: 'Clothing', icon: '👕' },
    { id: 3, name: 'Home', icon: '🏠' },
    { id: 4, name: 'Sports', icon: '⚽' },
  ];

  return (
    <div className="categories-block">
      <h3 className="section-title">{title}</h3>
      <div className={`categories-${layout || 'grid'}`}>
        {categories.map(cat => (
          <div key={cat.id} className="category-item">
            <div className="category-icon">{cat.icon}</div>
            <div className="category-name">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
