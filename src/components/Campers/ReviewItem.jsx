import {
    Box, Stack, Typography, Avatar
  } from '@mui/material';
  import sprite from '../../assets/sprite.svg'
  
  const ReviewItem = ({ review }) => {

    const { reviewer_name, reviewer_rating, comment } = review;

    const stars = Array.from({ length: 5 }).map((_, i) =>
        i < reviewer_rating ? 
        <svg width="16" height="16">
            <use href={`${sprite}#icon-star-pressed`} />
        </svg> :
        <svg width="16" height="16">
            <use href={`${sprite}#icon-star`} />
        </svg>
    );
  
    return (
      <Stack spacing={2}>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ bgcolor: 'secondary.main', width: 60, height: 60 }}>
            <Typography variant="h6" color="primary.contrastText">
              {reviewer_name.charAt(0)}
            </Typography>
          </Avatar>
          <Box>
            <Typography variant="body2" color="primary">{reviewer_name}</Typography>
            <Stack direction="row" spacing={0.5}>{stars}</Stack>
          </Box>
        </Stack>
        <Typography variant="body1" color="text.primary">
          {comment}
        </Typography>
      </Stack>
    );
  };
  
  export default ReviewItem;
  