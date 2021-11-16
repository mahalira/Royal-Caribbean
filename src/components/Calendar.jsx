import React from 'react';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Set', 'Oct', 'Nov', 'Dec']
const Calendar = ({ text, id }) => {
    return (
        <div id={id} className="calendar" >
            <div className="calendar__year">
                <p className="calendar__year__text">{text}</p>
            </div>
            <div className="calendar__months">
                {months.map((e, i) => <div id={i} className="calendar__months__month">{e}</div>)}
            </div>
        </div>
    )
}

export default Calendar;