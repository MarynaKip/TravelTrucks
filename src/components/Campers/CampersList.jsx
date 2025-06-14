import { useDispatch, useSelector } from 'react-redux';
import { fetchFiltered } from '../../redux/campersOps';
import { selectCatalog, selectPagination } from '../../redux/catalog/catalogSelectors';
import CamperCard from './CamperCard';
import { Box, Button } from '@mui/material';
import { selectAllFilters } from '../../redux/filters';
import { changePageNumber } from '../../redux/catalog';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCatalog);
  const filters = useSelector(selectAllFilters);
  const pagination = useSelector(selectPagination);

  function handleLoadMore() {
    dispatch(changePageNumber(pagination.page+1))
    dispatch(fetchFiltered({filters, pagination}))
  }
  return (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center' }}>
      {campers?.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
      <Button onClick={() => handleLoadMore()} variant="outlined" color="secondary" sx={{ color: '#101828', mt: 3, borderRadius: '200px', textTransform: 'none', width: '145px' }}>Load more</Button>
    </Box>
  );
};

export default CampersList;
