import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import OptionFilter from './components/OptionFilter';
import Select from './components/Select';
import Tab from './components/Tab';
import Calendar from './components/Calendar';

const countries = ['Alaska', 'Arabian Gulf', 'Asia', 'Australia&New Zealand', 'Bahamas', 'Bermuda',
    'Canada & New England', 'Caribbean', 'Cuba', 'Europe', 'Hawaii', 'Panama Canal', 'Repositioning',
    'South Pacific', 'Transatlantic', 'Transpacific'];

const tabs = ['The Americas & the caribbean', 'Europe', 'Asia & Southpacific'];

const years = ['2018', '2019', '2020'];

const CruiseSearchWidget = () => {
    const [optionSelected, setOptionSelected] = useState('');
    const [openOptions, setOpenOptions] = useState(false);
    const [destinations, setDestinations] = useState([]);
    const [shipments, setShipments] = useState([]);
    const [addData, setAddData] = useState(false);
    const [arrTemp, setArrTemp] = useState([]);

    useEffect(() => {
        setAddData(false);
        setArrTemp([]);
    }, [shipments, destinations]);

    const showOptions = (id) => {
        if (optionSelected !== id || !openOptions) {
            setOpenOptions(true);
        } else {
            setOpenOptions(false);
        }
        setOptionSelected(id);
    }

    const applyChanges = (id) => {
        if (id === 1) {
            setDestinations([...arrTemp]);
        } else if (id === 2) {
            setShipments([...arrTemp])
        }

    }

    const getData = (text, group, setGroup) => {
        if (window.innerWidth > 760) {
            let arrTemp = [...group, text];
            setGroup([...arrTemp]);
        } else{
            let newArrTemp = [...arrTemp, text];
            setArrTemp([...newArrTemp]);
        }
    }

    return (
        <div className="cruise-search-widget__base">
            <div className="cruise-search-widget__title">
                Find a Cruise
            </div>
            <div className="cruise-search-widget__toolbar">
                <OptionFilter label={'Cruises to'} selection={'Any Destination'} openTab={showOptions} isActive={optionSelected === 1 && openOptions} id={1} group={destinations} />
                <OptionFilter label={'Sailing from'} selection={'Any Departure Port'} openTab={showOptions} isActive={optionSelected === 2 && openOptions} id={2} group={shipments} />
                <OptionFilter label={'Leaving'} selection={'Any Date'} type={'calendar'} openTab={showOptions} isActive={optionSelected === 3 && openOptions} id={3} group={shipments}/>
                <div className="cruise-search-widget__cta">
                    <Button text={window.innerWidth <= 760 ? 'FIND A CRUISE' : 'SEARCH CRUISES'} />
                </div>
            </div>
            {openOptions &&
                <div className="cruise-search-widget__dropdown">
                    <div className="cruise-search-widget__dropdown__header">
                        <span onClick={() => setOpenOptions(false)} id="" className="cruise-search-widget__dropdown__header--buttonreturn icon-left">
                        </span>
                        <div className="cruise-search-widget__dropdown__header--label">
                            {optionSelected === 1 && <span>Select Destination</span>}
                            {optionSelected === 2 && <span>Select Departure Port</span>}
                            {optionSelected === 3 && <span>Select Travel Dates</span>}
                        </div>
                        <button
                            className="cruise-search-widget__dropdown__header--buttonapply"
                            onClick={() => {
                                applyChanges(optionSelected);
                                setOpenOptions(false)
                            }}
                        >
                            APPLY
                        </button>
                    </div>

                    <div className="cruise-search-widget__dropdown__content">
                        {optionSelected === 1 && <div className="cruise-search-widget__dropdown__content__options">
                            {countries.map((e, i) => <Select text={e} id={i}  group={destinations} setGroup={setDestinations} sendData={getData} />)}
                        </div>}
                        {optionSelected === 2 &&
                            <>
                                <div className="cruise-search-widget__dropdown__content__tabs">
                                    {tabs.map((e, i) => {
                                        return <Tab text={e} id={i} />
                                    })}
                                </div>
                                <div className="cruise-search-widget__dropdown__content__options">
                                    {countries.map((e, i) => <Select text={e} id={i}  group={shipments} setGroup={setShipments} sendData={getData} />)}
                                </div>
                            </>
                        }
                        {optionSelected === 3 &&
                            <div className="cruise-search-widget__dropdown__content__calendars">
                                {years.map((e, i) => <Calendar text={e} />)}
                            </div>
                        }
                        <div />
                    </div>
                </div>
            }
        </div>

    )
}

export default CruiseSearchWidget;