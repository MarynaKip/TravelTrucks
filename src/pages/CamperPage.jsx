import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box, Typography, Stack, Divider, Tabs, Tab
} from '@mui/material';
import { changeSelectedCamperId, selectCatalogItem, selectLoading } from '../redux/catalogSlice';
import CamperFeatures from '../components/Campers/CamperFeatures';
import CamperReviews from '../components/Campers/CamperReviews';
import BookingForm from '../components/Campers/BookingForm';
import sprite from '../assets/sprite.svg';

const CamperPage = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const handleChange = (event, newValue) => setTab(newValue);

  const camper = useSelector(selectCatalogItem);
  const loading = useSelector(selectLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(changeSelectedCamperId(id));
  }, [dispatch, id]);

  if (loading) return <Typography>Loading catalog...</Typography>;
  if (!camper) return <Typography>Camper not found.</Typography>;

  const {
    name, rating, reviews = [], location, price, gallery = [],
    description,
  } = camper;

  return (
    <Box px={8} py={4}>
      {/* Top Info */}
      <Typography variant="h4" fontSize={24} lineHeight="32px" color="primary" mb={2}>
        {name}
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <svg width="16" height="16"><use href={`${sprite}#icon-star-pressed`} /></svg>
        <Typography variant="body1" color="primary">
          {rating} ({reviews.length} Reviews)
        </Typography>
        <svg width="16" height="16"><use href={`${sprite}#icon-location`} /></svg>
        <Typography variant="body1" color="primary">{location}</Typography>
      </Stack>

      <Typography variant="h5" fontWeight={600} mb={2}>
        €{price}.00
      </Typography>

      <Stack direction="row" spacing={1} mb={2}>
        {gallery.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img.thumb}
            alt={`camper-${i}`}
            width={80}
            height={80}
            sx={{ objectFit: 'cover', borderRadius: 1 }}
          />
        ))}
      </Stack>

      <Typography variant="body1" fontSize={16} lineHeight="24px" color="text.primary" mb={4}>
        {description}
      </Typography>

      {/* Tabs and Content Area */}
      <Box>
        <Tabs value={tab} onChange={handleChange} textColor="primary">
          <Tab label="Features" />
          <Tab label="Reviews" />
        </Tabs>
        <Divider sx={{ backgroundColor: '#DADDE1' }} />
        <Box sx={{ position: 'relative', mt: -1 }}>
          <Box
            sx={{
              width: 85,
              height: 5,
              bgcolor: '#E44848',
              position: 'absolute',
              bottom: 0,
              left: tab === 0 ? 0 : 110,
              transition: 'left 0.3s ease',
            }}
          />
        </Box>
      </Box>

      {/* Flexbox layout for bottom content */}
      <Box mt={4} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Left side: Tab Content */}
        <Box flex={1}>
          {tab === 0 ? <CamperFeatures camper={camper} /> : <CamperReviews reviews={reviews} />}
        </Box>

        {/* Right side: Booking Form */}
        <Box width={{ xs: '100%', md: 360 }}>
          <BookingForm />
        </Box>
      </Box>
    </Box>
  );
};

export default CamperPage;
