import React from 'react';

const CruiseSearchWidget = () => {
    return (
        <div class="cruise-search-widget__base">
            <div class="cruise-search-widget__title">
                Find a Cruise
            </div>
            <div class="cruise-search-widget__toolbar">
                <div id="" class="cruise-search-widget__filter" tabindex="0">
                    <span class="cruise-search-widget__label">Cruises to</span>
                    <div class="cruise-search-widget__selector">
                        <span class="cruise-search-widget__selection">Any Destination</span>
                        <span class="cruise-search-widget__icon">
                        </span>
                        <span class="cruise-search-widget__badge">+2</span>
                    </div>
                </div>
                <div id="" class="cruise-search-widget__filter" tabindex="0">
                    <span class="cruise-search-widget__label">Sailing from</span>
                    <div class="cruise-search-widget__selector">
                        <span class="cruise-search-widget__selection">Any Departure Port</span> 
                        <span class="cruise-search-widget__icon">
                        </span>
                        <span class="cruise-search-widget__badge">+2</span>
                    </div>
                </div>
                <div id="" class="cruise-search-widget__filter" tabindex="0">
                    <span class="cruise-search-widget__label">Leaving</span>
                    <div class="cruise-search-widget__selector">
                        <span class="cruise-search-widget__selection">Any Date</span>
                        <span class="cruise-search-widget__icon">
                        </span>
                    </div>
                </div>
                <div class="cruise-search-widget__cta">
                    <button id="" class="cruise-search-widget__button">Search Cruises</button>
                </div>
            </div>
            <div class="cruise-search-widget__dropdown">
                <div class="cruise-search-widget__dropdown-header">
                    <button id="" class="cruise-search-widget__dropdown-button">
                        <span class="cruise-search-widget__icon">
                        </span>
                    </button>
                    <div class="cruise-search-widget__dropdown-label">
                        <span>Select Destination</span>
                        <span>select Departure Port</span>
                        <span>Select Travel Dates</span>
                    </div>
                </div>
                <div class="cruise-search-widget__options">
                    <div class="cruise-search-widget__option">
                        <input id="" class="cruise-search-widget__option-input" type="checkbox" name="" />
                        <label class="cruise-search-widget__option-label" for="">Alaska</label>
                    </div>
                </div>
                <div class="cruise-search-widget__options">
                    <div class="cruise-search-widget__tabs">
                        <div class="cruise-search-widget__tab">
                            <span class="cruise-search-widget__tab-label">Caribbean & Americas</span>
                        </div>
                    </div>
                    <div class="cruise-search-widget__tab-options">
                        <div class="cruise-search-widget__option">
                            <input id="" class="cruise-search-widget__option-input" type="checkbox" name="" />
                            <label class="cruise-search-widget__option-label" for="">Miami, Florida</label>
                        </div>
                    </div>
                </div>
                <div class="cruise-search-widget__options">
                    <div class="cruise-search-widget__year">
                        <div class="cruise-search-widget__year-title">
                            <span class="cruise-search-widget__year-label">2019</span>
                        </div>
                        <div class="cruise-search-widget__months">
                            <div class="cruise-search-widget__option cruise-search-widget__month">
                                <input id="" class="cruise-search-widget__option-input" type="checkbox" name="" />
                                <label class="cruise-search-widget__option-label" for="">Jan</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CruiseSearchWidget;