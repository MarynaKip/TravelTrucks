import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Divider } from '@mui/material';
import { addFeature, removeFeature, changeBodyType } from '../../redux/filters/filtersSlice';
import { selectBodyTypeFilter, selectFeatures } from '../../redux/filters/filtersSelectors';

import FilterCard from './FilterCard';

const FilterSection = ({ title, items }) => {
  const dispatch = useDispatch();
  const selectedFeatures = useSelector(selectFeatures);
  const selectedBodyType = useSelector(selectBodyTypeFilter)

  const handleToggle = (label) => {
    if(label === 'Van' || label === 'Fully Integrated' || label === 'Alcove') {
      dispatch(changeBodyType(label))
    } else {
      if (selectedFeatures[label]) {
        dispatch(removeFeature(label));
      } else {
        dispatch(addFeature(label));
      }
    }
  };
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
      <Typography color='text.primary' variant='h3' >{title}</Typography>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {items.map((item, i) => (
          <FilterCard key={i} label={item.label} icon={item.icon} onClick={() => handleToggle(item.label)} selected={selectedFeatures[`${item.label}`] || item.label === selectedBodyType}/>
        ))}
      </Box>
    </Box>
  );
};

export default FilterSection;
