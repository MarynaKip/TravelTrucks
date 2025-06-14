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
      <Typography sx={{ color: '#6C717B', fontSize: 16, mb: 1 }}>Location</Typography>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 360,
          height: 56,
          bgcolor: '#F7F7F7',
          borderRadius: '12px',
          px: 2,
        }}
      >
        <svg width="20" height="20">
          <use href={`${sprite}#icon-location`} />
        </svg>
        <InputBase
          sx={{ ml: 1, flex: 1, color: '#101828' }}
          placeholder="Enter location"
          value={location}
          onChange={(e) => dispatch(changeLocation(e.target.value))}
        />
      </Box>
    </Box>
  );
};

export default LocationInput;
