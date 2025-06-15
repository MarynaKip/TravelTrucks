import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { fetchFiltered } from './redux/campersOps'
import { Header } from './components/Header';
import { selectAllFilters } from './redux/filters';
import { selectPagination } from './redux/catalog';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const CamperPage = lazy(() => import('./pages/CamperPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));


export default function App() {
  const dispatch = useDispatch();

  const filters = useSelector(selectAllFilters);
  const pagination = useSelector(selectPagination);


  useEffect(() => {
    dispatch(fetchFiltered({filters, pagination}));
  }, [dispatch]);


  return (
    <>
      <Header/>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
} 
