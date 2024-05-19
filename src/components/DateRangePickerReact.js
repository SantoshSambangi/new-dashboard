import React, { useContext } from "react";
import { DatePicker } from "antd";
import { UserDataContext } from "../providers/userdataprovider";
import moment from "moment";
const { RangePicker } = DatePicker;

const DateRangePickerComponent = () => {
    
    const { dateRange, setDateRange } = useContext(UserDataContext);

    const handleDateChange = (dates) => {
        if (dates && dates.length === 2) {
            const dateObjects = dates.map((date) =>
                moment(date).format("YYYY-MM-DD")
            );
            setDateRange(dateObjects);
        } else {
            setDateRange([]);
        }
    };

    return (
        <div
            style={{
                backgroundColor: "black",
                border: "1px solid gray",
                borderRadius: "10px",
            }}>
            <RangePicker
                value={
                    dateRange.length === 2
                        ? [moment(dateRange[0]), moment(dateRange[1])]
                        : []
                }
                onChange={handleDateChange}
            />
        </div>
    );
};

export default DateRangePickerComponent;
