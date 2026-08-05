// Components.d.ts — the complete catalog of the 2 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.CtaButton) and usable directly in JSX.
import * as React from 'react';

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

// figma layer: "Westpac" (node 72:5503)
export interface WestpacProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const CtaButton: React.FC<CtaButtonProps>;
declare const Westpac: React.FC<WestpacProps>;
declare global {
  interface Window {
    CtaButton: React.FC<CtaButtonProps>;
    Westpac: React.FC<WestpacProps>;
  }
}
