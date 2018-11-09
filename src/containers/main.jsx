import React, {Component} from 'react'

import AboutUs  from '../componentes/about_us/about_us.jsx'
import Instagram from '../componentes/instagram/instagram.jsx'
import Gallery   from '../componentes/gallery/gallery.jsx'
import Slider    from '../componentes/slider/slider.jsx'
import Flex      from '../componentes/flex/flex.jsx'
import NeverSettle from '../componentes/neverSettle/neverSettle.jsx'
import Navbar from '../componentes/navbar/navbar.jsx'
import SideDrawer from '../componentes/sideDrawer/sideDrawer.jsx'
import Backdrop from '../componentes/backdrop/backdrop.jsx'

class Main extends Component {
    state = {
        sideDrawerOpen: false
      };
    
      drawerToggleClickHandler = () => {
        this.setState((prevState) => {
          return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
      };
    
      backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false})
      }
    
      render() {
        let backdrop;
    
        if (this.state.sideDrawerOpen){
       
          backdrop = <Backdrop click={this.backdropClickHandler}/>
        }
        return(
                <div className='Main'>
                <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
                <SideDrawer show={this.state.sideDrawerOpen}/>
                {backdrop}
                <NeverSettle/>
                <Flex/>
                <Slider/>
                <Gallery/>
                <AboutUs/>
                <Instagram/>
            </div>
        )
    }
}

export default Main;