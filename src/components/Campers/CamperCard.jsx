import { Box, Typography, Rating, Button, ListItem } from '@mui/material';
import { useDispatch } from 'react-redux';
import { changeSelectedCamperId } from '../../redux/catalog/catalogSlice';
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

    const handleCamperClick = (id) => {
    dispatch(changeSelectedCamperId(id));
    navigate(`/catalog/${id}`);
    };

  return (
    <ListItem sx={{
      borderRadius: '20px', overflow: 'hidden',
      border: '1px solid', borderColor: 'secondary.main',
      padding: 3, width: '888px', gap: 3
    }}>
      <Box component="img" src={gallery[0].thumb} alt={name} sx={{ width: 292, height: '100%', objectFit: 'cover', borderRadius: '10px'}} />

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Top: Name, Rating, Price */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Box>
            <Typography variant='h2'>{name}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <svg width="16" height="16"><use href={`${sprite}#icon-star-pressed`} /></svg>
              <Typography variant='subtitle1' >{rating}({reviews.length} Reviews)</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, ml: 2 }}>
                <svg width="16" height="16"><use href={`${sprite}#icon-location`} /></svg>
                <Typography variant='body1'>{location}</Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={{display: 'flex', gap: 2}}>
            <Typography variant='h2'>€{price}.00</Typography>
            <svg width="24" height="24"><use href={`${sprite}#icon-Like-default`} /></svg>
          </Box>
        </Box>

        {/* Description */}
        <Typography 
        variant='body1'
        color='text.secondary'
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          width: '500px',
        }}>
          {description}
        </Typography>

        {/* Features */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          <CamperFeatureBadge icon="fuel-pump" label={capitalizeFirstLetter(engine)} />
          <CamperFeatureBadge icon="diagram" label={capitalizeFirstLetter(transmission)} />
          {kitchen && <CamperFeatureBadge icon="cup-hot" label="Kitchen" />}
          {AC && <CamperFeatureBadge icon="wind" label="AC" />}
        </Box>

        <Button variant="contained" sx={{ borderRadius: '200px', width: 166, height: 56 }} onClick={() => handleCamperClick(id)} >
          Show more
        </Button>
      </Box>
    </ListItem>
  );
};

export default CamperCard;