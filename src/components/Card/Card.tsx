import { motion } from 'framer-motion';
import { PhotoIcon, StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import './Card.scss';

interface CardProps {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  badge?: string;
  badgeColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  showImagePlaceholder?: boolean;
  rating?: number;
  className?: string;
  loading?: boolean;
  variant?: 'default' | 'highlight' | 'icon';
  icon?: React.ComponentType<{ className?: string }>;
}

const Card: React.FC<CardProps> = ({
  children,
  title,
  subtitle,
  badge,
  badgeColor = 'primary',
  image,
  imageAlt = '',
  actions,
  showImagePlaceholder = false,
  rating,
  className = '',
  loading = false,
  variant = 'default',
  icon: Icon,
}) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className="card__star">
        {i < rating ? (
          <StarIconSolid className="card__star-filled" />
        ) : (
          <StarIcon className="card__star-empty" />
        )}
      </span>
    ));
  };

  // Skeleton loading state
  if (loading) {
    return (
      <motion.div
        className={`card card--loading card--${variant} ${className}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="card__image">
          <div className="card__skeleton card__skeleton--image"></div>
        </div>

        <div className="card__content">
          <div className="card__header">
            <div className="card__title-section">
              <div className="card__skeleton card__skeleton--title"></div>
              <div className="card__skeleton card__skeleton--subtitle"></div>
            </div>
            <div className="card__skeleton card__skeleton--badge"></div>
          </div>

          <div className="card__skeleton card__skeleton--rating"></div>

          <div className="card__body">
            <div className="card__skeleton card__skeleton--text"></div>
            <div className="card__skeleton card__skeleton--text card__skeleton--text-short"></div>
          </div>

          <div className="card__actions">
            <div className="card__skeleton card__skeleton--button"></div>
            <div className="card__skeleton card__skeleton--button"></div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`card card--${variant} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {Icon && variant === 'icon' && (
        <div className="card__icon">
          <Icon className="card__icon-svg" />
        </div>
      )}

      {(image || showImagePlaceholder) && (
        <div className="card__image">
          {image ? (
            <img src={image} alt={imageAlt} />
          ) : (
            <div className="card__image-placeholder">
              <PhotoIcon className="card__image-icon" />
            </div>
          )}
        </div>
      )}

      <div className="card__content">
        {(title || subtitle || badge) && (
          <div className="card__header">
            <div className="card__title-section">
              {title && <h3 className="card__title">{title}</h3>}
              {subtitle && <p className="card__subtitle">{subtitle}</p>}
            </div>
            {badge && <span className={`card__badge card__badge--${badgeColor}`}>{badge}</span>}
          </div>
        )}

        {rating && (
          <div className="card__rating">
            {renderStars(rating)}
            <span className="card__rating-text">({rating}.0)</span>
          </div>
        )}

        {children && <div className="card__body">{children}</div>}

        {actions && <div className="card__actions">{actions}</div>}
      </div>
    </motion.div>
  );
};

export default Card;
