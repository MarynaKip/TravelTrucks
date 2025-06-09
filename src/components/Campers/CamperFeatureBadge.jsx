import { Box, Typography } from '@mui/material';
import sprite from '../../assets/sprite.svg';

const CamperFeatureBadge = ({ icon, label }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, backgroundColor: '#F2F4F7', padding: '12px 18px', borderRadius: '100px' }}>
      <svg width="20" height="20" style={{ fill: '#101828' }}>
        <use href={`${sprite}#icon-${icon}`} />
      </svg>
      <Typography sx={{ fontSize: 14 }}>{label}</Typography>
    </Box>
  );
};

export default CamperFeatureBadge;
