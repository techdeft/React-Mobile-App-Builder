import React from 'react';
import './Blocks.css';

interface CategoriesGridProps {
  type: string;
  settings: Record<string, any>;
}

export function CategoriesGrid({ type, settings }: CategoriesGridProps) {
  const { title } = settings;

  // Determine layout from the block type instead of the old setting
  let layout = 'grid';
  if (type === 'categories-scroll') layout = 'scroll';
  if (type === 'categories-list') layout = 'list';

  const categories = [
    { id: 1, name: 'Electronics', icon: '💻' },
    { id: 2, name: 'Clothing', icon: '👕' },
    { id: 3, name: 'Home', icon: '🏠' },
    { id: 4, name: 'Sports', icon: '⚽' },
  ];

  return (
    <div className="categories-block">
      <h3 className="section-title">{title}</h3>
      <div className={`categories-${layout}`}>
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
