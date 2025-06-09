import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import heroImage from '../assets/Hero.jpg';

export default function HomePage() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Inner wrapper with left/right padding */}
      <Box sx={{ px: '64px', width: '100%' }}>
        <Box sx={{ maxWidth: '600px' }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '48px',
              lineHeight: '32px',
              fontWeight: 'bold',
              color: '#F7F7F7',
              mb: 2,
            }}
          >
            Campers of your dreams
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: '24px',
              lineHeight: '32px',
              fontWeight: 400,
              color: '#F7F7F7',
              mb: 4,
            }}
          >
            You can find everything you want in our catalog
          </Typography>

          <Button
            component={Link}
            to="/catalog"
            variant="contained"
            sx={{
              width: '173px',
              height: '56px',
              backgroundColor: '#E44848',
              color: '#FFFFFF',
              fontSize: '16px',
              lineHeight: '24px',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: '#D84343',
              },
            }}
          >
            View Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
