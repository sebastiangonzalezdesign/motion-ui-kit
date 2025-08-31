import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import Button from '../Button/Button';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const navbarRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Track viewport category (mobile/tablet/desktop)
  useEffect(() => {
    const getViewport = () => {
      if (typeof window === 'undefined') return 'mobile';
      const w = window.innerWidth;
      if (w >= 1024) return 'desktop';
      if (w >= 768) return 'tablet';
      return 'mobile';
    };

    const handleResize = () => setViewport(getViewport());
    setViewport(getViewport());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="navbar-brand">
        <Link to="/">UI Motion Kit Free</Link>
      </div>

      {viewport === 'mobile' && (
        <div className="buttons-wrapper">
          <Button size='sm' onClick={() => setIsMenuOpen(false)}>Upgrade to Pro</Button>
          <ThemeToggle />
          <button className="menu-toggle mobile-only" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? (
              <XMarkIcon className="icon" />
            ) : (
              <Bars3Icon className="icon" />
            )}
          </button>
        </div>
      )}
      {/* Mobile-only collapsible nav (same items as the center nav) */}
      {viewport === 'mobile' && (
        <ul className={`navbar-nav main ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/buttons" onClick={() => setIsMenuOpen(false)}>Buttons</Link></li>
          <li><Link to="/cards" onClick={() => setIsMenuOpen(false)}>Cards</Link></li>
          <li><Link to="/modals" onClick={() => setIsMenuOpen(false)}>Modals</Link></li>
          <li><a href="#" target="_blank" onClick={() => setIsMenuOpen(false)}>Docs</a></li>
          <li><a href="#" target="_blank" onClick={() => setIsMenuOpen(false)}>GitHub</a></li>
          <li><Button onClick={() => setIsMenuOpen(false)}>Upgrade to Pro</Button></li>
        </ul>
      )}

      <div className="navbar-center">
        <ul className={`navbar-nav main ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/buttons" onClick={() => setIsMenuOpen(false)}>Buttons</Link></li>
          <li><Link to="/cards" onClick={() => setIsMenuOpen(false)}>Cards</Link></li>
          <li><Link to="/modals" onClick={() => setIsMenuOpen(false)}>Modals</Link></li>
          <li><a href="#" target="_blank" onClick={() => setIsMenuOpen(false)}>Docs</a></li>
          <li><a href="#" target="_blank" onClick={() => setIsMenuOpen(false)}>GitHub</a></li>
          <li><Button onClick={() => setIsMenuOpen(false)}>Upgrade to Pro</Button></li>
        </ul>
      </div>
      
  {/* buttons-wrapper will handle Upgrade/Theme/Menu on mobile & tablet */}

      <div className="navbar-right">
        {/* Desktop-only actions (Docs, GitHub, Upgrade) */}
        {viewport === 'desktop' && (
          <ul className="navbar-nav actions">
            <li><a href="#" target="_blank" onClick={() => setIsMenuOpen(false)}>Docs</a></li>
            <li><a href="#" target="_blank" onClick={() => setIsMenuOpen(false)}>GitHub</a></li>
            <li><Button size='sm' onClick={() => setIsMenuOpen(false)}>Upgrade to Pro</Button></li>
          </ul>
        )}

        {/* Shared buttons wrapper for mobile & tablet: Upgrade, Theme, Menu */}
        {viewport !== 'desktop' && (
          <div className="buttons-wrapper">
            <Button size='sm' onClick={() => setIsMenuOpen(false)}>Upgrade to Pro</Button>
            <ThemeToggle />
            <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              {isMenuOpen ? (
                <XMarkIcon className="icon" />
              ) : (
                <Bars3Icon className="icon" />
              )}
            </button>
          </div>
        )}
      </div>
      
    </nav>
  );
};

export default Navbar;
