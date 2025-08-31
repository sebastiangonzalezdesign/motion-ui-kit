import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to ensure smooth transition with Framer Motion animations
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, 100); // 100ms delay works well with the animation timing

    // Cleanup timeout if component unmounts
    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
