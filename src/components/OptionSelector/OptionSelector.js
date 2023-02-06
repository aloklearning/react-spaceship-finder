import './OptionSelector.css';
import { useRef } from "react";
import ColorPickerItem from './ColorPickerItem';
import PulseLaserSelector from './PulseLaserSelector';

const OptionSelector = ({ paramsObject, setParamsObject }) => {
    // For the final submission to query URL while filtering
    const colorItems = useRef([paramsObject.colors ?? '']);
    const hasPulseLaserItem = useRef(paramsObject.has_pulse_laser ?? false);

    const onSubmit = () => {
        // Color selection handling
        // If the selection contains all, then only all
        // Else, combine all of them
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

        setParamsObject({...paramsObject,
            has_pulse_laser: hasPulseLaserItem.current,
            colors: colorParam.length > 0 ? colorParam : 'none'
        })
    }

    return (
        <div className='color-picker-container'>
            <h3>Your Options</h3>
            <ColorPickerItem colorItems={colorItems} paramsObject={paramsObject} />
            <PulseLaserSelector hasPulseLaserItem={hasPulseLaserItem} />

            {/* Filter button */}
            <br/>
            <div onClick={onSubmit} className='btn filter-btn'>Search</div>
        </div>
    )
}

export default OptionSelector;