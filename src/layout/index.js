// // import React from "react";
// // import { Outlet, useLocation } from "react-router-dom";
// // import Header from "../components/header/Header"
// // import VehicleDetails from "../pages/VehicleDetails";
// // import Bms from "../pages/Bms";
// // import Vcu from "../pages/Vcu";
// // import LiveLocation from "../pages/LiveLocation";
// // import RemoteLock from "../pages/RemoteLock";


// // const DashboardLayout = () => {
// //     const location = useLocation();
// //     return (
// //         <React.Fragment>
// //             <Header>
// //                 {location.pathname === "/dashboard" && (
// //                     <VehicleDetails />
// //                 )}
// //                 {location.pathname === "/dashboard/vehicledetails" && <VehicleDetails />}
// //                 {location.pathname === "/dashboard/bms" && <Bms />}
// //                 {location.pathname === "/dashboard/vcu" && <Vcu />}
// //                 {location.pathname === "/dashboard/livelocation" && <LiveLocation />}
// //                 {location.pathname === "/dashboard/remotelock" && <RemoteLock />}
// //             </Header>
// //         </React.Fragment>
// //     );
// // };

// // export default DashboardLayout;

// // import React from "react";
// // import { Outlet, useLocation } from "react-router-dom";
// // import Header from "../components/header/Header";

// // const DashboardLayout = () => {
// //     const location = useLocation();
// //     return (
// //         <React.Fragment>
// //             <Header />
// //             <Outlet />
// //         </React.Fragment>
// //     );
// // };

// // export default DashboardLayout;

// import React from "react";
// import DashBoard from "../pages/DashBoard";
// import { useLocation } from "react-router-dom";
// import VehicleDetails from "../pages/VehicleDetails";
// import Bms from "../pages/Bms";
// import Vcu from "../pages/Vcu";
// import LiveLocation from "../pages/LiveLocation";
// import RemoteLock from "../pages/RemoteLock";

// const DashboardLayout = () => {

//     const location = useLocation();
//     console.log(location.pathname);
//     return (
//         <DashBoard>
//             {
//                 location.pathname === "vehicledetails" && <VehicleDetails/>
//             }
//             {
//                 location.pathname === "bms" && <Bms/>
//             }
//             {
//                 location.pathname === "vcu" && <Vcu/>
//             }
//             {
//                 location.pathname === "livelocation" && <LiveLocation/>
//             }
//             {
//                 location.pathname === "remotelock" && <RemoteLock/>
//             }

//         </DashBoard>
//     );
// };

// export default DashboardLayout;


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
    console.log(location.pathname);

    return (
        <DashBoard>
            {location.pathname === "/dashboard" && <VehicleDetails />}
            {location.pathname === "/dashboard/vehicledetails" && <VehicleDetails />}
            {location.pathname === "/dashboard/bms" && <Bms />}
            {location.pathname === "/dashboard/vcu" && <Vcu />}
            {location.pathname === "/dashboard/livelocation" && <LiveLocation />}
            {location.pathname === "/dashboard/remotelock" && <RemoteLock />}
        </DashBoard>
    );
};

export default DashboardLayout;
