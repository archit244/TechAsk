import React from "react";

/**
 * GradientText Component
 * A high-performance animated gradient text component.
 */
export default function GradientText({
  children,
  className = "",
  colors = ["#2563EB", "#7C3AED", "#2563EB"],
  animationSpeed = 6,
  showAnimation = true,
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: showAnimation ? `${animationSpeed}s` : '0s',
    animationName: showAnimation ? 'gradient-animation' : 'none',
  };

  return (
    <span 
      className={`animated-gradient-text-content ${className}`}
      style={gradientStyle}
    >
      {children}
    </span>
  );
}
