import { useState } from "react";
import DateSpeedWidget from "./DateAndSpeedWidget";

const ManufactureDate = ({ paramsObject, dateItem }) => {
    const [date, setDate] = useState(
        paramsObject.date_of_manufacture.includes("-") 
        ? paramsObject.date_of_manufacture.split("-")[1]
        : paramsObject.date_of_manufacture
    );

    // By default the URL comes with exact speed. So exactly
    const [dateRadioOption, setDateRadioOption] = useState('Exact Date');

    return(
        <>
            <DateSpeedWidget 
                name='date'
                value={date}
                maxLength={10}
                inputMode='text'
                setSpeedDate={setDate}
                paramsObject={paramsObject}
                setRadioOption={setDateRadioOption}
                placeholder='Add yyyy/mm/dd format only'
                options={['After', 'Before', 'Exact Date']}
                headerText='3. Choose the manufacturing date between the year 1980-2020 from below:'

            />
        </>
    )
}

export default ManufactureDate;