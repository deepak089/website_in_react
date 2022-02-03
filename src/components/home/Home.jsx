import React from 'react';
import '../../Navbar.css';
import { Link } from 'react-router-dom';



const Home = () => {
  return (
    <>
      {/* home section start  */}
    <section className="home" id="home" >
      {/* <img src={banner} alt="banner" /> */}
        <div className="max-width">
            <div className="home-content">
                <div className="text-1">Hello, my name is</div>
                <div className="text-2">Deepak Chandra</div>
                <div className="text-3">And I'm a <span class="typing">Full Stack Developer</span></div>
                <Link to="/contact">Hire me</Link>
            </div>
        </div>
    </section>
    </>
  )
};

export default Home;
