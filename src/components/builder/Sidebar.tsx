import React, { useState } from 'react';
import { BLOCK_REGISTRY } from '../../registry/blocks';
import './Sidebar.css';

interface SidebarProps {
  onAddBlock: (type: string) => void;
}

export function Sidebar({ onAddBlock }: SidebarProps) {
  const blocks = Object.values(BLOCK_REGISTRY);
  
  // Group blocks by category
  const groupedBlocks = blocks.reduce((acc, block) => {
    if (!acc[block.category]) {
      acc[block.category] = [];
    }
    acc[block.category].push(block);
    return acc;
  }, {} as Record<string, typeof blocks>);

  const [openCategory, setOpenCategory] = useState<string | null>('Headers');

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Add Blocks</h3>
        <p>Drag or click to add</p>
      </div>
      
      <div className="category-list">
        {Object.entries(groupedBlocks).map(([category, categoryBlocks]) => (
          <div key={category} className="category-folder">
            <div 
              className={`category-header ${openCategory === category ? 'open' : ''}`}
              onClick={() => toggleCategory(category)}
            >
              <span className="folder-icon">{openCategory === category ? '📂' : '📁'}</span>
              <span className="category-name">{category}</span>
              <span className="category-count">{categoryBlocks.length}</span>
              <span className="chevron">{openCategory === category ? '▼' : '▶'}</span>
            </div>
            
            {openCategory === category && (
              <div className="block-list">
                {categoryBlocks.map((block) => (
                  <div 
                    key={block.type} 
                    className="block-item"
                    onClick={() => onAddBlock(block.type)}
                  >
                    {block.previewImage ? (
                      <div className="block-preview-img">
                        <img src={block.previewImage} alt={block.name} />
                      </div>
                    ) : null}
                    <div className="block-item-footer">
                      <span className="block-icon">{block.icon}</span>
                      <div className="block-info">
                        <span className="block-name">{block.name}</span>
                      </div>
                      <button className="add-btn">+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
