import React from "react";

export default function LogoLumi({
  variant = "dark",
  size = 28
}: { variant?: "dark" | "light"; size?: number }) {
  const isLight = variant === "light";
  const textColor = isLight ? "#FFFFFF" : "#111827"; // brand.ink
  const accent = isLight ? "#FFFFFF" : "#2B6CB0";    // brand.royal

  return (
    <div style={{display:"inline-flex",alignItems:"center",gap:10}} aria-label="Lumi Web" title="Lumi Web">
      {/* Inline Aegis Hex (Facet) for crisp rendering */}
      <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="lumiGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2B6CB0" />
            <stop offset="100%" stopColor="#D4A72C" />
          </linearGradient>
        </defs>
        <path d="M32 4 L56 16 L56 48 L32 60 L8 48 L8 16 Z"
              fill="#1F2937" stroke="url(#lumiGrad)" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M32 10 L50 19 L50 45 L32 54 L14 45 L14 19 Z"
              fill="none" stroke="#2B6CB0" strokeOpacity="0.35" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M14 19 L50 45" stroke="#D4A72C" strokeOpacity="0.25" strokeWidth="2" />
        <path d="M50 19 L14 45" stroke="#FFFFFF" strokeOpacity="0.12" strokeWidth="2" />
        <path d="M22 18 V44 H42" fill="none" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <span style={{
        fontFamily:"Syncopate, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
        fontWeight:700, letterSpacing:"1px", fontSize:20, color:textColor
      }}>
        LUMI <span style={{color: accent, opacity: isLight ? .92 : 1}}>WEB</span>
      </span>
    </div>
  );
}