import React from 'react';
import { BlockInstance } from '../../types/schema';
import { BlockRenderer } from '../blocks/BlockRenderer';
import './Canvas.css';

interface CanvasProps {
  blocks: BlockInstance[];
  selectedBlockId: string | null;
  onSelectBlock: (id: string) => void;
  onDeleteBlock: (id: string) => void;
  onMoveBlock: (index: number, direction: 'up' | 'down') => void;
}

export function Canvas({ 
  blocks, 
  selectedBlockId, 
  onSelectBlock, 
  onDeleteBlock,
  onMoveBlock
}: CanvasProps) {
  return (
    <div className="canvas-container">
      <div className="device-frame">
        <div className="device-notch"></div>
        <div className="device-screen">
          {blocks.length === 0 ? (
            <div className="empty-canvas">
              <div className="empty-icon">📱</div>
              <p>Add blocks from the library to start building your app screen.</p>
            </div>
          ) : (
            <div className="blocks-container">
              {blocks.map((block, index) => (
                <div 
                  key={block.id} 
                  className={`block-wrapper ${selectedBlockId === block.id ? 'selected' : ''}`}
                  onClick={() => onSelectBlock(block.id)}
                >
                  <BlockRenderer block={block} />
                  
                  {selectedBlockId === block.id && (
                    <div className="block-controls">
                      <button 
                        className="control-btn" 
                        onClick={(e) => { e.stopPropagation(); onMoveBlock(index, 'up'); }}
                        disabled={index === 0}
                      >
                        ↑
                      </button>
                      <button 
                        className="control-btn" 
                        onClick={(e) => { e.stopPropagation(); onMoveBlock(index, 'down'); }}
                        disabled={index === blocks.length - 1}
                      >
                        ↓
                      </button>
                      <button 
                        className="control-btn delete" 
                        onClick={(e) => { e.stopPropagation(); onDeleteBlock(block.id); }}
                      >
                        ×
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
