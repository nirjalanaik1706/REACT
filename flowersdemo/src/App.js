import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Membership/Login';
import Register from './Membership/Register';
import List from './ProductCatlog/List';
import Hello from './Layout/Hello';
import GoodBye from './Layout/GoodBye';
import Orders from './OrderProcessing/Orders';
import Cart from './ShoppingCart/Cart';


function App() {
  return (
    <Router>
      <BasicRouting />

    </Router>
  );
}

function BasicRouting() {
  return (
    <div className='text-center'>
      <h1>Transflower Store</h1>

      <Link to="/Home">Home</Link> |
      <Link to="/About">About us</Link> |
      <Link to="/Contact">Contact</Link> |
      <Link to="/Flowers">Flowers</Link> |
      <Link to="/Login">Login</Link> |
      <Link to="/Register">Register</Link>|
      <Link to="/orders">Orders</Link>|
      <Link to="/hello">Hello</Link>|
      <Link to="/cart">Shopping Cart</Link>|


      <hr />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Flowers" element={<List />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/goodbye" element={<GoodBye />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route exact path="/hello" element={<Hello />} />

      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <div className='jumbotron text-center'>
        <h1>Welcome to Transflower Learning Pvt. Ltd.</h1>
        <p>Mentor as a service</p>
        <p>React js learning is fun</p>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <p>Flowers</p>
            <p>Celebrate every moment with flowers</p>
          </div>

          <div className='col-sm-4'>
            <p>Gifts</p>
            <p>Find the perfect gift for every occasion</p>
          </div>
        </div>
      </div>
    </>
  );
}

function About() {
  return (
    <div>
      <h2>About us</h2>
      <h3>Transflower Agro Service</h3>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact us</h2>
      <p>Contact us at: +91 1234567890</p>
    </div>
  );
}

export default App;