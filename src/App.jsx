import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { fetchAll } from './redux/campersOps'
import { Header } from './components/Header';

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const CamperPage = lazy(() => import('./pages/CamperPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const CamperFeatures = lazy(() => import('./components/Campers/CamperFeatures'));
const CamperReviews = lazy(() => import('./components/Campers/CamperReviews'));


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);


  return (
    <>
      <Header/>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
              <Route path="features" element={<CamperFeatures />} />
              <Route path="reviews" element={<CamperReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
} 
