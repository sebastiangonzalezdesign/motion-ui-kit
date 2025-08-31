import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './Hero.scss';

interface HeroProps {
  headline: string;
  description: string;
  image?: string;
  imageAlt?: string;
  actions?: React.ReactNode;
  borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
  backgroundColor?:
    | 'primary'
    | 'secondary'
    | 'elevated'
    | 'transparent'
    | 'brand-soft'
    | 'brand-light'
    | 'brand-medium'
    | 'brand-gradient';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showIllustrations?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  headline,
  description,
  image,
  imageAlt = '',
  actions,
  borderRadius = 'md',
  backgroundColor = 'transparent',
  size = 'md',
  className = '',
  showIllustrations = true,
}) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      className={`hero hero--${backgroundColor} hero--radius-${borderRadius} hero--size-${size} ${className}`}
    >
      {/* Floating component previews (optional) */}
      {showIllustrations && (
        <div className="hero__illustrations" aria-hidden>
          <motion.div
            className="hero__floating-preview hero__floating-preview--1"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <div className="preview-card">
              <div className="preview-header">
                <div className="preview-dot"></div>
                <div className="preview-dot"></div>
                <div className="preview-dot"></div>
              </div>
              <div className="preview-content">
                <div className="preview-text"></div>
                <div className="preview-button"></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero__floating-preview hero__floating-preview--2"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          >
            <div className="preview-modal">
              <div className="preview-modal-header">
                <div className="preview-modal-title"></div>
                <div className="preview-modal-close"></div>
              </div>
              <div className="preview-modal-content">
                <div className="preview-modal-text"></div>
                <div className="preview-modal-buttons"></div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <motion.div className="hero__container" style={{ y }}>
        <div className="hero__content">
          <div className="hero__text">
            <motion.h1
              className="hero__headline"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {headline}
            </motion.h1>
            <motion.p
              className="hero__description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            >
              {description}
            </motion.p>
            {actions && (
              <motion.div
                className="hero__actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              >
                {actions}
              </motion.div>
            )}
          </div>
          {image && (
            <motion.div
              className="hero__image"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
            >
              <img src={image} alt={imageAlt} />
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
