/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import "./App.css";
/*import sofa from "assets/products/sofa.png"*/
import Navbar from "./components/Navbar.jsx";
// import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";



import Search from "./components/pages/Search.jsx";
import About from "./components/pages/About.jsx";
import Contact  from "./components/pages/Contact.jsx";
import Services from "./components/pages/Services.jsx";
import Home from "./components/pages/Home.jsx";
import Main from "./components/Main.jsx";


export default function App() {
  return (
    <>
  
      <div className="App">
        <Navbar />
        {/* <Card/> */}
        
        <Main/>
        <Routes>
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer/>
      </div>
    </>
    
  );
}
