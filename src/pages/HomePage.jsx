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
            color='primary.light'
            sx={{
              mb: 2,
            }}
          >
            Campers of your dreams
          </Typography>

          <Typography
            variant="h2"
            color='primary.light'
            sx={{
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
              width: 173,
              height: 56,
              backgroundColor: 'primary.main',
              color: '#FFFFFF',
              fontSize: 16,
              lineHeight: 24,
              '&:hover': {
                backgroundColor: 'secondary.dark',
              },
              borderRadius: 200,
            }}
          >
            View Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
