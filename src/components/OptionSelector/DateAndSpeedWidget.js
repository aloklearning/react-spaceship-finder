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
            <div className="date-speed-container">
                <input 
                    type='text' 
                    value={value}
                    maxLength={maxLength}
                    inputMode={inputMode}
                    placeholder={placeholder}
                    className="date-speed-input"
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