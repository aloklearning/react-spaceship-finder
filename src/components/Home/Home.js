import './Home.css';
import React from "react";
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SpaceShipItem from '../Spaceship/SpaceShipItem';

const Home = () => {
    const [urlQueries, setURLQueries] = useSearchParams()
    const params = Object.fromEntries([...urlQueries])

    const spaceshipInfo = [
        {
            color: 'red',
            maximum_speed: '200',
            has_pulse_laser: true,
            date_of_manufacture: '2020-02-13'
        },
        {
            color: 'blue',
            maximum_speed: '150',
            has_pulse_laser: false,
            date_of_manufacture: '2019-02-13'
        },
        {
            color: 'green',
            maximum_speed: '100',
            has_pulse_laser: true,
            date_of_manufacture: '2018-02-13'
        },
    ]
    

    // Reading the query string
    useEffect(() => {
        // Do something
    }, [])

    return (
        <div className='home-container'>
            {spaceshipInfo.map((item, index) => (<SpaceShipItem key={index} item={item} />))}
        </div>
    )
}

export default Home;