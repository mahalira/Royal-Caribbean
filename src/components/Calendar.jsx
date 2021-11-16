import React, { useState } from 'react';
import SelectDate from './SelectDate';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Oct', 'Nov', 'Dec']
const Calendar = ({ text, id, sendDataDate }) => {
    const [firstMonth, setFirstMonth] = useState('');
    const [secondMonth, setSecondMonth] = useState('');
    const addMonth = () => {
        sendDataDate(text, firstMonth)
    }
    return (
        <div id={id} className="calendar" >
            <div className="calendar__year">
                <p className="calendar__year__text">{text}</p>
            </div>
            <div className="calendar__months">
                {months.map((e, i) =>
                    <SelectDate id={i} text={e} />
                )}
            </div>
        </div>
    )
}

export default Calendar;