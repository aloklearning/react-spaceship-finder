import { useState } from "react";

const PulseLaserSelector = ({hasPulseLaserItem}) => {
    const [value, setValue] = useState(hasPulseLaserItem);

    const onChange = () => {
        setValue(valueStatus => valueStatus = !valueStatus)

        // Works a bit opposite to the click
        hasPulseLaserItem.current = !value;
    }

    return (
        <>
            <label style={{marginTop: '15px', paddingLeft: 0}} className='color-label'>
                {'4. Has Pulse Laser?'}
                &emsp;&emsp;&emsp;&emsp;&emsp;
                <input type="checkbox" checked={value} onChange={onChange} />
            </label>

            <p style={{fontSize: '12px', fontStyle: 'italic'}}>
                By default it unchecked answer goes as No
            </p>
        </>
    )
}

export default PulseLaserSelector;