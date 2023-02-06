import './Header.css';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as HeaderLogo } from '../../assets/rocket_launch.svg';

const Header = () => {
    const location = useLocation()

    return (
        <div className="header-container">
            <div className='left-container'>
                <HeaderLogo stroke='white' fill='white' />
                <p className="header-text">Spaceship Finder</p>
            </div>

            {location.pathname === '/home' && (
            <div className='right-container'>
                <Link to='/' className='btn header-btn'>
                    Home
                </Link>
            </div>)}
        </div>
    )
}

export default Header;