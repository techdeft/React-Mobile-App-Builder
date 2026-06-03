import React from 'react';

interface HeroBannerProps {
  type: string;
  settings: Record<string, any>;
}

export function HeroBanner({ type, settings }: HeroBannerProps) {
  const { title, subtitle, buttonText, backgroundColor, textColor } = settings;

  const isLeft = type === 'hero-banner-left';
  const isSplit = type === 'hero-banner-split';
  const isMinimal = type === 'hero-banner-minimal';
  const isImageBg = type === 'hero-banner-image-bg';
  const isGradient = type === 'hero-banner-gradient';

  let bgImageStyle = {};
  if (isImageBg) {
    bgImageStyle = {
      backgroundImage: 'url(https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    };
  } else if (isGradient) {
    bgImageStyle = {
      backgroundImage: `linear-gradient(135deg, ${backgroundColor}, #2b3266)`,
    };
  }

  // Preline/Tailwind powered Hero Section
  return (
    <div 
      className={`relative overflow-hidden w-full ${isMinimal ? 'py-12' : 'py-16 sm:py-24'}`}
      style={{
        backgroundColor: (!isImageBg && !isGradient) ? (backgroundColor || '#5e6ad2') : 'transparent',
        color: textColor || '#ffffff',
        ...bgImageStyle
      }}
    >
      {/* Overlay for image background to ensure text is readable */}
      {isImageBg && <div className="absolute inset-0 bg-black/50 z-0"></div>}

      <div className={`relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 ${isSplit ? 'lg:flex lg:items-center lg:gap-8' : ''}`}>
        
        {/* Content Container */}
        <div className={`${isSplit ? 'lg:w-1/2' : 'w-full'} ${isLeft || isSplit ? 'text-left' : 'text-center'}`}>
          <h1 className={`font-bold ${isMinimal ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl'} tracking-tight`}>
            {title}
          </h1>
          <p className={`mt-4 ${isMinimal ? 'text-sm sm:text-base' : 'text-lg sm:text-xl'} opacity-90 max-w-2xl ${isLeft || isSplit ? '' : 'mx-auto'}`}>
            {subtitle}
          </p>
          
          <div className={`mt-8 flex gap-3 ${isLeft || isSplit ? 'justify-start' : 'justify-center'}`}>
            <button 
              className="inline-flex justify-center items-center gap-x-3 text-center bg-white text-blue-600 hover:bg-gray-50 border border-transparent font-medium rounded-full py-3 px-6 transition hover:scale-105 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ color: backgroundColor, backgroundColor: textColor }}
            >
              {buttonText}
              <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Split Image Container */}
        {isSplit && (
          <div className="hidden lg:block lg:w-1/2 mt-10 lg:mt-0">
            <div className="bg-white/10 rounded-2xl p-4 flex items-center justify-center h-64 border border-white/20 backdrop-blur-sm">
              <span className="text-6xl">🖼️</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
