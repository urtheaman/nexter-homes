import React from 'react';
import Features from './sections/Features';
import Footer from './sections/Footer';
import Gallery from './sections/Gallery';
import Header from './sections/Header';
import Homes from './sections/Homes';
import Story from './sections/Story';
import "./styles/App.scss"

const App: React.FC = () => {
  return <div className="container">
    <Header/>
    <Features />
    <Story />
    <Homes />
    <Gallery />
    <Footer />
  </div>
}

export default App;
