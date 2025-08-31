import { motion } from 'framer-motion';
import './Button.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  variant?: 'primary' | 'outline' | 'ghost';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  size = 'md',
  icon,
  iconPosition = 'left',
  variant = 'primary',
  style,
}) => {
  return (
    <motion.button
      className={`button button-${size} button--${variant}`}
      onClick={onClick}
      style={style}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {icon && iconPosition === 'left' && (
        <motion.span
          className="button__icon button__icon--left"
          whileTap={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.15 }}
        >
          {icon}
        </motion.span>
      )}
      <span className="button__content">{children}</span>
      {icon && iconPosition === 'right' && (
        <motion.span
          className="button__icon button__icon--right"
          whileTap={{ scale: 1.2, rotate: -10 }}
          transition={{ duration: 0.15 }}
        >
          {icon}
        </motion.span>
      )}
    </motion.button>
  );
};

export default Button;
