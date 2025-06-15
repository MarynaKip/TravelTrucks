import {
  Box,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  date: yup.string().required("Booking date is required"),
  comment: yup.string(),
});

const BookingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Booking Data:", data);
    toast.success("Booking successful!");
    reset();
  };

  return (
    <Paper sx={{ p: 5, borderRadius: 2, width: 641 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            <TextField
              label="Name"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
              {...register("name")}
            />
            <TextField
              label="Email"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
            />
            <TextField
              label="Booking Date"
              type="date"
              fullWidth
              error={!!errors.date}
              helperText={errors.date?.message}
              slotProps={{ inputLabel: { shrink: true } }}
              {...register("date")}
            />
            <TextField
              label="Comment"
              multiline
              rows={4}
              fullWidth
              {...register("comment")}
            />
          </Stack>

          {/* Button Section */}
          <Box mt="24px" display="flex" justifyContent="center">
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ width: 166, height: 56, borderRadius: 200 }}
            >
              Send
            </Button>
          </Box>
        </Stack>
      </form>
    </Paper>
  );
};

export default BookingForm;
