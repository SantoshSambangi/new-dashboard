import React, { useState } from 'react';
import { DatePicker } from 'antd';
// import 'antd/dist/antd.css';
// import 'antd/dist/antd-with-locales';

const { RangePicker } = DatePicker;

const DateRangePickerComponent = () => {
    const [dateRange, setDateRange] = useState([]);
    
    const jsDates = dateRange.map(date => date.$d);
    console.log(jsDates)

    const handleDateChange = (dates) => {
        setDateRange(dates);
    };

    return (
        <div style={{backgroundColor:"black",border:"1px solid gray", borderRadius:"10px"}}>
            <RangePicker value={dateRange} onChange={handleDateChange} />
        </div>
    );
};

export default DateRangePickerComponent;
