import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Card from '../components/Card/Card';
import Hero from '../components/Hero/Hero';
import Button from '../components/Button/Button';
import {
  CursorArrowRaysIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <main className="home page">
      <Hero
        headline="Build Better UIs Faster"
        description="Explore our free animated components, powered by Framer Motion."
        backgroundColor="brand-gradient"
        borderRadius="lg"
        size="lg"
        actions={
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link to="/buttons" style={{ color: 'inherit', textDecoration: 'none' }}>
                <Button size="md">Get Started</Button>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button
                size="md"
                variant="outline"
                onClick={() =>
                  document.querySelector('.features-grid')?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                View Components
              </Button>
            </motion.div>
          </div>
        }
      />

      <section className="features-grid grid grid-3">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2>Powerful Components</h2>
          <p>
            Discover our collection of beautifully animated UI components designed for modern web
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card variant="icon" icon={CursorArrowRaysIcon}>
            <h3>Interactive Buttons</h3>
            <p>Smooth hover animations and click feedback with multiple variants and sizes.</p>
            <Link to="/buttons" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button variant="ghost" size="sm">
                View Examples
              </Button>
            </Link>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card variant="icon" icon={RectangleStackIcon}>
            <h3>Animated Cards</h3>
            <p>Fade-in effects, hover states, and flexible layouts with loading states.</p>
            <Link to="/cards" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button variant="ghost" size="sm">
                View Examples
              </Button>
            </Link>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Card variant="icon" icon={Squares2X2Icon}>
            <h3>Slide-in Modals</h3>
            <p>Professional modal dialogs with smooth animations and accessibility features.</p>
            <Link to="/modals" style={{ color: 'inherit', textDecoration: 'none' }}>
              <Button variant="ghost" size="sm">
                View Examples
              </Button>
            </Link>
          </Card>
        </motion.div>
      </section>

      <motion.section
        className="upgrade-cta"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <h2>Ready for More?</h2>
        <p>Get 20+ advanced components, full design system, and motion presets.</p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        >
          <a
            href="https://sebastiangonzalez.design/motion-ui-kit"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'inherit',
              textDecoration: 'none',
              display: 'block',
              maxWidth: '320px',
              margin: '0 auto',
            }}
          >
            <Button size="lg" icon={<SparklesIcon />}>
              Upgrade to Pro
            </Button>
          </a>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Home;
