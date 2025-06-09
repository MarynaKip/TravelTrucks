import { Box, Container } from '@mui/material';
import FiltersPanel from '../components/Filters/FiltersPanel';
import CampersList from '../components/Campers/CampersList';

const CatalogPage = () => {
  return (
    <Box sx={{ display: 'flex', gap: 4, px: '64px' }}>
      <FiltersPanel />
      <CampersList />
    </Box>
  );
};

export default CatalogPage;
