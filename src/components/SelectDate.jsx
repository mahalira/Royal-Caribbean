import React, { useState } from 'react';

const SelectDate = ({ text, id, group, setGroup, sendData, setYear, year }) => {
    const [active, setActive] = useState(false);
    const [selected, setSelected] = useState(false);
    const addOptions = () => {
        setActive(!active);
        sendData(text, group, setGroup);
        setYear(year);
    }

    return (
        <div key={id} id={id} className={active ? "calendar__months__month month--active" :  "calendar__months__month" } onClick={() => addOptions()}>
            {text}
        </div>
    )
}

export default SelectDate;