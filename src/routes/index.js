import React from "react";
import { useRoutes } from "react-router-dom";
import VehicleDetails from "../pages/VehicleDetails";
import Bms from "../pages/Bms";
import Vcu from "../pages/Vcu";
import LiveLocation from "../pages/LiveLocation";
import RemoteLock from "../pages/RemoteLock";
// import Header from "../components/header/Header";
import Login from "../pages/Login";
import DashboardLayout from "../layout";

const AppRoutes = () => {
    return useRoutes([
        {
            path: "/",
            element: <Login />,
        },

        {
            path: "/dashboard",
            element: <DashboardLayout/>,
            children: [
                {
                    path: "vehicledetails",
                    element: <VehicleDetails />,
                },
                {
                    path: "bms",
                    element: <Bms />,
                },
                {
                    path: "vcu",
                    element: <Vcu />,
                },
                {
                    path: "livelocation",
                    element: <LiveLocation />,
                },
                {
                    path: "remotelock",
                    element: <RemoteLock />,
                },
            ],
        },
    ]);
};

export default AppRoutes;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import VehicleDetails from "../pages/VehicleDetails";
// import Bms from "../pages/Bms";
// import Vcu from "../pages/Vcu";
// import LiveLocation from "../pages/LiveLocation";
// import RemoteLock from "../pages/RemoteLock";
// import Login from "../pages/Login";
// import DashboardLayout from "../layout";
// // import DashboardLayout from "../layout/DashboardLayout";

// const AppRoutes = () => {
//     return (
//         <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/dashboard/*" element={<DashboardLayout />}>
//                 {/* <Route path="/" element={<VehicleDetails />} /> */}
//                 <Route path="vehicledetails" element={<VehicleDetails />} />
//                 <Route path="bms" element={<Bms />} />
//                 <Route path="vcu" element={<Vcu />} />
//                 <Route path="livelocation" element={<LiveLocation />} />
//                 <Route path="remotelock" element={<RemoteLock />} />
//             </Route>
//         </Routes>
//     );
// };

// export default AppRoutes;