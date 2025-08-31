import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';

const Home = () => {
  return (
    <div className="home">
      <h1>Thanks for downloading UI Motion Kit Free 🎉</h1>
      <p>
        Explore our free starter components with smooth animations powered by Framer Motion.
        Upgrade to Pro for 20+ advanced components, full design system, and more!
      </p>
      <div className="grid grid-3">
        <Card>
          <h3>Buttons</h3>
          <p>Interactive buttons with hover animations.</p>
          <Link to="/buttons">View Examples</Link>
        </Card>
        <Card>
          <h3>Cards</h3>
          <p>Cards with fade-in animations.</p>
          <Link to="/cards">View Examples</Link>
        </Card>
        <Card>
          <h3>Modals</h3>
          <p>Slide-in modals for user interactions.</p>
          <Link to="/modals">View Examples</Link>
        </Card>
      </div>
      <div className="upgrade-cta">
        <h2>Ready for More?</h2>
        <p>Get 20+ advanced components, full motion tokens, and design system structure.</p>
        <a href="#" className="cta-button">Upgrade to Pro</a>
      </div>
    </div>
  );
};

export default Home;
