import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserDataContext = createContext();

export const UserDataProvider = (props) => {
    const [userDetails, setUserDetails] = useState(null);
    const [vehicleCount, setVechileCount] = useState("")

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
            value={{ userDetails, setUserData, vehicleCount, setVechileCount, handleLogout }}>
            {props.children}
        </UserDataContext.Provider>
    );
};
