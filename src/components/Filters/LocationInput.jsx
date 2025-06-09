import { Box, InputBase, Typography } from '@mui/material';
import sprite from '../../assets/sprite.svg';

const LocationInput = () => {
  return (
    <Box>
      <Typography sx={{ color: '#6C717B', fontSize: 16, mb: 1 }}>Location</Typography>
      <Box sx={{
        display: 'flex', alignItems: 'center', width: 360, height: 56,
        bgcolor: '#F7F7F7', borderRadius: '12px', px: 2
      }}>
        <svg width="20" height="20"><use href={`${sprite}#icon-location`} /></svg>
        <InputBase sx={{ ml: 1, flex: 1, color: '#101828' }} placeholder="Enter location" />
      </Box>
    </Box>
  );
};

export default LocationInput;
