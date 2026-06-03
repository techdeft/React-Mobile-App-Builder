import React from 'react';
import { BlockInstance } from '../../types/schema';
import { BLOCK_REGISTRY } from '../../registry/blocks';
import './SettingsPanel.css';

interface SettingsPanelProps {
  selectedBlock: BlockInstance | null;
  onUpdateSettings: (settings: Record<string, any>) => void;
}

export function SettingsPanel({ selectedBlock, onUpdateSettings }: SettingsPanelProps) {
  if (!selectedBlock) {
    return (
      <div className="settings-panel empty-state">
        <div className="empty-icon">⚙️</div>
        <p>Select a block on the canvas to configure its settings.</p>
      </div>
    );
  }

  const schema = BLOCK_REGISTRY[selectedBlock.type];
  if (!schema) return null;

  const handleChange = (key: string, value: any) => {
    onUpdateSettings({
      ...selectedBlock.settings,
      [key]: value
    });
  };

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <span className="settings-icon">{schema.icon}</span>
        <h3>{schema.name}</h3>
      </div>
      
      <div className="settings-form">
        {Object.entries(schema.fields).map(([key, field]) => {
          const value = selectedBlock.settings[key] || '';
          
          return (
            <div key={key} className="form-group">
              <label>{field.label}</label>
              
              {field.type === 'text' && (
                <input 
                  type="text" 
                  value={value} 
                  onChange={(e) => handleChange(key, e.target.value)} 
                />
              )}
              
              {field.type === 'textarea' && (
                <textarea 
                  value={value} 
                  onChange={(e) => handleChange(key, e.target.value)}
                  rows={3}
                />
              )}
              
              {field.type === 'color' && (
                <div className="color-picker-wrapper">
                  <input 
                    type="color" 
                    value={value} 
                    onChange={(e) => handleChange(key, e.target.value)} 
                  />
                  <span className="color-value">{value}</span>
                </div>
              )}
              
              {field.type === 'select' && field.options && (
                <select 
                  value={value} 
                  onChange={(e) => handleChange(key, e.target.value)}
                >
                  {field.options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              )}
              
              {field.type === 'number' && (
                <input 
                  type="number" 
                  value={value} 
                  onChange={(e) => handleChange(key, parseInt(e.target.value, 10))} 
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
