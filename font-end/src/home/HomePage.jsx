import React from 'react';
import Awards from './Awards';
import Education from './Education';
import Hero from './Hero';
import Pricing from './Pricing';
import State from './State';
import Navbar from '../Navbar';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
function HomePage() {
    return ( 
        <div>
            <Navbar />
            <Hero />
            <Awards />
            <State />
            <Pricing />
            <Education />
            <OpenAccount />
            <Footer />
        </div>
     );
}

export default HomePage;

