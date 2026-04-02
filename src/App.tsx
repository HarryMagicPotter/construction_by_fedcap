import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Trades from './pages/Trades';
import BuildWithAI from './pages/BuildWithAI';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employment" element={<About />} />
          <Route path="/learning" element={<Services />} />
          <Route path="/trades" element={<Trades />} />
          <Route path="/build-with-ai" element={<BuildWithAI />} />
        </Routes>
      </Layout>
    </Router>
  );
}
