const RadioButtonSelector = ({ name, options, radioOption, setRadioOption}) => {
    
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
                        value={radioOption}
                        onChange={onChangeValue} 
                    /> {item}
                </div>
            ))}
        </div>
    )
}

export default RadioButtonSelector;