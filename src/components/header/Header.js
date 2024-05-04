import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DateRangePickerComponent from "../DateRangePickerReact";
import { useLocation } from "react-router-dom";
import { UserDataContext } from "../../providers/userdataprovider";

export default function ClippedDrawer(props) {
    const { deviceIdData } = React.useContext(UserDataContext);
    const location = useLocation();

    const handlePathName = () => {
        switch (location.pathname) {
            case "/dashboard":
                return "Dashboard";
            case "/dashboard/vehicledetails":
                return "Vehicle Details";
            case "/dashboard/bms":
                return "Bms Page";
            case "/dashboard/vcu":
                return "Vcu Page";
            case "/dashboard/livelocation":
                return "Live Location";
            case "/dashboard/remotelock":
                return "Remote Lock";
            default:
                return null;
        }
    };

    return (
        <Box sx={{ display: "flex", position: "fixed", zIndex: "1" }}>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: "#fff",
                }}>
                <Toolbar
                    sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box
                        component="div"
                        sx={{ width: "200px", flexWrap: "wrap" }}>
                        <img
                            src="https://s3.ap-south-1.amazonaws.com/greentiger.in-content/brand_icons/logo.png"
                            alt="logo"
                            style={{ width: "220px" }}
                        />
                    </Box>
                    <Box sx={{ color: "black" }}>
                        <Typography variant="h4">{handlePathName()}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "20px",
                        }}>
                        <Box
                            sx={{
                                border: "1px solid gray",
                                color: "black",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "2px 15px",
                                borderRadius: "10px",
                            }}>
                            <Typography variant="h5">
                                {deviceIdData?.data?.length}
                            </Typography>
                            <Typography>Vehicles</Typography>
                        </Box>
                        <Box>
                            <DateRangePickerComponent />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
