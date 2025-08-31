import { useState } from 'react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import './Toggle.scss';

interface ToggleProps {
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ initialState = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initialState);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    onToggle?.(newState);
  };

  return (
    <motion.button
      className={`toggle ${isOn ? 'on' : 'off'}`}
      onClick={handleToggle}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="toggle-track"
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
      >
        <motion.div
          className="toggle-thumb"
          layout
          transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        >
          {isOn ? (
            <CheckIcon className="toggle-icon" />
          ) : (
            <XMarkIcon className="toggle-icon" />
          )}
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default Toggle;
