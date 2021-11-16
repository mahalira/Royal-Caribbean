import React, { useState } from 'react';

const Select = ({ text, id }) => {
    const [active, setActive] = useState(false);
    return (
        <div id={id} className={active ? "select-active select" : "select"} onClick={() => setActive(!active)}>
            <p className="select__text">{text}</p>
        </div>
    )
}

export default Select;