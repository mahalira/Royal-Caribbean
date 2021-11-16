import React from 'react';

const Tab = ({ text, id }) => {
    return (
        <div className={ id === 0 ? ' tab tab--active' : 'tab'}>
            <p className="tab__text">{text}</p>
        </div>
    )
}

export default Tab;