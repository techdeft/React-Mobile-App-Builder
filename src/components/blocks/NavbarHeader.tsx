import React from 'react';

interface NavbarHeaderProps {
  type: string;
  settings: Record<string, any>;
}

export function NavbarHeader({ type, settings }: NavbarHeaderProps) {
  const { logoText, links, buttonText } = settings;

  // Split comma separated links into array
  const navLinks = (links || '').split(',').map((l: string) => l.trim()).filter(Boolean);

  const isBasic = type === 'navbar-basic';
  const isCentered = type === 'navbar-centered';
  const isMinimal = type === 'navbar-minimal';

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-4 dark:bg-neutral-800">
      <nav className={`max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center ${isCentered ? 'sm:justify-between' : 'sm:justify-between'}`} aria-label="Global">
        
        {/* Basic & Minimal Navbar Structure */}
        {(isBasic || isMinimal) && (
          <>
            <div className="flex items-center justify-between">
              <a className="flex-none text-xl font-semibold dark:text-white" href="#">{logoText}</a>
            </div>
            
            <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
              {navLinks.map((link: string, idx: number) => (
                <a key={idx} className={`font-medium ${idx === 0 ? 'text-blue-500' : 'text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500'}`} href="#" aria-current={idx === 0 ? 'page' : undefined}>
                  {link}
                </a>
              ))}
              
              {!isMinimal && buttonText && (
                <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700" href="#">
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
                <a key={idx} className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
                  {link}
                </a>
              ))}
            </div>

            {/* Center Logo */}
            <a className="flex-none text-xl font-semibold dark:text-white mx-auto sm:mx-0" href="#">{logoText}</a>

            {/* Right Links & Button */}
            <div className="hidden sm:flex flex-row items-center gap-5">
              {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link: string, idx: number) => (
                <a key={idx} className="font-medium text-gray-600 hover:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500" href="#">
                  {link}
                </a>
              ))}
              {buttonText && (
                <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700" href="#">
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
