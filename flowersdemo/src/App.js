import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';  
import List from './List';
import Hello from './Hello';
import GoodBye from './GoodBye';


function App() {
  return (
    <Router>
      
       <Routes>
        {/*  */}
         <Route exact path="/" element={<Hello />} />
         <Route path="/goodbye" element={<GoodBye />} /> 
         <Route path="/Login" element={<Login/>} />
       </Routes>
        {/* <Basi  cRouting /> */}
      
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
      <Link to="/Register">Register</Link>

      <hr />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Flowers" element={<List />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
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