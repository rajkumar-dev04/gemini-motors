/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { APP_LOGOS } from '../data';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = "h-11 w-auto", showText = true }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // High-fidelity vector SVG reproduction of the user's logo
  // This serves as an infallible, crisp fallback if the Google User Content URL is blocked
  // by sandboxed iframe CSP, referrer policies, or network issues.
  const renderSvgFallback = () => (
    <svg 
      className={`${className} aspect-square`}
      viewBox="0 0 500 500" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Continuous gradient matching the exact purple-pink-orange-yellow palette of the upload */}
        <linearGradient id="geminiRingGradient" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#B5179E" />   {/* Purple/Violet */}
          <stop offset="30%" stopColor="#F72585" />  {/* Magenta/Pink */}
          <stop offset="65%" stopColor="#FF9F1C" />  {/* Warm Orange */}
          <stop offset="100%" stopColor="#FFD166" /> {/* Golden Yellow */}
        </linearGradient>
      </defs>

      {/* Outer circular gradient ring */}
      <circle 
        cx="250" 
        cy="250" 
        r="232" 
        stroke="url(#geminiRingGradient)" 
        strokeWidth="16" 
      />

      {/* "GM" monogram in a elegant serif typeface with custom ligature styling */}
      <text 
        x="245" 
        y="285" 
        textAnchor="middle" 
        fill="#0072F5" 
        fontFamily="Georgia, 'Times New Roman', serif" 
        fontSize="210" 
        fontWeight="800"
        letterSpacing="-12"
      >
        GM
      </text>

      {/* "GEMINI MOTORS" sub-text inside the circular layout */}
      <text 
        x="250" 
        y="370" 
        textAnchor="middle" 
        fill="#0072F5" 
        fontFamily="Georgia, 'Times New Roman', serif" 
        fontSize="34" 
        fontWeight="bold"
        letterSpacing="2"
      >
        GEMINI MOTORS
      </text>
    </svg>
  );

  if (imageError) {
    return renderSvgFallback();
  }

  return (
    <div className="relative flex items-center justify-center">
      <img 
        src={APP_LOGOS.header} 
        alt="Gemini Motors Logo" 
        className={className}
        onError={() => setImageError(true)}
        referrerPolicy="no-referrer"
      />
      
      {/* Invisible preloader for the SVG to ensure smooth swap-in if needed */}
      <span className="sr-only">
        {imageError ? 'Fallback active' : 'Loading logo'}
      </span>
    </div>
  );
}
