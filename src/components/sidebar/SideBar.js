// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

// export default function SideBar() {
//   const [state, setState] = React.useState({
//     top: false,
//     left: false,
//     bottom: false,
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <div>
//       {['left', 'right', 'top', 'bottom'].map((anchor) => (
//         <React.Fragment key={anchor}>
//           <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//           <Drawer
//             anchor={anchor}
//             open={state[anchor]}
//             onClose={toggleDrawer(anchor, false)}
//           >
//             {list(anchor)}
//           </Drawer>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// }
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import { Box, Drawer, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';

// import MailIcon from '@mui/icons-material/Mail';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import CheckBoxIcon from '@mui/icons-material/CheckBox';
// const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
// const checkedIcon = <CheckBoxIcon fontSize="small" />;

const drawerWidth = 220;

const SideBar = () => {
  return (
    <div style={{position: "fixed"}}>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}>
      <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          {/* <List sx={{mt:"10px",display:"flex", flexDirection:"column", gap:"15px"}}>
              <ListItem disablePadding component={Link} to="/dashboard">
                    <ListItemButton>
                      <ListItemIcon>
                          <DashboardIcon/>
                      </ListItemIcon>
                      <ListItemText primary="DashBoard"/>
                    </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/dashboard/vehicledetails">
                    <ListItemButton>
                      <ListItemIcon>
                        <DashboardIcon/>
                      </ListItemIcon>
                      <ListItemText primary="VehicleDetails"/>
                    </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/dashboard/bms">
                    <ListItemButton>
                      <ListItemIcon>
                        <DashboardIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Bms" />
                    </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/dashboard/vcu">
                    <ListItemButton>
                      <ListItemIcon>
                        <DashboardIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Vcu" />
                    </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/dashboard/livelocation">
                    <ListItemButton>
                      <ListItemIcon>
                        <LocationOnIcon/>
                      </ListItemIcon>
                      <ListItemText primary="LiveLocation" />
                    </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/dashboard/remotelock">
                    <ListItemButton>
                      <ListItemIcon>
                          <LockIcon/>
                      </ListItemIcon>
                      <ListItemText primary="RemoteLock"  />
                    </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                          <PersonIcon/>
                      </ListItemIcon>
                      <ListItemText primary="Profile"  />
                    </ListItemButton>
              </ListItem>
          </List> */}

      <List sx={{ mt: "10px", display: "flex", flexDirection: "column", gap: "20px" }}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <ListItem disablePadding component={Link} to="/dashboard">
                  <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="DashBoard" />
                  </ListItemButton>
                </ListItem>
              </AccordionSummary>
              <ListItem disablePadding component={Link} to="/dashboard/vehicledetails">
                <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                  <ListItemText primary="VehicleDetails" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/dashboard/bms">
                <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                  <ListItemText primary="Bms" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding component={Link} to="/dashboard/vcu">
                <ListItemButton>
                    <ListItemIcon>
                      <DashboardIcon />
                    </ListItemIcon>
                  <ListItemText primary="Vcu" />
                </ListItemButton>
              </ListItem>
            </Accordion>
            <ListItem disablePadding component={Link} to="/dashboard/livelocation">
              <ListItemButton>
                <ListItemIcon>
                  <LocationOnIcon />
                </ListItemIcon>
                <ListItemText primary="LiveLocation" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding component={Link} to="/dashboard/remotelock">
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
  )
}
export default SideBar;