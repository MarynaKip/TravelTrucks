// FilterSection.jsx
import { Box, Typography, Divider } from '@mui/material';
import FilterCard from './FilterCard';

const FilterSection = ({ title, items }) => {
  return (
    <Box>
      <Typography sx={{ color: '#101828', fontSize: 20, fontWeight: 600, mb: 1 }}>{title}</Typography>
      <Divider sx={{ my: 2, backgroundColor: '#DADDE1' }} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {items.map((item, i) => (
          <FilterCard key={i} label={item.label} icon={item.icon}/>
        ))}
      </Box>
    </Box>
  );
};

export default FilterSection;
