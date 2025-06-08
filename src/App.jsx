import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navigation from './components/Navigation';
import { fetchCampers } from './redux/campersOps'

const HomePage = lazy(() => import('./pages/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage'));
const CamperPage = lazy(() => import('./pages/CamperPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
// const MovieCast = lazy(() => import('./components/MovieCast'));
// const MovieReviews = lazy(() => import('./components/MovieReviews'));


export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);


  return (
    <>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CamperPage />}>
{/* //             <Route path="cast" element={<MovieCast />} />
//             <Route path="reviews" element={<MovieReviews />} />*/}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
} 
