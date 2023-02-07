import { useEffect, useState } from "react";
import RadioButtonSelector from "./RadioButtonSelector";

const SpeedContainer = ({ maximumSpeedItem, paramsObject }) => {
    const [speed, setSpeed] = useState(paramsObject.maximum_speed);

    // By default the URL comes with exact speed. So exactly
    const [speedRadioOption, setSpeedRadioOption] = useState('Exactly');

    useEffect(() => {
        // The input item is in string
        const intSpeed = parseInt(speed);
        if(intSpeed < 50 || intSpeed > 200){
            alert('You have inserted a value beyond the range of 50-200.'
            + 'You will not be able to filter. Please try again.');
            return;
        }else if(intSpeed === 50 && speedRadioOption === 'Less than') {
            alert('Invalid search. Searching below the minimum range, i.e., 50.'
            + ' Please try again.');
            return;
        }else if(intSpeed === 200 && speedRadioOption === 'More than') {
            alert('Invalid search. Searching above the maximum range, i.e., 200.'
            + ' Please try again.');
            return;
        }

        // Adding the value to the params object
        if(speedRadioOption === 'Less than') maximumSpeedItem.current = `below-${speed}`
        else if(speedRadioOption === 'More than') maximumSpeedItem.current = `above-${speed}`
        else maximumSpeedItem.current = speed

    }, [speedRadioOption])

    return (
        <div style={{marginTop: 20}}>
            <p className='header'>2. Choose the maxium speed between 50-200 from below:</p>

            {/* Basically One Text Field followed by radio button more than, smaller than, exact
            Once that is done. Check on 50 and 200 range for more than and smaller than respectively
            Then, in the query string it should go as: greater than 50 => 51-200
            smaller than 200 => 50-199, exact 50 => 50 */}
            {/* Content Container */}
            <div className="speed-container">
                <input 
                    type='text' 
                    value={speed}
                    maxLength={3}
                    inputMode='numeric'
                    className="speed-input"
                    placeholder='Add Maximum Speed'
                    onChange={(e) => setSpeed(e.target.value)}
                />

                <RadioButtonSelector 
                    name="speed"
                    paramsObject={paramsObject}
                    setRadioOption={setSpeedRadioOption}
                    options={['Less than', 'More than', 'Exactly']}/>
            </div>
        </div>
    )
}

export default SpeedContainer;