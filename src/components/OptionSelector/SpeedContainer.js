import { useEffect, useState, useRef } from "react";
import RadioButtonSelector from "./RadioButtonSelector";

const SpeedContainer = ({ maximumSpeedItem, paramsObject }) => {
    const timer = useRef();
    const speed = useRef();

    // For haivng a preset value coming from the first time 
    // query string or search
    const initialValue = paramsObject.maximum_speed.includes("-") 
    ? paramsObject.maximum_speed.split("-")[1]
    : paramsObject.maximum_speed;


    // By default the URL comes with exact speed. So exactly
    const [speedRadioOption, setSpeedRadioOption] = useState('Exactly');

    useEffect(() => {
        // Triggers when raido option changes
        sendingFinalResults();
    }, [speedRadioOption])

    const sendingFinalResults = () => {
        // Preventing string input
        const intSpeed = parseInt(speed.current.value);
        if(isNaN(intSpeed)){
            alert(`"${speed.current.value}" is not a valid input. Please enter numerical value and try again.`);
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
        if(speedRadioOption === 'Less than') maximumSpeedItem.current = `below-${speed.current.value}`
        else if(speedRadioOption === 'More than') maximumSpeedItem.current = `above-${speed.current.value}`
        else maximumSpeedItem.current = speed.current.value
    }

    // Debouncing to send the updated data when the user writes something as well
    const handleDebounceChange = () => {
        clearTimeout(timer.current);

        timer.current = setTimeout(() => {
            sendingFinalResults();
        }, 1000);
    }

    return (
        <div style={{marginTop: 20}}>
            <p className='header'>
                2. Choose the maxium speed between 50-200 from below:
            </p>

            {/* Main content
            TODO: POSSIBLE BUG
            Description: The value only changes in the query string only when radio button is selected.
            If you change the text and do not touch radio button, the text change will not reflect in 
            the URL. In case we have time, we will fix this. Solution is using debouncing in text change */}
            <div className="speed-container">
                <input 
                    type='text' 
                    ref={speed}
                    maxLength={3}
                    inputMode='numeric'
                    className='speed-input'
                    defaultValue={initialValue}
                    placeholder='Add Maximum Speed'
                    onChange={handleDebounceChange}
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