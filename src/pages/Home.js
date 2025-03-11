import React from 'react';
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import ImageSection from "../components/ImageSection";

const Home = () => {
  return (
    <div>
      <header>
        <h1>Communion App</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/events">Events</Link> | <Link to="https://communionhub.org/discover-communities">About</Link>
        </nav>
      </header>
      <section>
            <Hero />
            <ImageSection />
      </section>
      <section>
        <h2>Connecting People Across Faiths & Interests</h2>
        <p>Connecting people of all faiths through events and community support.</p>
        <Link to="/events"><button>Explore Events</button></Link>
      </section>
    </div>
  );
};

export default Home;
