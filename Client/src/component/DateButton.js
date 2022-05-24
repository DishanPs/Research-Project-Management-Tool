import React from 'react'
import {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import format from 'date-fns/format'
import { subDays } from 'date-fns/esm'
import addDays from 'date-fns/addDays'
import setHours from 'date-fns/setHours';
import setMinutes from 'date-fns/setMinutes';

const DateButton = () => {
    const [startDate, setStartDate] = useState(
        setHours(setMinutes(new Date(), 30), 16)
      );
    
      const [isOpen, setIsOpen] = useState(false);
    
      const handleChange = (e) => {
        setIsOpen(!isOpen);
        setStartDate(e);
      };
    
      const handleClick = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
      };

  return (
    <div>
      <button className="example-custom-input" onClick={handleClick}>
        {format(startDate, "MMMM d, yyyy h:mm aa")}
      </button>
      {isOpen && (
        <DatePicker
          showTimeSelect 
          selected={startDate}
          onChange={handleChange}
          minDate={subDays(new Date(), 0)}
          excludeTimes={[
            setHours(setMinutes(new Date(), 0), 17),
            setHours(setMinutes(new Date(), 30), 18),
            setHours(setMinutes(new Date(), 30), 19),
            setHours(setMinutes(new Date(), 30), 17),
          ]}
          //dateFormat="MMMM d, yyyy h:mm aa"
          inline />
      )}
    </div>
  )
}

export default DateButton
