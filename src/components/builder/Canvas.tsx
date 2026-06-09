import React, { useState } from 'react';
import { Frame, Element } from '@craftjs/core';
import { Container } from '../primitives/Container';
import { Text } from '../primitives/Text';
import './Canvas.css';

export function Canvas() {
  const [previewMode, setPreviewMode] = useState<'mobile' | 'web'>('mobile');

  return (
    <div className="canvas-container">
      <div className="canvas-toolbar">
        <button 
          className={`toggle-btn ${previewMode === 'mobile' ? 'active' : ''}`}
          onClick={() => setPreviewMode('mobile')}
        >
          📱 Mobile
        </button>
        <button 
          className={`toggle-btn ${previewMode === 'web' ? 'active' : ''}`}
          onClick={() => setPreviewMode('web')}
        >
          💻 Web
        </button>
      </div>

      <div className={`device-frame ${previewMode === 'web' ? 'desktop-frame' : ''}`}>
        {previewMode === 'mobile' && <div className="device-notch"></div>}
        <div className="device-screen" style={{ overflow: 'auto', background: '#f5f7f9' }}>
          <Frame>
            <Element is={Container} padding={20} canvas style={{ minHeight: '100%', background: '#f5f7f9' }}>
              <Text text="Drag elements here to start building" />
            </Element>
          </Frame>
        </div>
      </div>
    </div>
  );
}
