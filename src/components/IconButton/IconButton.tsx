import React from 'react';
import { motion } from 'framer-motion';
import './IconButton.scss';

interface IconButtonProps {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'ghost' | 'outline';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  'aria-label'?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon: Icon,
  onClick,
  size = 'md',
  variant = 'default',
  disabled = false,
  className = '',
  style,
  'aria-label': ariaLabel,
}) => {
  const iconSize = {
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
  };

  return (
    <motion.button
      className={`icon-button icon-button--${variant} icon-button--${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={style}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.1 }}
    >
      <Icon
        className="icon-button__icon"
        style={{ width: iconSize[size], height: iconSize[size] }}
      />
    </motion.button>
  );
};

export default IconButton;
