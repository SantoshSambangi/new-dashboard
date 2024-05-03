import React from "react";
import DashBoard from "../pages/DashBoard";
import { useLocation } from "react-router-dom";
import VehicleDetails from "../pages/VehicleDetails";
import Bms from "../pages/Bms";
import Vcu from "../pages/Vcu";
import LiveLocation from "../pages/LiveLocation";
import RemoteLock from "../pages/RemoteLock";

const DashboardLayout = () => {
    const location = useLocation();

    return (
        <DashBoard>
            {location.pathname === "/dashboard" && <VehicleDetails />}
            {location.pathname === "/dashboard/vehicledetails" && (
                <VehicleDetails />
            )}
            {location.pathname === "/dashboard/bms" && <Bms />}
            {location.pathname === "/dashboard/vcu" && <Vcu />}
            {location.pathname === "/dashboard/livelocation" && (
                <LiveLocation />
            )}
            {location.pathname === "/dashboard/remotelock" && <RemoteLock />}
        </DashBoard>
    );
};

export default DashboardLayout;
