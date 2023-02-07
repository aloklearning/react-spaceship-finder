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
            date_of_manufacture: '2020/02/13'
        },
        {
            id: 2,
            color: 'blue',
            maximum_speed: 150,
            has_pulse_laser: true,
            date_of_manufacture: '2019/02/13'
        },
        {
            id: 3,
            color: 'green',
            maximum_speed: 100,
            has_pulse_laser: true,
            date_of_manufacture: '2018/02/13'
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
        let maximumSpeed = [];
        let updatedArrayData = [];
        let manufacturingDate = [];

        // Params returns string, it is the best way to convert
        // to bool
        const hasLaserPulse = (params.has_pulse_laser === 'true');
        
        // Maxium Speed logic
        if(params.maximum_speed.includes("-")){
            maximumSpeed = params.maximum_speed.split("-");
            maximumSpeed = [maximumSpeed[0], parseInt(maximumSpeed[1])];
        }else{
            maximumSpeed = [parseInt(params.maximum_speed)];
        }

        // Manufacturing Date Logic
        if(params.date_of_manufacture.includes("-")){
            manufacturingDate = params.date_of_manufacture.split("-");
        }else{
            manufacturingDate = [params.date_of_manufacture];
        }

        // With All Color selection
        if(params.colors.includes('all') 
        || params.colors.includes('none')
        || params.colors.includes('rgb')) {
            // Filter Logic here
            if(maximumSpeed.length === 1 && manufacturingDate.length === 1) {
                updatedArrayData = spaceshipInfo.filter((item) => (
                    hasLaserPulse === item.has_pulse_laser 
                    && maximumSpeed[0] === item.maximum_speed
                    && manufacturingDate[0] === item.date_of_manufacture
                ))
            }else {
                if(maximumSpeed[0] === 'above' && manufacturingDate[0] === 'after') {
                    updatedArrayData = spaceshipInfo.filter((item) => (
                        hasLaserPulse === item.has_pulse_laser 
                        && maximumSpeed[1] <= item.maximum_speed
                        && manufacturingDate[1] <= item.date_of_manufacture
                    )) 
                }

                if(maximumSpeed[0] === 'below' && manufacturingDate[0] === 'before') {
                    updatedArrayData = spaceshipInfo.filter((item) => (
                        hasLaserPulse === item.has_pulse_laser 
                        && maximumSpeed[1] >= item.maximum_speed
                        && manufacturingDate[1] >= item.date_of_manufacture
                    ))
                }
            }

            return <SpaceShipItemRender items={updatedArrayData} />
        }else {
            if(maximumSpeed.length === 1 && manufacturingDate.length === 1) {
                updatedArrayData = spaceshipInfo.filter((item) => (
                    params.colors.includes(item.color[0]) 
                    && hasLaserPulse === item.has_pulse_laser
                    && maximumSpeed[0] === item.maximum_speed
                    && manufacturingDate[0] === item.date_of_manufacture
                ))
            }else {
                if(maximumSpeed[0] === 'above' && manufacturingDate[0] === 'after') {
                    updatedArrayData = spaceshipInfo.filter((item) => (
                        params.colors.includes(item.color[0]) 
                        && hasLaserPulse === item.has_pulse_laser
                        && maximumSpeed[1] <= item.maximum_speed
                        && manufacturingDate[1] <= item.date_of_manufacture
                    ))
                }

                if(maximumSpeed[0] === 'below' && manufacturingDate[0] === 'before') {
                    updatedArrayData = spaceshipInfo.filter((item) => (
                        params.colors.includes(item.color[0]) 
                        && hasLaserPulse === item.has_pulse_laser
                        && maximumSpeed[1] >= item.maximum_speed
                        && manufacturingDate[1] >= item.date_of_manufacture
                    ))
                }
            }

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

            <div style={{display: 'flex'}}>
                <div 
                className='btn filter-btn'
                onClick={() => setShowOptions(bool => bool = !bool)}
                style={{margin: showOptions ? '30px 0' : '30px 0 0 0'}}>
                    {showOptions ? 'Close' : 'Choose Spaceship'}
                </div>

                {/* Point being, this should show the items when the user is not worrying about
                filtering and would like to see all the spaceships without the filter container */}
                {!showOptions && (
                <div 
                className='btn filter-btn'
                onClick={() => {}}
                style={{margin: '30px 0 0 20px'}}>
                    Show All Spaceship
                </div>)}
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