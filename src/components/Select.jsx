import React, { useState } from 'react';

const Select = ({ text, id, group, setGroup, sendData }) => {
    const [active, setActive] = useState(false);
    const addOptions = () => {
        setActive(!active);
        sendData(text, group, setGroup);
    }

    return (
        <div key={id} id={id} className={active ? "select-active select" : "select"} onClick={() => addOptions()}>
            <p className="select__text">{text}</p>
        </div>
    )
}

export default Select;