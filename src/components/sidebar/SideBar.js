import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Drawer, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

const drawerWidth = 220;

const SideBar = () => {
    return (
        <div style={{ position: "fixed" }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}>
                <Toolbar />
                <Box sx={{ overflow: "auto" }}>
                    <List
                        sx={{
                            mt: "10px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                        }}>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <ListItem
                                    disablePadding
                                    component={Link}
                                    to="/dashboard">
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <DashboardIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="DashBoard" />
                                    </ListItemButton>
                                </ListItem>
                            </AccordionSummary>
                            <ListItem
                                disablePadding
                                component={Link}
                                to="/dashboard/vehicledetails">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DashboardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="VehicleDetails" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                component={Link}
                                to="/dashboard/bms">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DashboardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Bms" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem
                                disablePadding
                                component={Link}
                                to="/dashboard/vcu">
                                <ListItemButton>
                                    <ListItemIcon>
                                        <DashboardIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Vcu" />
                                </ListItemButton>
                            </ListItem>
                        </Accordion>
                        <ListItem
                            disablePadding
                            component={Link}
                            to="/dashboard/livelocation">
                            <ListItemButton>
                                <ListItemIcon>
                                    <LocationOnIcon />
                                </ListItemIcon>
                                <ListItemText primary="LiveLocation" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem
                            disablePadding
                            component={Link}
                            to="/dashboard/remotelock">
                            <ListItemButton>
                                <ListItemIcon>
                                    <LockIcon />
                                </ListItemIcon>
                                <ListItemText primary="RemoteLock" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText primary="Profile" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
};
export default SideBar;
