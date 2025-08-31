import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import IconButton from '../IconButton/IconButton';
import './Modal.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll when modal is open
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';

      // Restore original overflow when modal closes
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
            <IconButton
              icon={XMarkIcon}
              onClick={onClose}
              variant="ghost"
              size="md"
              className="modal-close"
              aria-label="Close modal"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
