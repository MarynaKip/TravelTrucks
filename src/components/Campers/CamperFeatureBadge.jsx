import { Box, Typography } from '@mui/material';
import sprite from '../../assets/sprite.svg';

const CamperFeatureBadge = ({ icon, label }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: 'secondary.light', padding: '12px 18px', borderRadius: '100px' }}>
      <svg width="20" height="20" style={{ fill: 'secondary.contrastText' }}>
        <use href={`${sprite}#icon-${icon}`} />
      </svg>
      <Typography variant='body2' color='text.primary'>{label}</Typography>
    </Box>
  );
};

export default CamperFeatureBadge;
