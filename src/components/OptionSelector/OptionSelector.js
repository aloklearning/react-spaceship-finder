import { useRef } from "react";

import './OptionSelector.css';
import ManufactureDate from "./DatePicker";
import SpeedContainer from './SpeedContainer';
import ColorPickerItem from './ColorPickerItem';
import PulseLaserSelector from './PulseLaserSelector';

const OptionSelector = ({ paramsObject, setParamsObject }) => {
    // For the final submission to query URL while filtering
    const colorItems = useRef([paramsObject.colors ?? '']);
    const maximumSpeedItem = useRef(paramsObject.maximum_speed ?? '');
    const hasPulseLaserItem = useRef(paramsObject.has_pulse_laser ?? false);
    const dateOfManufactureItem = useRef(paramsObject.date_of_manufacture ?? '');

    const onSubmit = () => {
        // Color selection handling
        // Done here, as this was an array, so handling array items done
        // in the color picker component only
        let colorParam = '';
        if(colorItems.current.length > 0) {
            if(colorItems.current.includes('all')){
                colorParam = 'all';
            }else{
                // Storing the value in rgba format to be able
                // to identify the color properly
                colorItems.current.forEach(item => {
                    colorParam += item[0]
                })
            }
        }

        // Changing the query string to the updated data from the form
        setParamsObject({
            show_all: false,
            maximum_speed: maximumSpeedItem.current,
            has_pulse_laser: hasPulseLaserItem.current,
            date_of_manufacture: dateOfManufactureItem.current,
            colors: colorParam.length > 0 ? colorParam : 'none'
        })
    }

    return (
        <div className='color-picker-container'>
            <h3>Your Options</h3>
            <ColorPickerItem colorItems={colorItems} paramsObject={paramsObject} />
            <SpeedContainer maximumSpeedItem={maximumSpeedItem} paramsObject={paramsObject} />
            <ManufactureDate dateItem={dateOfManufactureItem} paramsObject={paramsObject} />
            <PulseLaserSelector hasPulseLaserItem={hasPulseLaserItem} />
            
            {/* Filter button */}
            <br/>
            <div onClick={onSubmit} className='btn filter-btn'>Search</div>
        </div>
    )
}

export default OptionSelector;