import RadioButtonSelector from "./RadioButtonSelector";

const DateSpeedWidget = ({ 
    name,
    value,
    options,
    maxLength,
    inputMode,
    headerText, 
    placeholder,
    paramsObject,
    setSpeedDate,
    setRadioOption
}) => {
    return (
        <div style={{marginTop: 20}}>
            <p className='header'>
                {headerText}
            </p>

            {/* Main content */}
            <div className="speed-container">
                <input 
                    type='text' 
                    value={value}
                    maxLength={maxLength}
                    inputMode={inputMode}
                    className='speed-input'
                    placeholder={placeholder}
                    onChange={(e) => setSpeedDate(e.target.value)}
                />

                <RadioButtonSelector 
                    name={name}
                    options={options}
                    paramsObject={paramsObject}
                    setRadioOption={setRadioOption}/>
            </div>
        </div>
    )
}

export default DateSpeedWidget;