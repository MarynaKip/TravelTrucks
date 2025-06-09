import React from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton } from '@mui/material';
import sprite from '../assets/sprite.svg';
import Navigation from './Navigation';

export const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{backgroundColor: '#F7F7F7'}}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* Left side: Logo */}
        <Box>
          <IconButton edge="start" color="inherit">
            <svg width="136" height="16">
            <use href={`${sprite}#icon-logo`} />
            </svg>
          </IconButton>
        </Box>

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
