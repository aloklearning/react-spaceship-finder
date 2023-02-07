import { useEffect, useState } from "react";
import DateSpeedWidget from "./DateAndSpeedWidget";

const ManufactureDate = ({ paramsObject, dateItem }) => {
    const [date, setDate] = useState(
        paramsObject.date_of_manufacture.includes("-") 
        ? paramsObject.date_of_manufacture.split("-")[1]
        : paramsObject.date_of_manufacture
    );

    // By default the URL comes with exact speed. So exactly
    const [dateRadioOption, setDateRadioOption] = useState('Exact Date');

    useEffect(() => {
        if(!date) {
            alert('Date field cannot be left empty. Please fill the date' 
            + ' in yyyy/mm/dd format and try again.');
            return;
        }

        // Converting the provided time to date
        let [myYear, myMonth, myDate] = date.split('/');
        myYear = parseInt(myYear);

        if(myYear > 2020 || myYear < 1980) {
            alert('Invalid search. Searching beyond year range, i.e., 1980-2020.'
            + ' Please try again.');
            return; 
        }else if(date === "1980/01/01" && dateRadioOption === 'Before') {
            alert('Invalid search. Searching below the minimum year range, i.e., 1980.'
            + ' Please try again.');
            return;
        }else if(date === "2020/12/31" && dateRadioOption === 'After') {
            alert('Invalid search. Searching above the maximum year range, i.e., 2020.'
            + ' Please try again.');
            return;
        }

        // For the query string param to be passed to the option selector component
        if(dateRadioOption === 'Exact Date') dateItem.current = date;
        else if(dateRadioOption === 'Before') dateItem.current = `before-${date}`;
        else dateItem.current = `after-${date}`;

    }, [dateRadioOption])

    return(
        <>
            <DateSpeedWidget 
                name='date'
                value={date}
                maxLength={10}
                inputMode='text'
                setSpeedDate={setDate}
                paramsObject={paramsObject}
                placeholder='Add yyyy/mm/dd'
                setRadioOption={setDateRadioOption}
                options={['After', 'Before', 'Exact Date']}
                headerText='3. Choose the manufacturing date between the year 1980-2020 from below:'

            />

            <p style={{fontSize: '12px', fontStyle: 'italic', marginTop: '10px'}}>
                Please provide the date in full yyyy/dd/mm for the best result
            </p>
        </>
    )
}

export default ManufactureDate;