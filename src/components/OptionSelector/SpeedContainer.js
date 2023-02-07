import { useEffect, useState } from "react";
import RadioButtonSelector from "./RadioButtonSelector";

const SpeedContainer = ({ maximumSpeedItem, paramsObject }) => {
    const [speed, setSpeed] = useState(
        paramsObject.maximum_speed.includes("-") 
        ? paramsObject.maximum_speed.split("-")[1]
        : paramsObject.maximum_speed
    );

    // By default the URL comes with exact speed. So exactly
    const [speedRadioOption, setSpeedRadioOption] = useState('Exactly');

    useEffect(() => {
        // Preventing string input
        const intSpeed = parseInt(speed);
        if(isNaN(intSpeed)){
            alert(`"${speed}" is not a valid input. Please enter numerical value and try again.`);
            return;
        }

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
            <p className='header'>
                2. Choose the maxium speed between 50-200 from below:
            </p>

            {/* Main content */}
            <div className="speed-container">
                <input 
                    type='text' 
                    value={speed}
                    maxLength={3}
                    inputMode='numeric'
                    className='speed-input'
                    placeholder='Add Maximum Speed'
                    onChange={(e) => setSpeed(e.target.value)}
                />

                <RadioButtonSelector 
                    name='speed'
                    paramsObject={paramsObject}
                    setRadioOption={setSpeedRadioOption}
                    options={['Less than', 'More than', 'Exactly']}
                />
            </div>
        </div>
    )
}

export default SpeedContainer;