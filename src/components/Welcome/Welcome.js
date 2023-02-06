import './Welcome.css';
import React from 'react';
import { ReactComponent as MrZ } from '../../assets/mrz.svg';
import { useNavigate, createSearchParams } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    const params = { 
        colors: 'all', 
        maximum_speed: 200,
        has_pulse_laser: true, 
        date_of_manufacture: '2020-02-13'
    }

    const goToHomePage = () => {
        navigate({
            pathname: '/home',
            search: `?${createSearchParams(params)}`
        })
    }

    return (
        <div className='welcome-container'>
            <div className='logo-container'>
                <MrZ width={450} height={450} />
            </div>
            
            <div className='content-container'>
                <h1>Finding Spacecraft for Mr Little Z</h1>
                
                <p className='sub-header'>
                Mr Little Z has multiple spaceships in his spaceport, and he finds it hard to keep track of them.
                We are helping him to sort this problem out so that he can go to his work without any problem. 
                </p>

                <div onClick={goToHomePage} className='btn'>
                    Let's Go
                </div>
            </div>
        </div>
    )
}

export default Welcome;