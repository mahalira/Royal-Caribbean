import React from 'react';

const OptionFilter = ({label, selection, type, id, openTab, isActive}) => {
    const showContent = () => {
        openTab(id)
    }
    return (
        <div key={id} className={isActive ? "filter active" : "filter"} onClick={() => showContent()}>
            <span className="filter__label">{label}</span>
            <div className="filter__selector">
                <span className="filter__selector__selection">{selection}</span>
                <span className={type === 'calendar' ? "filter__selector__icon icon-calendar" : (isActive ? "filter__selector__icon icon-up" : "filter__selector__icon icon-down")}>
                </span>
                {/* <span class="filter__selector__badge">+2</span> */}
            </div>
        </div>
    )
}

export default OptionFilter;