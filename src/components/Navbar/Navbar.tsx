import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">UI Motion Kit Free</Link>
      </div>
      <ul className="navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/buttons">Buttons</Link></li>
        <li><Link to="/cards">Cards</Link></li>
        <li><Link to="/modals">Modals</Link></li>
      </ul>
      <div className="navbar-links">
        <ThemeToggle />
        <a href="#" target="_blank">Docs</a>
        <a href="#" target="_blank">GitHub</a>
        <a href="#" className="upgrade-link">Upgrade to Pro</a>
      </div>
    </nav>
  );
};

export default Navbar;
