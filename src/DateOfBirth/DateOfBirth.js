import './DateOfBirth.css'

import { useEffect, useState } from 'react'

function DateOfBirth () {
    const [monthOptions, setMonthOptions] = useState ([])
    const [dateOptions, setDateOptions] = useState ([])
    const [yearOptions, setYearOptions] = useState ([])

    const map = new Map ()
    map.set (1, "January")
    map.set (2, "February")
    map.set (3, "March")
    map.set (4, "April")
    map.set (5, "May")
    map.set (6, "June")
    map.set (7, "July")
    map.set (8, "August")
    map.set (9, "September")
    map.set (10, "October")
    map.set (11, "November")
    map.set (12, "December")

    useEffect (() => {
        const optionsMonth = []
        for (let i = 1; i <= 12; i++) {
            const option = {
                value: i,
                text: map.get (i),
                selected: i === 8 ? 'selected' : undefined
            };
    
            optionsMonth.push (option)
        }
        setMonthOptions (optionsMonth)

        const optionsDay = []
        for (let i = 1; i <= 31; i += 1) {
            const option = {
                value: i,
                text: i,
                selected: i === 31 ? 'selected' : undefined
            };

            optionsDay.push (option)
        }
        setDateOptions (optionsDay)

        const optionsYear = []
        const year = new Date ().getFullYear ()
        for (let i = year; i >= year - 104; i -= 1) {
            const option = {
                value: i,
                text: i,
                selected: i === year ? 'selected' : undefined
            };

            optionsYear.push (option)
        }
        setYearOptions (optionsYear)
    }, [])


    return (
        <div className='DateOfBirth'>
            <form>
                <div className='monthPicker'>
                    <select id="month">
                        {/* <option value="8" selected="selected">August</option> */}
                        {
                            monthOptions.map ((option) => (
                                <option
                                value={option.value}
                                selected={option.selected}>
                                    {option.text}
                                </option>
                            ))
                        }
                    </select>
                    <p><i className="drop down"></i></p>
                </div>
            </form>
            <form>
                <div className='datePicker'>
                    <select id="date">
                        {/* <option value="31" selected='selected'>31</option> */}
                        {
                            dateOptions.map ((option) => (
                                <option
                                value={option.value}
                                selected={option.selected}>
                                    {option.text}
                                </option>
                            ))
                        }
                    </select>
                    <p><i className="drop down"></i></p>
                </div>
            </form>
            <form>
                {/* year leads down to 1919 */}
                <div className='yearPicker'>
                    <select id="year">
                        {/* <option value={year}>{year}</option> */}
                        {
                            yearOptions.map ((option) => (
                                <option
                                value={option.value}
                                selected={option.selected}>
                                    {option.text}
                                </option>
                            ))
                        }
                    </select>
                    <p><i className="drop down"></i></p>
                </div>
            </form>
        </div>
    );
}

export default DateOfBirth;