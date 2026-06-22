import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

export default function Logo({ className = "", iconOnly = false }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* SVG Network Icon */}
      <svg
        width="38"
        height="38"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-blue-500 flex-shrink-0"
      >
        {/* Connection Lines */}
        <line
          x1="25"
          y1="50"
          x2="65"
          y2="25"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="50"
          x2="70"
          y2="50"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="25"
          y1="50"
          x2="60"
          y2="75"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Nodes (Circles) */}
        {/* Main Central Node */}
        <circle
          cx="25"
          cy="50"
          r="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="7"
        />
        <circle cx="25" cy="50" r="6" fill="currentColor" />

        {/* Branch Nodes */}
        <circle cx="65" cy="25" r="9" fill="currentColor" />
        <circle cx="70" cy="50" r="9" fill="currentColor" />
        <circle cx="60" cy="75" r="9" fill="currentColor" />
      </svg>

      {/* Brand Text */}
      {!iconOnly && (
        <div className="flex flex-col leading-none font-sans">
          <span className="text-[17px] font-medium tracking-[0.12em] text-slate-800 dark:text-white leading-tight">
            DIGITAL
          </span>
          <span className="text-[18px] font-black tracking-[0.06em] text-blue-600 dark:text-blue-400 leading-tight">
            NETWORK
          </span>
        </div>
      )}
    </div>
  );
}
