import React, { Component } from 'react';

import './App.css';
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'

import Footer from './componentes/footer/footer'
import Routes from './routes/routes';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <main>       
            <Routes/>
        </main>
        <footer>
            <Footer/>
        </footer>
      </div>
    );
  }
}

export default App;
