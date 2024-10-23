import React from 'react';
import Intro from '../intro/intro';
import About from '../about/about';
import Contact from '../contact/contact';

function Home() {
  return (
    <div>
      <Intro /> {/* Display Intro component */}
      <About /> {/* Display About component */}
      <Contact /> {/* Display Contact component */}
    </div>
  );
}

export default Home;
