// src/pages/Home.jsx

import './Home.css';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="hero-overlay">
        <div className="hero-text">
          <h1>
            <span className="highlight-script">Agriculture</span><br />
            & Organic <br /> Market
          </h1>
          <button className="explore-btn">Explore More</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
