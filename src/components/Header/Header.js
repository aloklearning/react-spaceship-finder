import './Header.css';
import React from 'react';
import { ReactComponent as HeaderLogo } from '../../assets/rocket_launch.svg';

const Header = () => {
    return (
        <div className="header-container">
            <HeaderLogo stroke='white' fill='white' />
            <p className="header-text">Spaceship Finder</p>
        </div>
    )
}

export default Header;