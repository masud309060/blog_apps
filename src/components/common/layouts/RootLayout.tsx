import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from "@mui/material";
import Navbar from "../navbar/Navbar.tsx";

const RootLayout: React.FC = () => {

    return (
        <div>
            <Navbar />
            <Box sx={{ p: 3 }}>
                <Outlet />
            </Box>
        </div>
    );
};

export default RootLayout;
