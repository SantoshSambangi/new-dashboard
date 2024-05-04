import React from "react";
import "./styles/dashboard.css";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const DashBoard = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const btnData = ["Vehicle Details", "Bms Details", "Vcu Details"];

    const btnBlockStyles = {
        display: "flex",
        flexDorection: "column",
        gap: "10px",
        // position: "fixed",
        justifyContent: "space-around",
        margin: "20px",
    };

    const handleNavigation = (item) => {
        switch (item) {
            case "Vehicle Details":
                navigate("/dashboard/vehicledetails");
                break;
            case "Bms Details":
                navigate("/dashboard/bms");
                break;
            case "Vcu Details":
                navigate("/dashboard/vcu");
                break;
            default:
                return null;
        }
    };

    return (
        <React.Fragment>
            <Header />
            <SideBar />
            <div style={{ paddingLeft: "250px" }}>
                <h1>DashBoard</h1>
                {children}
                <Box sx={btnBlockStyles}>
                    {/* {btnData?.map((item, index) => {
                        const isActiveMenu = location.pathname.includes(
                            item?.toLowerCase().replace(/\s/g, "")
                        );
                        return (
                            <Button
                                key={index}
                                variant={
                                    isActiveMenu ? "contained" : "outlined"
                                }
                                onClick={() => handleNavigation(item)}>
                                {item}
                            </Button>
                        );
                    })} */}
                    <Button
                        variant={
                            location?.pathname === "/dashboard/vehicledetails"
                                ? "contained"
                                : "outlined"
                        }
                        onClick={() => navigate("/dashboard/vehicledetails")}>
                        Vehicle Details
                    </Button>
                    <Button
                        variant={
                            location?.pathname === "/dashboard/bms"
                                ? "contained"
                                : "outlined"
                        }
                        onClick={() => navigate("/dashboard/bms")}>
                        Bms Details
                    </Button>
                    <Button
                        variant={
                            location?.pathname === "/dashboard/vcu"
                                ? "contained"
                                : "outlined"
                        }
                        onClick={() => navigate("/dashboard/vcu")}>
                        Vcu Details
                    </Button>
                </Box>
            </div>
        </React.Fragment>
    );
};

export default DashBoard;
