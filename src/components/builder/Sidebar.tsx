import React from 'react';
import { useEditor, Element } from '@craftjs/core';
import { Container } from '../primitives/Container';
import { Text } from '../primitives/Text';
import { Button } from '../primitives/Button';
import './Sidebar.css';

export function Sidebar() {
  const { connectors } = useEditor();

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>UI Elements</h3>
        <p>Drag to add to canvas</p>
      </div>
      
      <div className="category-list">
        <div className="category-folder">
          <div className="category-header open">
            <span className="folder-icon">📂</span>
            <span className="category-name">Primitives</span>
          </div>
          
          <div className="block-list">
            <div 
              className="block-item"
              ref={(ref) => { if (ref) connectors.create(ref, <Element is={Container} padding={20} canvas />); }}
            >
              <div className="block-item-footer">
                <span className="block-icon">🔲</span>
                <div className="block-info">
                  <span className="block-name">Container</span>
                </div>
              </div>
            </div>

            <div 
              className="block-item"
              ref={(ref) => { if (ref) connectors.create(ref, <Text text="New Text" />); }}
            >
              <div className="block-item-footer">
                <span className="block-icon">T</span>
                <div className="block-info">
                  <span className="block-name">Text</span>
                </div>
              </div>
            </div>

            <div 
              className="block-item"
              ref={(ref) => { if (ref) connectors.create(ref, <Button text="Click Me" />); }}
            >
              <div className="block-item-footer">
                <span className="block-icon">B</span>
                <div className="block-info">
                  <span className="block-name">Button</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
