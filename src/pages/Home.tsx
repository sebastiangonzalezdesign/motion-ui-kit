import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1>Build Better UIs Faster</h1>
        <p>Explore our free animated components, powered by Framer Motion.</p>
        <div className="hero-preview">
          {/* Placeholder for preview GIF/animation */}
          <div className="preview-placeholder">
            <div className="preview-animation">
              🎨 Interactive Components Preview
            </div>
            <p>Replace with actual GIF showing component interactions</p>
          </div>
        </div>
      </div>

      <div className="features-grid grid grid-3">
        <Card>
          <h3>🎯 Interactive Buttons</h3>
          <p>Smooth hover animations and click feedback.</p>
          <Link to="/buttons">View Examples</Link>
        </Card>
        <Card>
          <h3>📱 Animated Cards</h3>
          <p>Fade-in effects and hover states.</p>
          <Link to="/cards">View Examples</Link>
        </Card>
        <Card>
          <h3>🔲 Slide-in Modals</h3>
          <p>Professional modal dialogs with animations.</p>
          <Link to="/modals">View Examples</Link>
        </Card>
      </div>

      <div className="upgrade-cta">
        <h2>🚀 Ready for More?</h2>
        <p>Get 20+ advanced components, full design system, and motion presets.</p>
        <a href="#" className="cta-button">Upgrade to Pro</a>
      </div>
    </div>
  );
};

export default Home;
