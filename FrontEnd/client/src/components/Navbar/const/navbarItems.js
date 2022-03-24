import DashboardIcon from '@mui/icons-material/Dashboard';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import CreateIcon from '@mui/icons-material/Create';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


export const mainNavbarItems = [
    {
        id: 1,
        icon: <DashboardIcon />,
        label: 'Dashboard',
        route: 'dashboard',
        roles: "admin"
    },
    {
        id: 2,
        icon: <DesktopWindowsIcon />,
        label: 'View Ideas',
        route: 'viewideas',
        roles: "admin"
    },
    {
        id: 3,
        icon: <CreateIcon />,
        label: 'Write Ideas',
        route: 'writeidea',
        roles: "admin"
    },

    {
        id: 4,
        icon: <PersonIcon />,
        //arrow: <KeyboardArrowLeftIcon />,
        label: 'Management Users',
        route: 'managementusers',
        roles: "admin"
    },
    {
        id: 5,
        icon: <TipsAndUpdatesIcon />,
        label: 'Management Ideas',
        route: 'managementideas',
        roles: "admin"
    },
    {
        id: 6,
        icon: <SettingsIcon />,
        label: 'Setting',
        route: 'settingprofiles',
        roles: "admin"
    },


]