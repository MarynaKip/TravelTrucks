import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from '@mui/material';

const BookingForm = () => (
  <Paper sx={{ p: 5, borderRadius: 2, width: 641 }}>
    <Stack spacing={2}>
      {/* Title + Description */}
      <Box>
        <Typography variant="h3" color="text.primary" mb={1}>
          Book your campervan now
        </Typography>
        <Typography variant="body1" color="text.tertiary">
          Stay connected! We are always ready to help you.
        </Typography>
      </Box>

      {/* Fields Section */}
      <Stack spacing="14px" mt="32px">
        <TextField label="Name" required fullWidth />
        <TextField label="Email" required fullWidth />
        <TextField
          label="Booking Date"
          required
          type="date"
          fullWidth
          slotProps={{ inputLabel: { shrink: true } }}
        />
        <TextField label="Comment" multiline rows={4} fullWidth />
      </Stack>

      {/* Button Section */}
      <Box mt="24px" display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          sx={{ width: 166, height: 56, borderRadius: 200 }}
        >
          Send
        </Button>
      </Box>
    </Stack>
  </Paper>
);

export default BookingForm;
