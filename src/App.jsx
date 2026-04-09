import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Shop from './Pages/Shop.jsx';
import Cart from './Pages/Cart.jsx';
import Details from './Pages/Details.jsx';
import Confirm from './Pages/Confirm.jsx';
import Thanks from './Pages/Thanks.jsx';
import Refund from './Pages/Refund.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Shipping from './Pages/Shipping.jsx';
import Contact from './Pages/Contact.jsx';
import Admin from './Pages/Admin.jsx';
import MyState from './context/data/myState.jsx';

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
        <AuthProvider>
            <MyState>
                <BrowserRouter>
                    <> 
                        <ScrollProgress />
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<div className="page-full-bleed"><Home /></div>} />
                            <Route path="/home" element={<div className="page-full-bleed"><Home /></div>} />
                            <Route path="/about" element={<About />} />
                            <Route path="/shop-now" element={<Shop />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/details/:id" element={<Details />} />
                            <Route path="/confirm" element={<Confirm />} />
                            <Route path="/thanks" element={<Thanks />} />
                            <Route path="/refund" element={<Refund />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/shipping" element={<Shipping />} />
                            <Route path="/contact-us" element={<Contact />} />
                            <Route path="/shipping-policy" element={<Shipping />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/admin-panel" element={<Admin />} />
                        </Routes>
                        <Footer />
                    </>
                </BrowserRouter>
            </MyState>
        </AuthProvider>
    );
}       

export default App;
