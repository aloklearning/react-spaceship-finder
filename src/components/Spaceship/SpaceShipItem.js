import './SpaceShipItem.css';
import { useState } from 'react';

import { ReactComponent as ArrowUp } from '../../assets/arrow_up.svg';
import { ReactComponent as Rocket } from '../../assets/rocket_launch.svg';
import { ReactComponent as ArrowDown } from '../../assets/arrow_down.svg';

const SpaceShipItem = ({ item }) => {
    const [toggleCard, setToggleCard] = useState(false);

    const showMoreInfo = () => {
        setToggleCard(toggle => toggle = !toggle)
    } 

    // The Component to show more info about the spaceship when toggled
    const MoreInfo = () => {
        const Details = ({title, value}) => {
            return (
                <h5 style={{fontWeight: 'bold', color: 'gray'}}>
                    {title}: <span style={{fontWeight: '100'}}>{value}</span>
                </h5>
            )
        }

        return (
            <div className='more-info'>
                <Details title='Has Pulse Laser' value={item.has_pulse_laser ? 'Yes' : 'No'} />
                <Details title='Maximum Speed (In Km/hr)' value={item.maximum_speed} />
                <Details title='Date of Manufacture' value={item.date_of_manufacture} />
            </div>
        )
    }

    return (
        <div onClick={showMoreInfo} className='spaceship-card-container'>
            <Rocket fill={item.color} stroke={item.color} />

            {/* Rocket Info Container */}
            <div className='about-content'>
                <div className='content'>
                    <h4 style={{color: '#212133'}}>Spaceship {item.color}</h4>

                    {/* Hidden content, visible only when the card is toggle */}
                    {toggleCard ? <MoreInfo /> : <></>}
                </div>

                {/* Arrow up and down for toggling the card */}
                {toggleCard ? <ArrowUp /> : <ArrowDown />}
            </div>
        </div>
    )
}

export default SpaceShipItem;