import React, { useState } from 'react';
import SelectDate from './SelectDate';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Oct', 'Nov', 'Dec']
const Calendar = ({ text, id, sendData, group, setGroup, setYear }) => {
    return (
        <div id={id} className="calendar" >
            <div className="calendar__year">
                <p className="calendar__year__text">{text}</p>
            </div>
            <div className="calendar__months">
                {months.map((e, i) =>
                    <SelectDate id={i} text={e} group={group} setGroup={setGroup} sendData={sendData} year={text} setYear={setYear} />
                )}
            </div>
        </div>
    )
}

export default Calendar;