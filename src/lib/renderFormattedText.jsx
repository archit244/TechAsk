import React from 'react';
import GradientText from '../components/GradientText';

export function renderFormattedText(text, gradientColors = ["#2563EB", "#7C3AED", "#2563EB"], animationSpeed = 8) {
  if (!text) return null;
  
  // Splits and captures both [gradient] and {whitebox} syntax
  const parts = text.split(/(\[.*?\]|\{.*?\})/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      const content = part.slice(1, -1);
      return (
        <GradientText 
          key={index}
          colors={gradientColors}
          showAnimation={animationSpeed > 0}
          animationSpeed={animationSpeed}
          className="pb-1"
        >
          {content}
        </GradientText>
      );
    } else if (part.startsWith('{') && part.endsWith('}')) {
      const content = part.slice(1, -1);
      return (
        <span key={index} style={{ 
          backgroundColor: '#FFFFFF', 
          color: '#2563EB', 
          padding: '0 12px', 
          borderRadius: '8px', 
          display: 'inline-block',
          marginTop: '4px',
          marginBottom: '4px'
        }}>
          {content}
        </span>
      );
    }
    return <span key={index}>{part}</span>;
  });
}
