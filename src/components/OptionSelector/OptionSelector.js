import './OptionSelector.css';
import { useRef } from "react";
import ColorPickerItem from './ColorPickerItem';

const OptionSelector = ({ paramsObject, setParamsObject }) => {
    // For the final submission to query URL while filtering
    const colorItems = useRef([paramsObject.colors ?? '']);

    const onSubmit = () => {
        // Color selection handling
        // If the selection contains all, then only all
        // Else, combine all of them
        let colorParam = '';
        if(colorItems.current.length > 0) {
            if(colorItems.current.includes('all')){
                colorParam = 'all';
            }else{
                // Stroing the value in rgba format to be able
                // to identify the color properly
                colorItems.current.forEach(item => {
                    colorParam += item[0]
                })
            }
        }
        
        setParamsObject({...paramsObject, colors: colorParam})
        
        // Resetting for finerhandling
        colorItems.current = [];
    }

    return (
        <div className='color-picker-container'>
            <h4>Please select the filters from this dropdown</h4>
            <ColorPickerItem colorItems={colorItems} paramsObject={paramsObject} />

            {/* Filter button */}
            <br/>
            <div onClick={onSubmit} className='btn filter-btn'>Search</div>
        </div>
    )
}

export default OptionSelector;