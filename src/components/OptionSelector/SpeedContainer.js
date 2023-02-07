import { useEffect, useState } from "react";
import RadioButtonSelector from "./RadioButtonSelector";

const SpeedContainer = ({ maximumSpeedItem, paramsObject }) => {
    const [speed, setSpeed] = useState(paramsObject.maximum_speed);

    // By default the URL comes with exact speed. So exactly
    const [speedRadioOption, setSpeedRadioOption] = useState('Exactly');

    useEffect(() => {
        
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