import React, { useState } from 'react';

const SelectDate = ({ text, id }) => {
    const [active, setActive] = useState(false);
    const addOptions = () => {
        setActive(!active);
        // sendData(text, group, setGroup);
    }

    return (
        <div key={id} id={id} className={active ? "calendar__months__month month--active" : "calendar__months__month"} onClick={() => addOptions()}>
            {text}
        </div>
    )
}

export default SelectDate;