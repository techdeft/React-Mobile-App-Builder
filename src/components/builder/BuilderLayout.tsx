import React from 'react';
import { Editor } from '@craftjs/core';
import { Sidebar } from './Sidebar';
import { Canvas } from './Canvas';
import { SettingsPanel } from './SettingsPanel';
import { Container } from '../primitives/Container';
import { Text } from '../primitives/Text';
import { Button } from '../primitives/Button';
import './BuilderLayout.css';

export function BuilderLayout() {
  return (
    <div className="builder-layout">
      <header className="builder-header">
        <div className="logo">React<span>Flow</span></div>
        <div className="header-actions">
          <button className="btn-primary">Save App</button>
        </div>
      </header>
      
      <div className="builder-workspace">
        <Editor resolver={{ Container, Text, Button }}>
          <Sidebar />
          <Canvas />
          <SettingsPanel />
        </Editor>
      </div>
    </div>
  );
}
