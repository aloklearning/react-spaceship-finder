const RadioButtonSelector = ({ name, options, paramsObject, setRadioOption}) => {
    
    const onChangeValue = (e) => {
        setRadioOption(e.target.value);
    }

    return(
        <div style={{ width: '-webkit-fill-available' }}>
            {options.map((item, index) => (
                <div key={index} className="radio-container">
                    <input 
                        name={name} 
                        type="radio" 
                        value={item}
                        onChange={onChangeValue}
                        // Logic for the default check. If the value is coming
                        // for the first time, it should be without - (for range),
                        // and should be considered as Exactly
                        defaultChecked={!paramsObject.maximum_speed
                            .includes("-") ? item === 'Exactly' : false}
                    /> {item}
                </div>
            ))}
        </div>
    )
}

export default RadioButtonSelector;