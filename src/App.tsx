import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { pageVariants, pageTransition } from './utils/motion';
import Navbar from './components/Navbar/Navbar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import Modals from './pages/Modals';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/buttons"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Buttons />
            </motion.div>
          }
        />
        <Route
          path="/cards"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Cards />
            </motion.div>
          }
        />
        <Route
          path="/modals"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
            >
              <Modals />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="container">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
