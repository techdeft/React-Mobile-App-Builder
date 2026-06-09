import React from 'react';
import { useEditor } from '@craftjs/core';
import './SettingsPanel.css';

export function SettingsPanel() {
  const { selected, actions } = useEditor((state) => {
    const [currentNodeId] = state.events.selected;
    let selected;

    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        isDeletable: state.nodes[currentNodeId].rules.canDrag(),
        props: state.nodes[currentNodeId].data.props,
      };
    }

    return { selected };
  });

  if (!selected) {
    return (
      <div className="settings-panel empty-state">
        <div className="empty-icon">⚙️</div>
        <p>Select a component to configure its settings.</p>
      </div>
    );
  }

  const handlePropChange = (key: string, value: any) => {
    actions.setProp(selected.id, (props: any) => {
      props[key] = value;
    });
  };

  return (
    <div className="settings-panel">
      <div className="settings-header">
        <h3>{selected.name}</h3>
        {selected.isDeletable && (
          <button 
            className="delete-btn" 
            onClick={() => actions.delete(selected.id)}
            style={{ color: 'red', cursor: 'pointer', background: 'none', border: 'none', marginLeft: 'auto' }}
          >
            Delete
          </button>
        )}
      </div>
      
      <div className="settings-form">
        {Object.entries(selected.props).map(([key, value]) => {
          if (key === 'children') return null;
          
          return (
            <div key={key} className="form-group" style={{ marginBottom: 15 }}>
              <label style={{ display: 'block', marginBottom: 5, fontSize: 12, fontWeight: 600, color: '#666', textTransform: 'capitalize' }}>
                {key}
              </label>
              {(typeof value === 'string' && value.startsWith('#')) ? (
                <div className="color-picker-wrapper" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <input 
                    type="color" 
                    value={value} 
                    onChange={(e) => handlePropChange(key, e.target.value)} 
                    style={{ width: 30, height: 30, padding: 0, border: 'none', borderRadius: 4 }}
                  />
                  <span className="color-value" style={{ fontFamily: 'monospace', fontSize: 12 }}>{value}</span>
                </div>
              ) : typeof value === 'number' ? (
                <input 
                  type="number" 
                  value={value as number} 
                  onChange={(e) => handlePropChange(key, parseFloat(e.target.value))} 
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 4, border: '1px solid #ddd' }}
                />
              ) : (
                <input 
                  type="text" 
                  value={value as string} 
                  onChange={(e) => handlePropChange(key, e.target.value)} 
                  style={{ width: '100%', padding: '8px 12px', borderRadius: 4, border: '1px solid #ddd' }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
