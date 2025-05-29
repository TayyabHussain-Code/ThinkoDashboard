import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Navbar from './Navbar';
import DrawerL from './DrawerL'

const drawerWidth = 240;


const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    overflowY:'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function SideNav() {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleMobileDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <DrawerL open={mobileOpen} />
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />

            <Navbar  mobileOpen={mobileOpen}
                handleMobileDrawerToggle={handleMobileDrawerToggle}/>

            {/* Desktop drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' }
                }}
            >
                <DrawerHeader sx={{marginBottom:'100px'}}>
                    <img src='https://thinkoworkspace.com/public/user-uploads/app-logo/7c9162da7888a26eaf19c958fd993b10.png' alt="logo" width={30} height={30} style={{margin:'0 auto'}} />
                </DrawerHeader>
                {drawer}
            </Drawer>

            {/* Mobile drawer */}
            <MuiDrawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleMobileDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <DrawerHeader>
                    <img src='https://thinkoworkspace.com/public/user-uploads/app-logo/7c9162da7888a26eaf19c958fd993b10.png' alt="logo" width={50} height={50} style={{ marginRight: '100px' }} />
                </DrawerHeader>
                <Divider />
                {drawer}
            </MuiDrawer>
        </Box>
    );
}