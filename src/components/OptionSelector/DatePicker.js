import { useEffect, useState } from "react";
import RadioButtonSelector from "./RadioButtonSelector";

const ManufactureDate = ({ paramsObject, dateItem }) => {
    const defaultDate = paramsObject.date_of_manufacture.includes("-") 
    ? paramsObject.date_of_manufacture.split("-")[1]
    : paramsObject.date_of_manufacture;

    const [date, setDate] = useState(new Date(defaultDate));

    // By default the URL comes with exact speed. So exactly
    const [dateRadioOption, setDateRadioOption] = useState('Exact Date');

    // useEffect(() => {
    //     if(!date) {
    //         alert('Date field cannot be left empty. Please fill the date' 
    //         + ' in yyyy/mm/dd format and try again.');
    //         return;
    //     }

    //     // Converting the provided time to date
    //     let myYear = date.split('/')[0];
    //     myYear = parseInt(myYear);

    //     if(myYear > 2020 || myYear < 1980) {
    //         alert('Invalid search. Searching beyond year range, i.e., 1980-2020.'
    //         + ' Please try again.');
    //         return; 
    //     }else if(date === "1980/01/01" && dateRadioOption === 'Before') {
    //         alert('Invalid search. Searching below the minimum year range, i.e., 1980.'
    //         + ' Please try again.');
    //         return;
    //     }else if(date === "2020/12/31" && dateRadioOption === 'After') {
    //         alert('Invalid search. Searching above the maximum year range, i.e., 2020.'
    //         + ' Please try again.');
    //         return;
    //     }

    //     // For the query string param to be passed to the option selector component
    //     if(dateRadioOption === 'Exact Date') dateItem.current = date;
    //     else if(dateRadioOption === 'Before') dateItem.current = `before-${date}`;
    //     else dateItem.current = `after-${date}`;

    // }, [dateRadioOption])


    const handleDateChange = (event) => {
        setDate(new Date(event.target.value))
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