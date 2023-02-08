import './Home.css';
import React, { useEffect, useState } from "react";
import QueryContainer from './QueryContainer';
import { useLocation } from 'react-router-dom';
import SpaceShipItem from '../Spaceship/SpaceShipItem';
import OptionSelector from '../OptionSelector/OptionSelector';

const Home = () => {
    const paramsProps = useLocation().state;
    const [params, setParams] = useState(paramsProps);
    const [showOptions, setShowOptions] = useState(false);

    const [queryString, setQueryString] = useState(
        new URLSearchParams(paramsProps).toString()
    )

    // Using these hooks, we can do the state management 
    // via query string change in the url
    // const [urlQueries, setURLQueries] = useSearchParams();
    // const params = Object.fromEntries([...urlQueries]);
    
    const spaceshipInfo = require('../../assets/spaceships.json');

    // ---- API CALLING SOLUTION ----
    useEffect(() => {
        // DO API CALLING WITH QUERY PARAMS
        // We can access prams data here as the params changes, and 
        // then call the API with the data, as params.show_all etc
        setQueryString(new URLSearchParams(params).toString());
    }, [params])

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

    // Algo -> Date and Speed has a boolean to be compared
    // everytime, when you do a computation with Date-Variation of Speed
    // Or Speed-Variaton of Date
    const computeDateSpeed = (withColorFilter, speedItem, dateItem, speedOperator, dateOperator) => {
        let resultSpaceships = [];

        const speedBool = (item) => {
            let bool = false;
            
            if(speedOperator === '===') {
                bool = speedItem === item.maximum_speed;

                return bool;
            }

            if(speedOperator === '>') {
                bool = speedItem > item.maximum_speed;

                return bool;
            }

            if(speedOperator === '<') {
                bool = speedItem < item.maximum_speed;

                return bool;
            }
        }

        const dateBool = (item) => {
            let bool = false;
            
            if(dateOperator === '===') {
                bool = dateItem === item.date_of_manufacture;

                return bool;
            }

            if(dateOperator === '>') {
                bool = dateItem > item.date_of_manufacture;

                return bool;
            }

            if(dateOperator === '<') {
                bool = dateItem < item.date_of_manufacture;

                return bool;
            }
        }

        const hasLaserPulse = params.has_pulse_laser;
        if(withColorFilter){
            resultSpaceships = spaceshipInfo.filter((item) => (
                params.colors.includes(item.color[0]) 
                && hasLaserPulse === item.has_pulse_laser 
                && speedBool(item) && dateBool(item)
            ))

            return resultSpaceships;
        }

        
        resultSpaceships = spaceshipInfo.filter((item) => (
            hasLaserPulse === item.has_pulse_laser 
            && speedBool(item) && dateBool(item)
        ))

        return resultSpaceships;
    }

    const filterDateSpeed = (withColorFilter, maximumSpeed, manufacturingDate) => {
        let updatedArrayData = [];

        // MAX SPEED & VARIABLE MANUFACTURING DATE
        if(maximumSpeed.length === 1) {
            // For Constant max speed, date comes with variations
            // Like, before, after, and exact. So need to filter for each case
            if(manufacturingDate.length === 1) {
                updatedArrayData = computeDateSpeed(
                    withColorFilter,
                    maximumSpeed[0], 
                    manufacturingDate[0], 
                    '===', '==='
                );
            }else {
                if(manufacturingDate[0] === 'before') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[0], 
                        manufacturingDate[1], 
                        '===', '>'
                    )
                }

                if(manufacturingDate[0] === 'after') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[0], 
                        manufacturingDate[1], 
                        '===', '<'
                    )
                }
            }

            return updatedArrayData;
        }
        
        if(maximumSpeed.length > 1 && maximumSpeed[0] === 'below') {
            if(manufacturingDate.length === 1) {
                updatedArrayData = computeDateSpeed(
                    withColorFilter, 
                    maximumSpeed[1], 
                    manufacturingDate[0], 
                    '>', '==='
                );
            }else {
                if(manufacturingDate[0] === 'before') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[1], 
                        '>', '>'
                    )
                }

                if(manufacturingDate[0] === 'after') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter,
                        maximumSpeed[1], 
                        manufacturingDate[1], 
                        '>', '<'
                    )
                }
            }

            return updatedArrayData;
        }

        if(maximumSpeed.length > 1 && maximumSpeed[0] === 'above') {
            if(manufacturingDate.length === 1) {
                updatedArrayData = computeDateSpeed(
                    withColorFilter, 
                    maximumSpeed[1], 
                    manufacturingDate[0], 
                    '<', '==='
                );
            }else {
                if(manufacturingDate[0] === 'before') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[1], 
                        '<', '>'
                    )
                }

                if(manufacturingDate[0] === 'after') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[1], 
                        '<', '<'
                    )
                }
            }

            return updatedArrayData;
        }

        // VARIABLE SPEED AND MANUFACTURING DATE
        if(manufacturingDate.length === 1) {
            if(maximumSpeed.length === 1) {
                updatedArrayData = computeDateSpeed(
                    withColorFilter, 
                    maximumSpeed[0], 
                    manufacturingDate[0], 
                    '===', '==='
                );
            }else {
                if(maximumSpeed[0] === 'below') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[0], 
                        '>', '==='
                    )
                }

                if(maximumSpeed[0] === 'above') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[0], 
                        '<', '==='
                    )
                }
            }

            return updatedArrayData;
        }
        
        if(manufacturingDate.length > 1 && manufacturingDate[0] === 'before') {
            if(maximumSpeed.length === 1) {
                updatedArrayData = computeDateSpeed(
                    withColorFilter, 
                    maximumSpeed[0], 
                    manufacturingDate[1], 
                    '===', '>'
                );
            }else {
                if(maximumSpeed[0] === 'below') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[1], 
                        '>', '>'
                    )
                }

                if(maximumSpeed[0] === 'above') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[1], 
                        '<', '>'
                    )
                }
            }

            return updatedArrayData;
        }

        if(manufacturingDate.length > 1 && manufacturingDate[0] === 'after') {
            if(maximumSpeed.length === 1) {
                updatedArrayData = computeDateSpeed(
                    withColorFilter, 
                    maximumSpeed[0], 
                    manufacturingDate[1], 
                    '===', '<'
                );
            }else {
                if(maximumSpeed[0] === 'below') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[1], 
                        '>', '<'
                    )
                }

                if(maximumSpeed[0] === 'above') {
                    updatedArrayData = computeDateSpeed(
                        withColorFilter, 
                        maximumSpeed[1], 
                        manufacturingDate[1], 
                        '<', '<'
                    )
                }
            }

            return updatedArrayData;
        }


        return updatedArrayData;
    }

    // This the the final filtering happening once we have all the data received 
    // from the Query URL params
    const computeFilterCards = () => {
        //---- SHOW ALL ITEMS ----
        const showAll = params.show_all;
        if(showAll){
            return <SpaceShipItemRender items={spaceshipInfo} />
        }

        //---- FILTERING LOGIC HERE ----
        let maximumSpeed = [];
        let updatedArrayData = [];
        let manufacturingDate = [];

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
            // Filtering data
            updatedArrayData = 
                filterDateSpeed(false, maximumSpeed, manufacturingDate);

            return <SpaceShipItemRender items={updatedArrayData} />
        }else {
            updatedArrayData = 
                filterDateSpeed(true, maximumSpeed, manufacturingDate);

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

            <QueryContainer queryString={queryString} />

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
                style={{margin: '30px 0 0 20px'}}
                className='show-all-btn filter-btn'
                onClick={() => setParams({...params, show_all: true})}>
                    Show All Spaceships
                </div>)}
            </div>

            {showOptions && <OptionSelector paramsObject={params} setParamsObject={setParams}/>}
            <br/>

            {/* This is a workaround for updating the list with the filter
            useEffect with params is going into infinite loop which is not good.
            For more info, please see: https://stackoverflow.com/a/57854008/5362583 */}
            { (computeFilterCards)() }
        </div>
    )
}

export default Home;