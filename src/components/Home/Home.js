import './Home.css';
import React from "react";
import { useSearchParams } from 'react-router-dom';
import SpaceShipItem from '../Spaceship/SpaceShipItem';
import OptionSelector from '../OptionSelector/OptionSelector';

const Home = () => {
    const [urlQueries, setURLQueries] = useSearchParams()
    const params = Object.fromEntries([...urlQueries])
    
    const spaceshipInfo = [
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

    return (
        <div className='home-container'>
            <h3>
                Greetings Mr little Z! Welcome to your spaceport. What would you like to pick for your job today?
            </h3>
            <br/>

            <OptionSelector paramsObject={params} setParamsObject={setURLQueries}/>
            <br/>

            {/* This is a workaround for updating the list with the filter
            useEffect with params is going into infinite loop which is not good.
            For more info, please see: https://stackoverflow.com/a/57854008/5362583 */}
            {
                (() => {
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
                })()
            }
        </div>
    )
}

export default Home;