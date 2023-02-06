import { useState } from "react";

const ColorPickerItem = ({ colorItems, paramsObject }) => {
    const colors = ['All', 'Red', 'Blue', 'Green'];
    
    const ColorCheckBox = ({colorName, bool}) => {
        const [value, setValue] = useState(bool);

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
                    bool={paramsObject.colors.includes(color.toLowerCase()[0])}
                />
            ))}
        </div>
    )
}

export default ColorPickerItem;