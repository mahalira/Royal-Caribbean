import React from 'react';

const OptionFilter = ({label, selection, type}) => {
    return (
        <div id="" class="filter" tabindex="0">
            <span class="filter__label">{label}</span>
            <div class="filter__selector">
                <span class="filter__selector__selection">{selection}</span>
                <span className={type === 'calendar' ? "filter__selector__icon icon-calendar" : "filter__selector__icon icon-down"}>
                </span>
                {/* <span class="filter__selector__badge">+2</span> */}
            </div>
        </div>
    )
}

export default OptionFilter;