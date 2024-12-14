import React from 'react';

export function Link({ href, children, className = '' }) {
  const handleClick = (e) => {
    e.preventDefault();
    window.history.pushState({}, '', href);
    // Force a re-render by reloading the page
    window.location.reload();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`hover:text-blue-400 transition duration-200 ${className}`}
    >
      {children}
    </a>
  );
}