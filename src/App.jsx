import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import Admin from './pages/Admin.jsx';

function App() {
    return (
        <BrowserRouter>
            <div> 
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/details" element={<Details />} />
                    <Route path="/confirm" element={<Confirm />} />
                    <Route path="/thanks" element={<Thanks />} />
                    <Route path="/refund" element={<Refund />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/shipping" element={<Shipping />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}       
export default App;
