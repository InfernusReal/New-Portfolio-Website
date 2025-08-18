import React from 'react';

const Logo = ({ size = 40, className = "" }) => {
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="drop-shadow-lg"
      >
        {/* White circle background */}
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="white" 
          stroke="#e5e7eb" 
          strokeWidth="2"
          className="drop-shadow-sm"
        />
        
        {/* Blended S and F logo */}
        <g transform="translate(50, 50)">
          {/* S part - curved on the left */}
          <path
            d="M -18 -20 
               C -25 -20, -30 -15, -30 -8
               C -30 -1, -25 4, -18 4
               L -5 4
               C 2 4, 7 9, 7 16
               C 7 23, 2 28, -5 28
               L -15 28"
            stroke="black"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* F part - integrated with S */}
          <g transform="translate(5, 0)">
            {/* F vertical line */}
            <line
              x1="0"
              y1="-20"
              x2="0"
              y2="28"
              stroke="black"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* F top horizontal line */}
            <line
              x1="0"
              y1="-20"
              x2="20"
              y2="-20"
              stroke="black"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            {/* F middle horizontal line */}
            <line
              x1="0"
              y1="2"
              x2="15"
              y2="2"
              stroke="black"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </g>
          
          {/* Connection/blend element */}
          <path
            d="M -5 4 Q 0 0, 5 -5"
            stroke="black"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
        </g>
        
        {/* Subtle gradient overlay for depth */}
        <defs>
          <radialGradient id="logoGradient" cx="30%" cy="30%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.05)" />
          </radialGradient>
        </defs>
        <circle 
          cx="50" 
          cy="50" 
          r="48" 
          fill="url(#logoGradient)" 
        />
      </svg>
    </div>
  );
};

export default Logo;
