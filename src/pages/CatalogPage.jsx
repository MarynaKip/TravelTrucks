import { Box, Container } from '@mui/material';
import FiltersPanel from '../components/Filters/FiltersPanel';
import CampersList from '../components/Campers/CampersList';

const CatalogPage = () => {
  return (
    <Box sx={{ display: 'flex', gap: 8, padding: 6 }}>
      <FiltersPanel />
      <CampersList />
    </Box>
  );
};

export default CatalogPage;
