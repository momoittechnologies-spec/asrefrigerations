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
  width = 204,
  height = 59,
  analyticsLabel = 'Google Play Customer App'
}) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={analyticsLabel}
      title="Get AS Refrigerations on Google Play Store"
      className={`inline-block transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95 drop-shadow-md hover:drop-shadow-[0_8px_16px_rgba(0,210,255,0.25)] rounded-[10px] overflow-hidden ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
    >
      <img
        src="/google-play-badge.svg"
        alt="Get it on Google Play"
        className="w-full h-full object-contain select-none"
        loading="lazy"
        width={typeof width === 'number' ? width : 204}
        height={typeof height === 'number' ? height : 59}
      />
    </a>
  );
};

export default GooglePlayBadge;
