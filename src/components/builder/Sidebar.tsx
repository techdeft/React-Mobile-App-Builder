import React from 'react';
import { BLOCK_REGISTRY } from '../../registry/blocks';
import './Sidebar.css';

interface SidebarProps {
  onAddBlock: (type: string) => void;
}

export function Sidebar({ onAddBlock }: SidebarProps) {
  const blocks = Object.values(BLOCK_REGISTRY);
  
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Add Blocks</h3>
        <p>Drag or click to add</p>
      </div>
      
      <div className="block-list">
        {blocks.map((block) => (
          <div 
            key={block.type} 
            className="block-item"
            onClick={() => onAddBlock(block.type)}
          >
            <span className="block-icon">{block.icon}</span>
            <div className="block-info">
              <span className="block-name">{block.name}</span>
              <span className="block-category">{block.category}</span>
            </div>
            <button className="add-btn">+</button>
          </div>
        ))}
      </div>
    </div>
  );
}
