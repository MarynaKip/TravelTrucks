import { Box, InputBase, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { changeLocation } from '../../redux/filters/filtersSlice';
import { selectLocationFilter } from '../../redux/filters/filtersSelectors';
import sprite from '../../assets/sprite.svg';

const LocationInput = () => {
  const dispatch = useDispatch();
  const location = useSelector(selectLocationFilter);

  return (
    <Box>
      <Typography color='text.tertiary' variant='body1' sx={{ mb: 1 }}>Location</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 360,
          height: 56,
          bgcolor: 'primary.light',
          borderRadius: '12px',
          px: 2.5,
        }}
      >
        <svg width="20" height="20">
          <use href={`${sprite}#icon-location`} />
        </svg>
        <InputBase
          sx={{ ml: 1, flex: 1, color: 'text.primary' }}
          placeholder="Enter location"
          value={location}
          onChange={(e) => dispatch(changeLocation(e.target.value))}
        />
      </Box>
    </Box>
  );
};

export default LocationInput;
