import React from 'react';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = false,
  size = 'medium', 
  label,
  ...props
}) => {
  const sizeStyle = size === 'small' 
    ? 'p-2 text-sm'
    : size === 'large'
    ? 'p-4 text-lg'
    : 'p-8 text-base';

  const variantStyle = primary
    ? 'bg-red-500 text-white hover:bg-red-600'
    : 'bg-green-200 text-gray-800 hover:bg-gray-300';

  return (
    <button
      type="button"
      className={`cursor-pointer font-semibold rounded transition-colors duration-200 ${sizeStyle} ${variantStyle}`}
      {...props}
    >
      {label}
    </button>
  );
}; 