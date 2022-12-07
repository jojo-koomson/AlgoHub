import React, {Component} from 'react';
import Navbar from "./Navbar";
// import Greet from "./greet";
// import TypeWriterC from "./typewriter";
import Cards from "./cards";
import Footer from "./footer";
import Hero from './Hero';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Hero/>
                <Cards/>
                <Footer/>
            </React.Fragment>
        );
    }
}

export default Home;