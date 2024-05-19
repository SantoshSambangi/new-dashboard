import React, { createContext, useEffect, useState } from "react";
export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
    const [userDetails, setUserDetails] = useState(null);
    const [dateRange, setDateRange] = useState([]);
    const [deviceIdData, setDeviceIdsData] = useState(null);

    //   set user details
    const setUserData = (data) => {
        setUserDetails(data.user);
        localStorage.setItem("data", JSON.stringify(data));
    };

    // onload the page getting userData

    useEffect(() => {
        let userDetails = localStorage.getItem("data");
        if (userDetails) {
            setUserDetails(JSON.parse(userDetails));
        }
    }, []);

    // log out user
    const handleLogout = () => {
        setUserDetails(null);
        localStorage.removeItem("data");
        localStorage.removeItem("accessToken");
    };

    return (
        <UserDataContext.Provider
            value={{
                userDetails,
                dateRange,
                deviceIdData,
                setUserData,
                handleLogout,
                setDateRange,
                setDeviceIdsData,
            }}>
            {props.children}
        </UserDataContext.Provider>
    );
};
