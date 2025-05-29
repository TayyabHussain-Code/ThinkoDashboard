import React from 'react';
import {
  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Inbox as InboxIcon,
  CalendarMonth as CalendarMonthIcon,
  BarChart as BarChartIcon,
  Assignment as AssignmentIcon,
  AutoStories as AutoStoriesIcon,
  Settings as SettingsIcon
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Drawer = ({ open }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, path: '/' },
    { label: 'Products', icon: <InboxIcon />, path: '/products' },
    { label: 'Calender', icon: <CalendarMonthIcon />, path: '/calender' },
    { label: 'Bar Chart', icon: <BarChartIcon />, path: '/barchart' },
    { label: 'Timeline', icon: <AssignmentIcon />, path: '/timeline' },
    { label: 'Task details', icon: <AutoStoriesIcon />, path: '/book' },
    { label: 'Setting', icon: <SettingsIcon />, path: '/setting' },
  ];

  return (
    <List>
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <ListItem
            key={item.label}
            disablePadding
            sx={{ display: 'block' }}
            onClick={() => navigate(item.path)}
          >
            <ListItemButton
              selected={isActive}
              sx={{
                minHeight: 48,             // Horizontal margin
                px:2,
                mx:1,
                my:1,
                borderRadius: 2,     // Rounded corners (theme.spacing(2) = 16px)
                justifyContent: 'flex-start',
                px: 2,
                backgroundColor: isActive ? 'blue !important' : 'transparent',
                color: isActive ? 'white' : 'inherit',
                '&:hover': {
                  backgroundColor: isActive ? 'primary.dark' : 'action.hover',
                },
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 1.5 : 'auto',
                  justifyContent: 'center',
                  color: isActive ? 'white' : 'inherit',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  marginLeft: '5px',
                  opacity: open ? 1 : 0,
                  color: isActive ? 'white' : 'inherit',
                }}
              />
            </ListItemButton>
          </ListItem>
        );
      })}   
    </List>
  );
};

export default Drawer;
