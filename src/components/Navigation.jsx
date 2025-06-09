import { NavLink } from 'react-router-dom';
import { Box } from '@mui/material';

const getNavLinkStyles = (isActive) => ({
  textDecoration: 'none',
  fontFamily: 'Inter',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: 400,
  color: isActive ? '#D84343' : '#101828',
});

export default function Navigation() {
  return (
    <Box sx={{ display: 'flex', gap: '10px' }}>
      <NavLink to="/" style={({ isActive }) => getNavLinkStyles(isActive)}>
        Home
      </NavLink>
      <NavLink to="/catalog" style={({ isActive }) => getNavLinkStyles(isActive)}>
        Catalog
      </NavLink>
    </Box>
  );
}
