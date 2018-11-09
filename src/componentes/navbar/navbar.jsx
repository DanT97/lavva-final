import React from 'react';

import logo from './logo/logoripo_DIIVE_logo1.svg'
import './navbar.css'
import DrawerToggleButton from '../sideDrawer/drawerToggleButton.jsx';

const navbar = props =>(
    <header className='navbar_'>
        <nav className='nav_'>
            <div className='btn_nav'>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className='nav_logo'><a href='/#entry'><img src={logo}></img></a></div>
            <div className='spacer'></div>
            <div className='nav_items'>
                <ul>
                    <li><a href='/#flex'>diive</a></li>
                    <li><a href='/#slider'>for company</a></li>
                    <li><a href='/#about_us'>about</a></li>
                    <li><a href='/#instagram'>where to buy</a></li>
                    <li><div className='buy_now'>BUY NOW</div></li>
                    <li><i className="fas fa-shopping-bag"></i></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default navbar;