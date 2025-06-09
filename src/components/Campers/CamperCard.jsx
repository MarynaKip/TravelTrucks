import { Box, Typography, Rating, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeSelectedCamperId } from '../../redux/catalogSlice';
import { useNavigate } from 'react-router-dom';
import CamperFeatureBadge from './CamperFeatureBadge';
import sprite from '../../assets/sprite.svg';
import {capitalizeFirstLetter} from '../../utils'

const CamperCard = ({ camper }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {
        id, name, price, rating, reviews, location,
        description, gallery, transmission, engine, kitchen, AC
    } = camper;

console.log(gallery)
    const handleCamperClick = (id) => {
    dispatch(changeSelectedCamperId(id));
    navigate(`/catalog/${id}`);
    };

  return (
    <Box sx={{
      display: 'flex', flexDirection: 'column',
      borderRadius: '20px', overflow: 'hidden',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
    }}>
      <Box component="img" src={gallery[0].thumb} alt={name} sx={{ width: '100%', height: 300, objectFit: 'cover' }} />

      <Box sx={{ p: 3 }}>
        {/* Top: Name, Rating, Price */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography sx={{ fontSize: 20, fontWeight: 600 }}>{name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Rating value={rating} readOnly precision={0.5} size="small" />
              <Typography sx={{ fontSize: 14 }}>({reviews.length})</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 2 }}>
                <svg width="16" height="16"><use href={`${sprite}#icon-location`} /></svg>
                <Typography sx={{ fontSize: 14 }}>{location}</Typography>
              </Box>
            </Box>
          </Box>
          <Typography sx={{ fontSize: 20, fontWeight: 600 }}>${price}</Typography>
        </Box>

        {/* Description */}
        <Typography sx={{
          mt: 2, fontSize: 14, color: '#475467',
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden'
        }}>
          {description}
        </Typography>

        {/* Features */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 2 }}>
          {/* <CamperFeatureBadge icon="users" label={`${details.adults} adults`} /> */}
          <CamperFeatureBadge icon="fuel-pump" label={capitalizeFirstLetter(engine)} />
          <CamperFeatureBadge icon="diagram" label={capitalizeFirstLetter(transmission)} />
          {kitchen && <CamperFeatureBadge icon="cup-hot" label="Kitchen" />}
          {AC && <CamperFeatureBadge icon="wind" label="AC" />}
        </Box>

        <Button variant="contained" sx={{ mt: 3, borderRadius: '200px', textTransform: 'none' }} onClick={() => handleCamperClick(id)} >
          Show more
        </Button>
      </Box>
    </Box>
  );
};

export default CamperCard;