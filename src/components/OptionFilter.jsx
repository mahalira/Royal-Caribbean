import React from 'react';

const OptionFilter = ({ label, labelSecond, selection, type, id, openTab, isActive, group, year }) => {
    const showContent = () => {
        openTab(id)
    }
    return (
        <div key={id} className={isActive ? "filter active" : "filter"} onClick={() => showContent()}>
            <span className="filter__label">{window.innerWidth <= 760 && group.length !== 0 ? labelSecond: label }</span>
            <div className="filter__selector">
                <span className="filter__selector__selection">{group.length !== 0 ? (type=== "calendar" ? (group.length>1 ?(`${group[0]} ${year} - ${group[1]}  ${year}`): `${group[0]} ${year}` ): group[0]) :selection}</span>
                {group.length !== 0 & type !== 'calendar' ?
                    <span class="filter__selector__badge">+{group.length}</span>
                    :
                    <span className={type === 'calendar' ? "filter__selector__icon icon-calendar" : (isActive ? "filter__selector__icon icon-up" : "filter__selector__icon icon-down")}>
                    </span>
                }
            </div>
        </div>
    )
}

export default OptionFilter;