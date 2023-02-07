import { useEffect, useState } from "react";
import RadioButtonSelector from "./RadioButtonSelector";

const ManufactureDate = ({ paramsObject, dateItem }) => {
    const defaultDate = paramsObject.date_of_manufacture.includes("-") 
    ? paramsObject.date_of_manufacture.split("-")[1]
    : paramsObject.date_of_manufacture;

    const [date, setDate] = useState(new Date(defaultDate));

    // By default the URL comes with exact speed. So exactly
    const [dateRadioOption, setDateRadioOption] = useState('Exact Date');

    useEffect(() => {
        storeFinalDate(date);
    }, [dateRadioOption])


    const storeFinalDate = (currDate) => {
        // toLocaleDateString() returns the date in dd/mm/yyyy
        // What we need is in yyyy/dd/mm, so need to reverse and then store
        const dateArray = currDate.toLocaleDateString().split('/');
        const reversedDate = dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0];
        
        // For the query string param to be passed to the option selector component
        if(dateRadioOption === 'Exact Date') dateItem.current = reversedDate;
        else if(dateRadioOption === 'Before') dateItem.current = `before-${reversedDate}`;
        else dateItem.current = `after-${reversedDate}`;
    }


    const handleDateChange = (event) => {
        // A bug to fix when you only choose date and not the radio button
        // It now changes the value everywhere, and it will reflect in
        // query string as well
        storeFinalDate(new Date(event.target.value));
        setDate(new Date(event.target.value));
    }

    const DatePickerWidget = () => {
        return(
            <input 
            type='date' 
            min="1980-01-01"
            max="2020-12-31"
            className='date-picker'
            onChange={handleDateChange}
            value={date.toLocaleDateString('en-CA')} />
        )
    }

    return(
            <div style={{marginTop: 20}}>
                <p className='header'>
                    3. Choose the manufacturing date between the year 1980-2020 from below:
                </p>

                <div className='date-picker-container'>
                    <DatePickerWidget />

                    <RadioButtonSelector 
                        name='date'
                        paramsObject={paramsObject}
                        setRadioOption={setDateRadioOption} 
                        options={['Before', 'After', 'Exact Date']}
                    />
                </div>
            </div>
    )
}

export default ManufactureDate;