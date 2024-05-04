import React, { useContext, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import axios from "axios";
import { UserDataContext } from "../providers/userdataprovider";
import LoadingSpinner from "../components/loader";

const VehicleDetails = () => {

    const cardStyles = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "120px",
        backgroundColor: "green",
        color: "#fff",
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        overflow: "hidden",
        border: "1px solid gray",
        boxShadow:
            "rgba(145, 158, 171, 0.08) 0px 0px 2px 0px, rgba(145, 158, 171, 0.08) 0px 12px 24px -4px",
        padding: "40px 24px",
        borderRadius: "16px",
        cursor: "pointer",
    };

    const { userDetails, dateRange, deviceIdData, setDeviceIdsData } =
        useContext(UserDataContext);

    // const [deviceIdData, setDeviceIdsData] = useState(null);
    const [selectedDevices, setSelectedDevices] = useState([]);
    const [vehicleStatisticsData, setVehicleStatisticsData] = useState();
    const [showloader, setShowLoader] = useState(false);

    // extract the vehicle data
    const extractedData = Object.values(vehicleStatisticsData?.data || []).map(
        (item) => ({
            distanceTravelled: item.distanceTravelled,
            co2Savings: item?.co2Savings,
            costSavings: item?.costSavings,
            // rideScore: item.cellTemperature,
            // vehicleScore: item.bmsTemeperature,
        })
    );

    const cardsData = [
        {
            title: "Total Distance In (Km)",
            description: `DetailsFound : ${
                extractedData[0]?.distanceTravelled?.toFixed(2) || "900.04"
            } km`,
        },
        {
            title: "Carbon Savings",
            description: `DetailsFound : ${
                extractedData[0]?.costSavings?.toFixed(2) || "58.42"
            } g/km`,
        },
        {
            title: "Cost Saving",
            description: `DetailsFound : ${
                extractedData[0]?.costSavings?.toFixed(2) || "3230.96"
            }`,
        },
        {
            title: "Rider score",
            description: `DetailsFound : ${
                extractedData[0]?.bmsTemperature?.toFixed(2) || "0"
            }`,
        },
        {
            title: "Vehicle  Score",
            description: `DetailsFound : ${
                extractedData[0]?.cellTemperature?.toFixed(2) || "0"
            }`,
        },
    ];

    const handleDeviceChange = (event, newValue) => {
        setSelectedDevices(newValue);

        if (newValue && newValue.length > 0) {
            getDashboardKpiData({
                startDate: dateRange[0], // change data here when ever device id selected in drop down
                endDate: dateRange[1],
                deviceIds: newValue.map((device) => device.deviceId),
            });
        } else {
            console.log("No devices selected.");
        }
    };

    useEffect(() => {
        if (userDetails?.clientId) {
            getDeviceIds(userDetails?.clientId);
        }
    }, [userDetails]);

    // function to get device ids

    const getDeviceIds = async (id) => {
        const baseUrl = "https://staging.api.greentiger.in/api/v1/filters";
        const data = {
            clientId: id,
        };

        try {
            setShowLoader(true);
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post(baseUrl, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            if (response.status === 200) {
                setShowLoader(false);
                setDeviceIdsData(response.data);
            } else {
                setShowLoader(false);
                setDeviceIdsData(null);
            }
        } catch (error) {
            setShowLoader(false);
            console.log("error", error);
        }
    };

    useEffect(() => {
        if (userDetails?.clientId) {
            getDashboardKpiData({
                startDate: "2024-04-01",
                endDate: "2024-04-20", // change data here onload the page display data
                cumulative: 1,
                clientId: userDetails.clientId,
                type: "LOGIN",
            });
        }
    }, [userDetails]);

    const getDashboardKpiData = async (data) => {
        const baseUrl =
            "https://staging.api.greentiger.in/api/v1/dashboard_kpis";

        try {
            setShowLoader(true);
            const accessToken = localStorage.getItem("accessToken");
            const response = await axios.post(baseUrl, data, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log("111", response);

            if (response.status === 200) {
                setShowLoader(false);
                setVehicleStatisticsData(response?.data);
            } else {
                setShowLoader(false);
                setVehicleStatisticsData(null);
            }
        } catch (error) {
            setShowLoader(false);
            console.log("error", error);
        }
    };

    const renderSearchBoxSection = () => {
        return (
            <Autocomplete
                multiple
                id="devices-checkboxes-tags-demo"
                options={deviceIdData?.data || []}
                value={selectedDevices}
                onChange={handleDeviceChange}
                disableCloseOnSelect
                getOptionLabel={(option) => option.deviceIdName}
                renderGroup={(params) => (
                    <li key={params.key}>
                        <Typography
                            variant="subtitle1"
                            sx={{ fontWeight: "bold", padding: "10px" }}>
                            {params.group}
                        </Typography>
                        {params.children}
                    </li>
                )}
                renderOption={(props, option, { selected }) => (
                    <li {...props}>
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            checked={selected}
                        />
                        {option.deviceIdName}
                    </li>
                )}
                sx={{ width: 250 }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Device IDs"
                        placeholder="Select Device IDs"
                    />
                )}
            />
        );
    };

    const renderCardsSection = () => {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "16px",
                    flexWrap: "wrap",
                }}>
                {cardsData.map((card, index) => (
                    <Card key={index} sx={cardStyles}>
                        <CardContent
                            style={{
                                display: "flex",
                            }}>
                            <div style={{ flex: "2", paddingLeft: "1rem" }}>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    sx={{
                                        fontWeight: "700",
                                        lineHeight: "1.5",
                                        fontSize: "1.25rem",
                                        fontFamily: "Public Sans",
                                        color: "#fff",
                                    }}>
                                    {card.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                    style={{
                                        fontWeight: "600",
                                        lineHeight: "1.57143",
                                        fontSize: "18px",
                                        fontFamily: "Public Sans",
                                        color: "#fff",
                                        whiteSpace: "nowrap",
                                    }}>
                                    {card.description}
                                </Typography>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    };

    return (
        <>
            {showloader ? (
                <LoadingSpinner />
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                    }}>
                    {renderSearchBoxSection()}
                    {renderCardsSection()}
                </div>
            )}
        </>
    );
};

export default VehicleDetails;
