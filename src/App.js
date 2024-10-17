import './App.css';
import Navbar from './components/Navbar';
// import Head from '../src/components/Head';
import Home from '../src/components/Home';
import Footer from '../src/components/Footer';
import Kids from './components/Kids';
import Makup from './components/Makup';
import Colect from './components/Colect';
import Login from './components/Login';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Makup" element={<Makup />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Colect" element={<Colect />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}


export default App;
