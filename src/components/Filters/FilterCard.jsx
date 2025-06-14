import { Box, Typography } from '@mui/material';
import sprite from '../../assets/sprite.svg';

const FilterCard = ({ label, icon, selected, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 112, height: 96, borderRadius: 2,
        border: '1px solid', borderColor: selected ? '#E44848' : '#DADDE1',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', cursor: 'pointer'
      }}
    >
      <svg width="32" height="32"><use href={`${sprite}#icon-${icon}`} /></svg>
      <Typography mt={1} sx={{ color: '#101828', fontSize: 16 }}>{label}</Typography>
    </Box>
  );
};

export default FilterCard;
