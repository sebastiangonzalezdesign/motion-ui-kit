import { motion } from 'framer-motion';
import './Spinner.scss';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md' }) => {
  return (
    <motion.div
      className={`spinner spinner-${size}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    >
      <div className="spinner-circle" />
    </motion.div>
  );
};

export default Spinner;
