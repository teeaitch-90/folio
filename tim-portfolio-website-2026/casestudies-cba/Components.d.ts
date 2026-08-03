// Components.d.ts — the complete catalog of the 3 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Badge) and usable directly in JSX.
import * as React from 'react';

// figma layer: "Badge 🛑" (node 21:8999)
export interface BadgeProps {
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  size?: "m";
  kind?: "default" | "subtle";
  state?: "default" | "blue" | "gold";
}

// figma layer: "CBA" (node 33:5319)
export interface CBAProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "cta-button" (node 5:22)
export interface CtaButtonProps {
  className?: string;
  style?: React.CSSProperties;
  leftIcon?: boolean;
  style2?: "primary" | "secondary";
  rightIcon?: boolean;
  state?: "default" | "hover";
  /** Text content; defaults to "Label". */
  text1?: string;
}

declare const Badge: React.FC<BadgeProps>;
declare const CBA: React.FC<CBAProps>;
declare const CtaButton: React.FC<CtaButtonProps>;
declare global {
  interface Window {
    Badge: React.FC<BadgeProps>;
    CBA: React.FC<CBAProps>;
    CtaButton: React.FC<CtaButtonProps>;
  }
}
