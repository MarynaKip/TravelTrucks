import { Box, Typography, Button } from '@mui/material';
import LocationInput from './LocationInput';
import FilterSection from './FilterSection';
import { useDispatch, useSelector } from 'react-redux';
import {selectAllFilters} from '../../redux/filters/filtersSelectors';
import { fetchFiltered } from '../../redux/campersOps';
import { selectPagination } from '../../redux/catalog';

const FiltersPanel = () => {
  const dispatch = useDispatch();
  
  const filters = useSelector(selectAllFilters);
  const pagination = useSelector(selectPagination);
  const handleApplyFilters = () => {
      dispatch(fetchFiltered({filters, pagination}));
  };
  return (
    <Box sx={{ width: 360, display: 'flex', flexDirection: 'column', gap: 5 }}>
      <LocationInput />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4}}>
        <Typography color='text.secondary' variant='body2'>Filters</Typography>

        <FilterSection title="Vehicle equipment" filterKey="equipment" items={[{label: 'AC', icon: 'wind'}, {label: 'TV', icon: 'tv'}, {label: 'Kitchen', icon: 'cup-hot'}, {label: 'Bathroom', icon: 'shower'}]} />
        <FilterSection title="Vehicle type" filterKey="vehicleType" items={[{label: 'Van', icon: 'grid-1x2'}, {label: 'Fully Integrated', icon: 'rid'}, {label: 'Alcove', icon: 'grid-3x3-gap'}]} />

      </Box>

      <Button
        variant="contained"
        sx={{
          width: 166, height: 56, borderRadius: '200px', fontSize: 16
        }}
        onClick={() => handleApplyFilters()}>
        Search
      </Button>
    </Box>
  );
};

export default FiltersPanel;
