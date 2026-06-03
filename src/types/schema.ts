export type FieldType = 'text' | 'textarea' | 'image' | 'color' | 'select' | 'number';

export interface FieldSchema {
  type: FieldType;
  label: string;
  default?: any;
  options?: { label: string; value: string }[]; // For select fields
}

export interface BlockSchema {
  type: string; // e.g. 'hero-banner'
  name: string; // e.g. 'Hero Banner'
  category: string;
  icon: string; // an SVG or emoji representation
  fields: Record<string, FieldSchema>;
}

export interface BlockInstance {
  id: string; // Unique ID for the block instance
  type: string; // Maps to BlockSchema type
  settings: Record<string, any>; // User configured values matching the fields
}

export interface ScreenData {
  id: string;
  name: string;
  blocks: BlockInstance[];
}
