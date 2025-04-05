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
  if (size === 'small' && variant === 'primary') {
    return (
      <button
        type="button"
        className="share-button-base share-button-small share-button-primary"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else if (size === 'small' && variant === 'secondary') {
    return (
      <button
        type="button"
        className="share-button-base share-button-small share-button-secondary"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else if (size === 'small' && variant === 'none') {
    return (
      <button
        type="button"
        className="share-button-base share-button-small share-button-none"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else if (size === 'medium' && variant === 'primary') {
    return (
      <button
        type="button"
        className="share-button-base share-button-medium share-button-primary"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else if (size === 'medium' && variant === 'secondary') {
    return (
      <button
        type="button"
        className="share-button-base share-button-medium share-button-secondary"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else if (size === 'medium' && variant === 'none') {
    return (
      <button
        type="button"
        className="share-button-base share-button-medium share-button-none"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else if (size === 'large' && variant === 'primary') {
    return (
      <button
        type="button"
        className="share-button-base share-button-large share-button-primary"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else if (size === 'large' && variant === 'secondary') {
    return (
      <button
        type="button"
        className="share-button-base share-button-large share-button-secondary"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  } else {
    // large + none
    return (
      <button
        type="button"
        className="share-button-base share-button-large share-button-none"
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    );
  }
}; 

export default ShareButton;