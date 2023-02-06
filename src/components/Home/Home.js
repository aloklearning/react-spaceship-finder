import './Home.css';
import React from "react";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SpaceShipItem from '../Spaceship/SpaceShipItem';
import OptionSelector from '../OptionSelector/OptionSelector';

const Home = () => {
    const [urlQueries, setURLQueries] = useSearchParams()
    const params = Object.fromEntries([...urlQueries])

    const [spaceshipInfo, setSpaceShipInfo] = useState([
        {
            id: 1,
            color: 'red',
            maximum_speed: '200',
            has_pulse_laser: true,
            date_of_manufacture: '2020-02-13'
        },
        {
            id: 2,
            color: 'blue',
            maximum_speed: '150',
            has_pulse_laser: false,
            date_of_manufacture: '2019-02-13'
        },
        {
            id: 3,
            color: 'green',
            maximum_speed: '100',
            has_pulse_laser: true,
            date_of_manufacture: '2018-02-13'
        }
    ])
    

    // Reading the query string
    useEffect(() => {
        // Pushing all the colors to the colors state object
    }, [])

    return (
        <div className='home-container'>
            <h3>
                Greetings Mr little Z! Welcome to your spaceport. What would you like to pick for your job today?
            </h3>
            <br/>

            <OptionSelector />
            <br/>

            {spaceshipInfo.map((item, index) => (<SpaceShipItem key={index} item={item} />))}
        </div>
    )
}

export default Home;