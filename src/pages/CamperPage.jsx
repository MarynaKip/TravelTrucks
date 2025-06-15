import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box, Typography, Stack, Divider, Tabs, Tab
} from '@mui/material';
import { changeSelectedCamperId } from '../redux/catalog/catalogSlice';
import { selectSelectedItem, selectLoading } from '../redux/catalog/catalogSelectors';
import CamperFeatures from '../components/Campers/CamperFeatures';
import CamperReviews from '../components/Campers/CamperReviews';
import BookingForm from '../components/Campers/BookingForm';
import sprite from '../assets/sprite.svg';
import { getById } from '../redux/campersOps';

const CamperPage = () => {
  const dispatch = useDispatch();
  const [tab, setTab] = useState(0);
  const handleChange = (event, newValue) => setTab(newValue);

  const camper = useSelector(selectSelectedItem);
  const loading = useSelector(selectLoading);
  const { id } = useParams();

  useEffect(() => {
    dispatch(changeSelectedCamperId(id));
    dispatch(getById(id))
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
      <Typography variant="h2" color="text.primary" mb={2}>
        {name}
      </Typography>

      <Stack direction="row" spacing={2} alignItems="center" mb={2}>
        <svg width="16" height="16"><use href={`${sprite}#icon-star-pressed`} /></svg>
        <Typography variant="subtitle1" color="text.primary">
          {rating} ({reviews.length} Reviews)
        </Typography>
        <svg width="16" height="16"><use href={`${sprite}#icon-location`} /></svg>
        <Typography variant="body1" color="text.primary">{location}</Typography>
      </Stack>

      <Typography variant="h2" mb={3.5}>
        €{price}.00
      </Typography>

      <Stack direction="row" spacing={1} mb={3.5} justifyContent='space-between'>
        {gallery.map((img, i) => (
          <Box
            key={i}
            component="img"
            src={img.thumb}
            alt={`camper-${i}`}
            width={292}
            height={312}
            sx={{ objectFit: 'cover', borderRadius: 1 }}
          />
        ))}
      </Stack>

      <Typography variant="body1" color="text.secondary" mb={7.5}>
        {description}
      </Typography>

      {/* Tabs and Content Area */}
      <Box>
        <Tabs value={tab} onChange={handleChange}>
          <Tab label="Features" />
          <Tab label="Reviews" />
        </Tabs>
        <Divider />
      </Box>

      {/* Flexbox layout for bottom content */}
      <Box mt={4} display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={4}>
        {/* Left side: Tab Content */}
        {/* <Box flex={1} width={631}> */}
          {tab === 0 ? <CamperFeatures camper={camper} /> : <CamperReviews reviews={reviews} />}
        {/* </Box> */}

        {/* Right side: Booking Form */}
        {/* <Box width={{ xs: '100%', md: 360 }}> */}
          <BookingForm />
        {/* </Box> */}
      </Box>
    </Box>
  );
};

export default CamperPage;
