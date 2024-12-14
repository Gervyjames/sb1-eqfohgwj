import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  return (
    <a
      href={href}
      className={`hover:text-blue-400 transition duration-200 ${className}`}
    >
      {children}
    </a>
  );
}