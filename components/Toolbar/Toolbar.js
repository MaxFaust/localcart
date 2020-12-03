import React from 'react';
import Link from 'next/link';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar__logo"><a href="/">LocalCart</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
            <ul>
                <li>
                  <Link 
                    href="/Cart">Cart
                  </Link></li>
                <li>
                  <Link 
                    href="/Login">Login
                  </Link></li>
            </ul>
        </div>
    </nav>
  </header>
);

export default toolbar;