import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import sprite from '../assets/sprite.svg';
import Navigation from './Navigation';

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{backgroundColor: 'primary.light',  px: '64px' }}>
      <Toolbar disableGutters sx={{ justifyContent: 'space-between'}}>
              <svg
                width="137.1"
                height="22.85"
                >
                  <use href={`${sprite}#icon-logo`} />
                </svg>
        {/* Center: Navigation Links */}
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
          }}
        >
          <Navigation />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
