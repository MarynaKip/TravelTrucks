import { useDispatch, useSelector } from 'react-redux';
import { fetchFiltered } from '../../redux/campersOps';
import { selectCatalog, selectPagination } from '../../redux/catalog/catalogSelectors';
import CamperCard from './CamperCard';
import { Button, List } from '@mui/material';
import { selectAllFilters } from '../../redux/filters';
import { changePageNumber } from '../../redux/catalog';
import { useEffect } from 'react';

const CampersList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectCatalog);
  const filters = useSelector(selectAllFilters);
  const pagination = useSelector(selectPagination);

  useEffect(() => {
    dispatch(fetchFiltered({ filters, pagination }));
  }, [pagination.page]);

  function handleLoadMore() {
    dispatch(changePageNumber(pagination.page+1))
  }
  return (
    <List sx={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'center', padding: 0 }}>
      {campers?.map(camper => (
        <CamperCard key={camper.id} camper={camper} />
      ))}
      <Button onClick={() => handleLoadMore()} variant="outlined" color="secondary" sx={{ color: 'text.primary', mt: 1, borderRadius: '200px', width: 145, height: 56 }}>Load more</Button>
    </List>
  );
};

export default CampersList;
