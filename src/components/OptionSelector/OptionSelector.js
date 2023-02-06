import './OptionSelector.css';
import { useState, useRef } from "react";

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

    const ColorPickerItem = () => {
        const [colors, setColors] = useState(['All', 'Red', 'Blue', 'Green']);
        
        const ColorCheckBox = ({colorName, boolValue}) => {
            const [value, setValue] = useState(boolValue)

            const onChange = () => {
                setValue(valueStatus => valueStatus = !valueStatus)

                // Works a bit opposite to the click
                if(!value) {
                    if(!colorItems.current.includes(colorName)) {
                        colorItems.current.push(colorName.toLowerCase());
                    }
                }else{
                    colorItems.current = colorItems.current.filter((item) => item !== colorName.toLowerCase())
                }

                console.log(colorItems.current)
            }

            return (
                <label className='color-label'>
                    <input type="checkbox" checked={value} onChange={onChange} />
                    &nbsp;&nbsp;{colorName}
                </label>
            )
        }
        
        return (
            <div style={{marginTop: '20px'}}>
                <h5>1. Choose the following colors from the option below:</h5>
                <div style={{marginTop: '10px'}} />

                {colors.map((color, index) => (
                    <ColorCheckBox 
                        key={index} 
                        colorName={color} 
                        boolValue={paramsObject.colors === color.toLowerCase()} 
                    />
                ))}
            </div>
        )
    }

    return (
        <div className='color-picker-container'>
            <h4>Please select the filters from this dropdown</h4>
            <ColorPickerItem />

            {/* Filter button */}
            <br/>
            <div onClick={onSubmit} className='btn filter-btn'>Search</div>
        </div>
    )
}

export default OptionSelector;