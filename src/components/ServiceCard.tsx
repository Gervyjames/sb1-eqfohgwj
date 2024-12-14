import React from 'react';

interface ServiceCardProps {
  title: string;
  onClick: () => void;
}

export function ServiceCard({ title, onClick }: ServiceCardProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-black hover:bg-gray-900 text-white py-4 px-6 rounded-lg transition duration-300 text-center"
    >
      {title}
    </button>
  );
}