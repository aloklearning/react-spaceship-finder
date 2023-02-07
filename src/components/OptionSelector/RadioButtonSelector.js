const RadioButtonSelector = ({ name, options, paramsObject, setRadioOption}) => {
    const onChangeValue = (e) => {
        setRadioOption(e.target.value);
    }

    return(
        <div style={{ width: '-webkit-fill-available' }}>
            {options.map((item, index) => (
                <div key={index} className="radio-container">
                    {/* For speed default checked logic is different and 
                    date of manufacture is different hence we need to do a check operator
                    based render */}
                    {name === 'speed' && (
                        <>
                            <input 
                                name={name} 
                                type="radio" 
                                value={item}
                                onChange={onChangeValue}
                                // The logic to make the radio button persistant default checked
                                defaultChecked={!paramsObject.maximum_speed.includes("-") 
                                ? item === 'Exactly' : paramsObject.maximum_speed.split("-")[0] === "above"
                                ? item === 'More than' : item === 'Less than'}
                            /> {item}
                        </>
                    )}

                    {name === 'date' && (
                        <>
                            <input 
                                name={name} 
                                type="radio" 
                                value={item}
                                onChange={onChangeValue}
                                // The logic to make the radio button persistant default checked
                                defaultChecked={!paramsObject.date_of_manufacture.includes("-") 
                                ? item === 'Exact Date' : paramsObject.date_of_manufacture.split("-")[0] === "after"
                                ? item === 'After' : item === 'Before'}
                            /> {item}
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default RadioButtonSelector;