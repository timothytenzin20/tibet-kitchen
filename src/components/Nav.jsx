import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation, matchPath } from 'react-router-dom';
import logo from "../assets/logo2.png"
import Typography from '@mui/material/Typography';
import brush from '../assets/KolkerBrush.ttf';

function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}

function MyTabs() {
  const routeMatch = useRouteMatch(['/home', '/recipes', '/login']);
  const currentTab = routeMatch?.pattern?.path;

  return (
  <div className = 'flex bg-blue-800'> 
    <img className= "max-w-13 max-h-12" src={logo} alt="site logo"/>
    <div className= 'my-2'>
      <Typography
              variant="h6"
              noWrap
              component="a"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: brush,
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Tibet 
        </Typography>
    </div>
    <div className = 'flex md:flex md:flex-grow flex-row justify-end space-x-1 bg-red-800'>
      <Tabs 
        value={currentTab}
        sx={{
          "& .MuiTabs-indicator": {backgroundColor: 'red'},
          ".Mui-selected": {color: `black`},
        }}
      >
        <Tab label="Home" value="/home" to="/home" component={Link} />
        <Tab label="Recipes" value="/recipes" to="/recipes" component={Link} />
        <Tab label="Login" value="/login" to="/login" component={Link} />
      </Tabs>
    </div>
  </div>

  );
}
  // need to style tabs text and overall

export default MyTabs;
