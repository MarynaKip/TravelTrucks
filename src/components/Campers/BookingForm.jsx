import {
    Box, Typography, TextField, Button, Stack, Paper
  } from '@mui/material';
  
  const BookingForm = () => (
    <Paper sx={{ p: 5, borderRadius: 2 }}>
      <Stack spacing={3}>
        <Typography variant="h5" color="primary">
          Book your campervan now
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Stay connected! We are always ready to help you.
        </Typography>
  
        <TextField label="Name" required fullWidth />
        <TextField label="Email" required fullWidth />
        <TextField label="Booking Date" required type="date" InputLabelProps={{ shrink: true }} fullWidth />
        <TextField label="Comment" multiline rows={4} fullWidth />
  
        <Button variant="contained" color="primary">Send</Button>
      </Stack>
    </Paper>
  );
  
  export default BookingForm;
  