import './App.css';
import { Routes, Route } from "react-router-dom";
import Home    from './components/home/Home';
import Product from './components/product/Product';
import Service from './components/Service/Service';
import Contact from './components/Contact/Contact';
import About   from './components/About/About';
import Navbar  from './Navbar';

const App = () => {
  return (
      <div className="app">
        <Navbar/>
        <Routes> 
           <Route exact path="/"         element={<Home />}/>
          <Route exact path="/product"   element={<Product />}/>
          <Route exact path="/service"   element={<Service />}/>
          <Route exact path="/contact"   element={<Contact />}/> 
          <Route exact path="/about"     element={<About />}/>
        </Routes>
      </div>
  );
};

export default App;
