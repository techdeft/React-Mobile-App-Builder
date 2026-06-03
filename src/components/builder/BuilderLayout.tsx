import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Canvas } from './Canvas';
import { SettingsPanel } from './SettingsPanel';
import { BlockInstance } from '../../types/schema';
import { BLOCK_REGISTRY } from '../../registry/blocks';
import './BuilderLayout.css';

export function BuilderLayout() {
  const [blocks, setBlocks] = useState<BlockInstance[]>([]);
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const handleAddBlock = (blockType: string) => {
    const schema = BLOCK_REGISTRY[blockType];
    if (!schema) return;
    
    // Generate default settings from schema
    const defaultSettings: Record<string, any> = {};
    Object.entries(schema.fields).forEach(([key, field]) => {
      defaultSettings[key] = field.default;
    });

    const newBlock: BlockInstance = {
      id: `block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      type: blockType,
      settings: defaultSettings,
    };

    setBlocks([...blocks, newBlock]);
  };

  const handleUpdateBlock = (id: string, newSettings: Record<string, any>) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, settings: newSettings } : b));
  };

  const handleDeleteBlock = (id: string) => {
    setBlocks(blocks.filter(b => b.id !== id));
    if (selectedBlockId === id) {
      setSelectedBlockId(null);
    }
  };

  const handleMoveBlock = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === blocks.length - 1)
    ) return;
    
    const newBlocks = [...blocks];
    const swapIndex = direction === 'up' ? index - 1 : index + 1;
    const temp = newBlocks[index];
    newBlocks[index] = newBlocks[swapIndex];
    newBlocks[swapIndex] = temp;
    
    setBlocks(newBlocks);
  };

  const selectedBlock = blocks.find(b => b.id === selectedBlockId) || null;

  return (
    <div className="builder-layout">
      <header className="builder-header">
        <div className="logo">React<span>Flow</span></div>
        <div className="header-actions">
          <button className="btn-secondary" onClick={() => console.log(JSON.stringify(blocks, null, 2))}>
            View JSON
          </button>
          <button className="btn-primary">Save App</button>
        </div>
      </header>
      
      <div className="builder-workspace">
        <Sidebar onAddBlock={handleAddBlock} />
        
        <Canvas 
          blocks={blocks} 
          selectedBlockId={selectedBlockId}
          onSelectBlock={setSelectedBlockId}
          onDeleteBlock={handleDeleteBlock}
          onMoveBlock={handleMoveBlock}
        />
        
        <SettingsPanel 
          selectedBlock={selectedBlock} 
          onUpdateSettings={(settings) => selectedBlock && handleUpdateBlock(selectedBlock.id, settings)}
        />
      </div>
    </div>
  );
}
