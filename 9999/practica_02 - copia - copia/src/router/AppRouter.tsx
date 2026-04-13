import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Register1 from '@/pages/Register1';
import Register2 from '@/pages/Register2';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <nav className="p-3 bg-dark text-white">
        <Link to="/" className="me-3 text-white">Home</Link>
        <Link to="/about" className="me-3 text-white">About</Link>
        <Link to="/register1" className="me-3 text-white">Register 1</Link>
        <Link to="/register2" className="text-white">Register 2</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/register2" element={<Register2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;