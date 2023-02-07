import './Home.css';
import React, { useState } from "react";
import { useSearchParams } from 'react-router-dom';
import SpaceShipItem from '../Spaceship/SpaceShipItem';
import OptionSelector from '../OptionSelector/OptionSelector';

const Home = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [urlQueries, setURLQueries] = useSearchParams();
    const params = Object.fromEntries([...urlQueries]);
    
    const spaceshipInfo = [
        {
            id: 1,
            color: 'red',
            maximum_speed: 200,
            has_pulse_laser: true,
            date_of_manufacture: '2020-02-13'
        },
        {
            id: 2,
            color: 'blue',
            maximum_speed: 150,
            has_pulse_laser: true,
            date_of_manufacture: '2019-02-13'
        },
        {
            id: 3,
            color: 'green',
            maximum_speed: 100,
            has_pulse_laser: true,
            date_of_manufacture: '2018-02-13'
        }
    ]

    const EmptyContainer = () => {
        return(
            <h4>
                Oops! No Data Found. Please try again with other filters.
            </h4>
        )
    }

    const SpaceShipItemRender = ({items}) => {
        return (
            <>
                {items.length > 0 ?
                <>
                {items.map((item, index) => (<SpaceShipItem item={item} key={index} />))}
                </> : <EmptyContainer />}
            </>
        )
    }

    // This the the final filtering happening once we have all the data received 
    // from the Query URL params
    const computeFilterCards = () => {
        let updatedArrayData = [];

        
        // Params returns string, it is the best way to convert
        // to bool
        const hasLaserPulse = (params.has_pulse_laser === 'true');
        if(params.colors.includes('all') 
        || params.colors.includes('none')
        || params.colors.includes('rgb')) {
            updatedArrayData = spaceshipInfo.filter((item) => (
                hasLaserPulse === item.has_pulse_laser
            ))

            return <SpaceShipItemRender items={updatedArrayData} />
        }else {
            updatedArrayData = spaceshipInfo.filter((item) => (
                params.colors.includes(item.color[0]) && hasLaserPulse === item.has_pulse_laser
            ))

            return <SpaceShipItemRender items={updatedArrayData} />
        }
    }
 
    return (
        <div className='home-container'>
            <h3>
                Greetings Mr little Z! Welcome to your spaceport. What would you like to pick for your job today?
            </h3>
            <h5 style={{fontWeight: '100', marginTop: 5}}>
                To see the details of each spaceship, please tap on the spaceship card. You will be able to see all the
                details connected to the selected spaceship. The below button "Choose Spaceship" will help you to filter out your 
                suitable spaceship for today's job.
            </h5>

            <div 
            className='btn filter-btn'
            onClick={() => setShowOptions(bool => bool = !bool)}
            style={{margin: showOptions ? '30px 0' : '30px 0 0 0'}}>
                {showOptions ? 'Close' : 'Choose Spaceship'}
            </div>
            <br/>

            {showOptions && <OptionSelector paramsObject={params} setParamsObject={setURLQueries}/>}
            <br/>

            {/* This is a workaround for updating the list with the filter
            useEffect with params is going into infinite loop which is not good.
            For more info, please see: https://stackoverflow.com/a/57854008/5362583 */}
            { (computeFilterCards)() }
        </div>
    )
}

export default Home;