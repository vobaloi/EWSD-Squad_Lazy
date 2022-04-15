import DashboardIcon from '@mui/icons-material/Dashboard';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SettingsIcon from '@mui/icons-material/Settings';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import React, { useState } from 'react'





export const mainNavbarItems = [

    {

        id: 1,
        icon: <DashboardIcon />,
        label: 'Dashboard',
        route: 'dashboard',
        roles: ["admin", "QA", "Coordinator"]
    },
    {
        id: 2,
        icon: <DesktopWindowsIcon />,
        label: 'View Ideas',
        route: 'view-ideas',
        roles: ["admin", "QA", "Coordinator", "user"]
    },
    {
        id: 3,
        icon: <CreateIcon />,
        label: 'Write Ideas',
        route: 'write-idea',
        roles: ["admin", "QA", "Coordinator", "user"]
    },

    {
        id: 4,
        icon: <PersonIcon />,
        label: 'Management Users',
        route: 'management-users',
        roles: ["admin", "QA"]
    },
    {
        id: 5,
        icon: <TipsAndUpdatesIcon />,
        label: 'Management Ideas',
        route: 'management-ideas',
        roles: ["admin", "Coordinator"]
    },
    {
        id: 6,
        icon: <SettingsIcon />,
        label: 'Department',
        route: 'departments',
        roles: ["admin", "QA"]
    },
    {
        id: 7,
        icon: <SettingsIcon />,
        label: 'Categories',
        route: 'categories',
        roles: ["admin", "QA", "Coordinator"]
    },
    {
        id: 8,
        icon: <SettingsIcon />,
        label: 'Setting',
        route: 'setting-profiles',
        roles: ["admin", "QA", "Coordinator", "user"]
    },


]