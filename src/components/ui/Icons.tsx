import React from "react";

export const ShieldCheck = ({ className="w-5 h-5", stroke="currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L20 6v7c0 3.5-3.5 6.5-8 9-4.5-2.5-8-5.5-8-9V6l8-4z" fill="none" stroke={stroke} strokeWidth="1.8"/>
    <path d="M7.6 12.6l2.9 2.9 5.9-5.9" stroke={stroke} strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Handshake = ({ className="w-5 h-5", stroke="currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 12l3-3 3 3 1.5-1.5a3 3 0 114.2 4.2l-3.2 3.2a4 4 0 01-5.6 0L7 14" stroke={stroke} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 9l5 5M22 9l-5 5" stroke={stroke} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

export const GlobeCursor = ({ className="w-5 h-5", stroke="currentColor" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="8" stroke={stroke} strokeWidth="1.8"/>
    <path d="M2 10h16M10 2c2.5 2.4 2.5 13.6 0 16M15.5 15.5L22 22" stroke={stroke} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);