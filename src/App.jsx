import { useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Shop from './pages/Shop.jsx';
import Cart from './pages/Cart.jsx';
import Details from './pages/Details.jsx';
import Confirm from './pages/Confirm.jsx';
import Thanks from './pages/Thanks.jsx';
import Refund from './pages/Refund.jsx';
import Login from './pages/Login.jsx';
import Shipping from './pages/Shipping.jsx';
import Contact from './pages/Contact.jsx';
import Admin from './pages/Admin.jsx';
import { motion } from "framer-motion";
import MainLayout from './components/layout/MainLayout.jsx';
import Register from './pages/Register.jsx';

function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(progress);
      
    };

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress, { passive: true });
    
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const scaleX = useSpring(scrollProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "4px",
        background: "#1b2d1b",
        zIndex: 99999,
        willChange: "transform"
      }}
    />
  );
}

function App() {
    return (
        <BrowserRouter>
            <AuthProvider>
                <> 
                    <ScrollProgress />
                    
                    <Routes>
                      <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/shop-now" element={<Shop />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/details" element={<Details />} />
                        <Route path="/confirm" element={<Confirm />} />
                        <Route path="/thanks" element={<Thanks />} />
                        <Route path="/refund" element={<Refund />} />
                        <Route path="/shipping" element={<Shipping />} />
                        <Route path="/contact-us" element={<Contact />} />
                        <Route path="/shipping-policy" element={<Shipping />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin-panel" element={<ProtectedRoute element={<Admin />} />} />
                      </Route>
                        
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                    </Routes>
                    
                </>
            </AuthProvider>
        </BrowserRouter>
    );
}       

export default App;
