import React from 'react';

interface GooglePlayBadgeProps {
  url?: string;
  className?: string;
  width?: number | string;
  height?: number | string;
  analyticsLabel?: string;
}

export const GooglePlayBadge: React.FC<GooglePlayBadgeProps> = ({
  url = 'https://play.google.com/store/apps/details?id=com.asrefrigerations.customer',
  className = '',
  width = '198.59px',
  height = '57.36px',
  analyticsLabel = 'Google Play Customer App'
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={analyticsLabel}
      title="Get AS Refrigerations on Google Play Store"
      className={`inline-flex items-center justify-center transition-all duration-300 hover:scale-[1.03] active:scale-95 drop-shadow-md hover:drop-shadow-[0_10px_20px_rgba(0,210,255,0.3)] rounded-[10px] overflow-hidden select-none cursor-pointer ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        maxWidth: '100%',
        aspectRatio: '198.59 / 57.36'
      }}
    >
      <img
        src="/google-play-badge.svg"
        alt="Get it on Google Play"
        className="w-full h-full object-contain pointer-events-none"
        loading="lazy"
        width="198.59"
        height="57.36"
      />
    </a>
  );
};

export default GooglePlayBadge;
