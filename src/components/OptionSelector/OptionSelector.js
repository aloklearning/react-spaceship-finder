import './OptionSelector.css';
import { useState } from "react";

const OptionSelector = ({ paramsObject, setParamsObject }) => {

    const onSubmit = () => {
        
    }

    const ColorPickerItem = () => {
        const [colors, setColors] = useState(['All', 'Red', 'Blue', 'Green']);
        
        const ColorCheckBox = ({colorName, boolValue}) => {
            const [value, setValue] = useState(boolValue)

            const onChange = () => {
                setValue(valueStatus => valueStatus = !valueStatus)
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