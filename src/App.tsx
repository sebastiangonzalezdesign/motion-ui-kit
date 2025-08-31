import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import Modals from './pages/Modals';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buttons" element={<Buttons />} />
            <Route path="/cards" element={<Cards />} />
            <Route path="/modals" element={<Modals />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
