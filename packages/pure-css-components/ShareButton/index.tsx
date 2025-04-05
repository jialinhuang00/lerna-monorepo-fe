import React from 'react';
import './index.css';

export interface ShareButtonProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'none';
  label: string;
  onClick?: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({
  size = 'medium',
  variant = 'none',
  label,
  onClick,
  ...props
}) => {
  const className = `button-base button-${size} button-${variant}`;

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};

export default ShareButton;