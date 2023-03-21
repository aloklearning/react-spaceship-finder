import './Welcome.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MrZ } from '../../assets/mrz.svg';

const Welcome = () => {
    const params = {
        show_all: false, 
        colors: 'all',
        maximum_speed: '200',
        has_pulse_laser: true, 
        date_of_manufacture: '2020/02/13'
    };

    // This is how we create search params
    // using react-router-dom
    // const toHomePage = {
    //     pathname: '/home',
    //     search: `?${createSearchParams(params)}`
    // };

    return (
        <div className='welcome-container'>
            <div className='logo-container'>
                <MrZ width={450} height={450} />
            </div>
            
            <div className='content-container'>
                <h1>Finding Spacecraft</h1>
                
                <p className='sub-header'>
                We have  multiple spaceships in our spaceport, and it is hard to keep track of them.
                We are helping you to sort this problem out so that you can go to his work without any problem. 
                </p>

                <Link to={{pathname: '/home'}} state={params} className='btn'>
                    Let's Go
                </Link>
            </div>
        </div>
    )
}

export default Welcome;