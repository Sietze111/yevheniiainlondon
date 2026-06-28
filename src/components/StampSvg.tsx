import React from "react";

export const GLYPHS: Record<string, string> = {
  train: `<rect x="20" y="24" width="24" height="14" rx="3"/><circle cx="26" cy="42" r="3"/><circle cx="38" cy="42" r="3"/><line x1="20" y1="31" x2="44" y2="31"/>`,
  marketArch: `<path d="M20 44V30a12 12 0 0 1 24 0v14"/><line x1="16" y1="44" x2="48" y2="44"/>`,
  bankFacade: `<path d="M18 20 L32 12 L46 20"/><line x1="22" y1="20" x2="22" y2="44"/><line x1="32" y1="20" x2="32" y2="44"/><line x1="42" y1="20" x2="42" y2="44"/><line x1="16" y1="44" x2="48" y2="44"/>`,
  bridgeCables: `<line x1="14" y1="40" x2="50" y2="40"/><line x1="32" y1="16" x2="32" y2="40"/><line x1="20" y1="40" x2="32" y2="20"/><line x1="44" y1="40" x2="32" y2="20"/>`,
  openBook: `<path d="M16 22c8-4 12-4 16 0v22c-4-4-8-4-16 0V22z"/><path d="M48 22c-8-4-12-4-16 0v22c4-4 8-4 16 0V22z"/>`,
  lantern: `<rect x="26" y="22" width="12" height="16" rx="2"/><line x1="32" y1="14" x2="32" y2="22"/><line x1="28" y1="38" x2="28" y2="44"/><line x1="36" y1="38" x2="36" y2="44"/><circle cx="32" cy="12" r="1.6"/>`,
  clapper: `<rect x="16" y="26" width="32" height="18" rx="2"/><path d="M16 26l6-8h32l-6 8"/><line x1="24" y1="18" x2="30" y2="26"/><line x1="34" y1="18" x2="40" y2="26"/>`,
  turret: `<rect x="20" y="26" width="24" height="18"/><path d="M20 26v-6h4v4h4v-4h8v4h4v-4h4v6"/>`,
  twinTowers: `<rect x="18" y="18" width="8" height="26"/><rect x="38" y="18" width="8" height="26"/><line x1="14" y1="44" x2="50" y2="44"/><line x1="26" y1="26" x2="38" y2="26"/>`,
  roseWindow: `<path d="M22 44V28a10 10 0 0 1 20 0v16"/><circle cx="32" cy="26" r="5"/>`,
  clockTower: `<rect x="26" y="20" width="12" height="24"/><circle cx="32" cy="24" r="4"/><path d="M22 20h20l-4-6h-12z"/>`,
  crown: `<path d="M18 40l4-14 8 8 2-12 2 12 8-8 4 14z"/><line x1="18" y1="40" x2="46" y2="40"/>`,
  urn: `<path d="M26 18h12v4c4 2 6 6 6 10 0 8-6 12-12 12s-12-4-12-12c0-4 2-8 6-10v-4z"/>`,
  ferrisWheel: `<circle cx="32" cy="32" r="14"/><line x1="32" y1="18" x2="32" y2="46"/><line x1="18" y1="32" x2="46" y2="32"/><line x1="22" y1="22" x2="42" y2="42"/><line x1="42" y1="22" x2="22" y2="42"/>`,
  dome: `<path d="M18 44a14 14 0 0 1 28 0z"/><line x1="32" y1="30" x2="32" y2="16"/><circle cx="32" cy="14" r="1.8"/>`,
  bolt: `<path d="M34 14l-14 18h10l-4 18 18-22h-10z"/>`,
  fern: `<path d="M32 46V18"/><path d="M32 34c0-10 10-14 14-14-2 8-6 12-14 14z"/><path d="M32 26c0-8-8-12-12-12 2 7 5 10 12 12z"/>`,
  boat: `<path d="M16 38h32l-4 8H20z"/><line x1="32" y1="38" x2="32" y2="18"/><path d="M32 18l10 8h-10z"/>`,
  arcs: `<path d="M16 40a16 16 0 0 1 32 0"/><path d="M21 40a11 11 0 0 1 22 0"/><line x1="12" y1="40" x2="52" y2="40"/>`,
  tulip: `<path d="M32 44V26"/><path d="M32 26c-6 0-10-4-10-10 6 0 10 4 10 10z"/><path d="M32 26c6 0 10-4 10-10-6 0-10 4-10 10z"/><path d="M32 26c-3-4-3-9 0-12 3 3 3 8 0 12z"/>`,
  frame: `<rect x="20" y="16" width="24" height="28" rx="1"/><rect x="25" y="21" width="14" height="18"/>`,
  cross: `<line x1="32" y1="14" x2="32" y2="44"/><line x1="22" y1="24" x2="42" y2="24"/>`,
  terrace: `<path d="M16 44V26l16-10 16 10v18z"/><rect x="27" y="32" width="10" height="12"/>`,
  magnifier: `<circle cx="28" cy="26" r="11"/><line x1="36" y1="34" x2="48" y2="46"/>`,
  bear: `<circle cx="32" cy="36" r="13"/><circle cx="19" cy="21" r="5.5"/><circle cx="45" cy="21" r="5.5"/><path d="M18 25c5-6 10-8 14-8s9 2 14 8"/>`,
  zebra: `<line x1="16" y1="18" x2="16" y2="46"/><line x1="24" y1="18" x2="24" y2="46"/><line x1="32" y1="18" x2="32" y2="46"/><line x1="40" y1="18" x2="40" y2="46"/><line x1="48" y1="18" x2="48" y2="46"/>`
};

export const COLORS = {
  magic: "#A8842C",
  classic: "#B6332B",
  gem: "#3E5C3A",
  lit: "#6B4E71"
};

export const CAT_LABEL = {
  magic: "Wizarding World",
  classic: "London Icon",
  gem: "Hidden Gem",
  lit: "Page & Screen"
};

interface StampSvgProps {
  cat: keyof typeof COLORS;
  glyph: string;
  size: number;
}

export const StampSvg: React.FC<StampSvgProps> = ({ cat, glyph, size }) => {
  const color = COLORS[cat];
  const glyphMarkup = GLYPHS[glyph] || "";

  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className="select-none">
      <circle cx="32" cy="32" r="30" fill="#FBF6E9" stroke="#1B2A4A" strokeWidth="2.5" />
      <g fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="32" cy="32" r="23.5" strokeDasharray="2.2 3.4" />
        <circle cx="32" cy="32" r="19" />
        <g dangerouslySetInnerHTML={{ __html: glyphMarkup }} />
      </g>
    </svg>
  );
};
