import './App.css';
import Navbar from './components/navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Shop from './Pages/Shop.jsx';
import Cart from './Pages/Cart.jsx';
import Details from './Pages/Details.jsx';
import Confirm from './Pages/Confirm.jsx';
import Thanks from './Pages/Thanks.jsx';
import Refund from './Pages/Refund.jsx';
import Login from './Pages/Login.jsx';
import Shipping from './Pages/Shipping.jsx';
import Contact from './Pages/Contact.jsx';
import Admin from './Pages/Admin.jsx';

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
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}       
export default App;
