import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/campersOps';
import { selectFilteredCatalog } from '../../redux/catalogSlice';
import CamperCard from './CamperCard';
import { Box, Button } from '@mui/material';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectFilteredCatalog);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
      {campers?.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
      <Button variant="outlined" color="secondary" sx={{ color: '#101828', mt: 3, borderRadius: '200px', textTransform: 'none', width: '145px' }}>Load more</Button>
    </Box>
  );
};

export default CampersList;
