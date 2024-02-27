import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Products from './pages/Products.jsx'
import Login from './pages/LoginSignup.jsx'
// import Navbar from './portfolioComponents/Navbar.js'
import Footer from './portfolioComponents/Footer.js';
import Navbar from './portfolioComponents/Navbar.js';
// import HeroSection from './portfolioComponents/HeroSection.js';

function App() {
  return (
      <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Products' element={<Products/>}/>
          <Route path='/LoginSignup' element={<Login/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>
      </>

  );
}

export default App;
