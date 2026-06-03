import React from 'react';

interface NavbarHeaderProps {
  type: string;
  settings: Record<string, any>;
}

export function NavbarHeader({ type, settings }: NavbarHeaderProps) {
  const { 
    logoText, 
    links, 
    buttonText,
    navbarBgColor,
    logoBgColor,
    textColor,
    activeTextColor,
    textSize,
    buttonColor,
    buttonTextColor,
    buttonTextSize,
    borderRadius
  } = settings;

  // Split comma separated links into array
  const navLinks = (links || '').split(',').map((l: string) => l.trim()).filter(Boolean);

  const isBasic = type === 'navbar-basic';
  const isCentered = type === 'navbar-centered';
  const isMinimal = type === 'navbar-minimal';

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full py-4" style={{ backgroundColor: navbarBgColor || '#ffffff' }}>
      <nav className={`max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center ${isCentered ? 'sm:justify-between' : 'sm:justify-between'}`} aria-label="Global">
        
        {/* Basic & Minimal Navbar Structure */}
        {(isBasic || isMinimal) && (
          <>
            <div className="flex items-center justify-between">
              <a 
                className="flex-none text-xl font-bold px-2 py-1 rounded-md" 
                href="#"
                style={{ backgroundColor: logoBgColor === 'transparent' ? undefined : logoBgColor, color: textColor }}
              >
                {logoText}
              </a>
            </div>
            
            <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
              {navLinks.map((link: string, idx: number) => (
                <a 
                  key={idx} 
                  className="font-medium hover:opacity-80 transition" 
                  href="#" 
                  aria-current={idx === 0 ? 'page' : undefined}
                  style={{ 
                    color: idx === 0 ? (activeTextColor || '#3b82f6') : (textColor || '#4b5563'),
                    fontSize: textSize ? `${textSize}px` : '14px'
                  }}
                >
                  {link}
                </a>
              ))}
              
              {!isMinimal && buttonText && (
                <a 
                  className="py-2 px-4 inline-flex items-center gap-x-2 font-medium hover:opacity-90 transition" 
                  href="#"
                  style={{
                    backgroundColor: buttonColor || '#2563eb',
                    color: buttonTextColor || '#ffffff',
                    borderRadius: borderRadius ? `${borderRadius}px` : '8px',
                    fontSize: buttonTextSize ? `${buttonTextSize}px` : (textSize ? `${textSize}px` : '14px')
                  }}
                >
                  {buttonText}
                </a>
              )}
            </div>
          </>
        )}

        {/* Centered Navbar Structure */}
        {isCentered && (
          <div className="w-full flex items-center justify-between">
            {/* Left Links */}
            <div className="hidden sm:flex flex-row items-center gap-5">
              {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link: string, idx: number) => (
                <a 
                  key={idx} 
                  className="font-medium hover:opacity-80 transition" 
                  href="#"
                  style={{ 
                    color: idx === 0 ? (activeTextColor || '#3b82f6') : (textColor || '#4b5563'),
                    fontSize: textSize ? `${textSize}px` : '14px'
                  }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Center Logo */}
            <a 
              className="flex-none text-xl font-bold mx-auto sm:mx-0 px-2 py-1 rounded-md" 
              href="#"
              style={{ backgroundColor: logoBgColor === 'transparent' ? undefined : logoBgColor, color: textColor }}
            >
              {logoText}
            </a>

            {/* Right Links & Button */}
            <div className="hidden sm:flex flex-row items-center gap-5">
              {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link: string, idx: number) => (
                <a 
                  key={idx} 
                  className="font-medium hover:opacity-80 transition" 
                  href="#"
                  style={{ 
                    color: textColor || '#4b5563',
                    fontSize: textSize ? `${textSize}px` : '14px'
                  }}
                >
                  {link}
                </a>
              ))}
              {buttonText && (
                <a 
                  className="py-2 px-4 inline-flex items-center gap-x-2 font-medium hover:opacity-90 transition" 
                  href="#"
                  style={{
                    backgroundColor: buttonColor || '#2563eb',
                    color: buttonTextColor || '#ffffff',
                    borderRadius: borderRadius ? `${borderRadius}px` : '8px',
                    fontSize: buttonTextSize ? `${buttonTextSize}px` : (textSize ? `${textSize}px` : '14px')
                  }}
                >
                  {buttonText}
                </a>
              )}
            </div>
          </div>
        )}

      </nav>
    </header>
  );
}
