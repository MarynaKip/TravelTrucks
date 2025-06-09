import {Paper, Stack, Typography, Divider} from '@mui/material';
import CamperFeatureBadge from './CamperFeatureBadge'

export default function CamperFeatures({ camper }) {
    const {
      form, length, width, height, tank, consumption,
      transmission, engine, AC, bathroom, kitchen,
      TV, radio, refrigerator, microwave, gas, water,
    } = camper;
  
    const features = [
      { label: 'AC', value: AC, icon: 'wind' },
      { label: 'Bathroom', value: bathroom, icon: 'shower' },
      { label: 'Kitchen', value: kitchen, icon: 'cup-hot' },
      { label: 'TV', value: TV, icon: 'tv' },
      { label: 'Radio', value: radio, icon: 'radios' },
      { label: 'Refrigerator', value: refrigerator, icon: 'fridge' },
      { label: 'Microwave', value: microwave, icon: 'microwave' },
      { label: 'Gas', value: gas, icon: 'fuel-pump' },
      { label: 'Water', value: water, icon: 'water' },
    ].filter(item => item.value);
  
    const details = {
      Form: form,
      Length: length,
      Width: width,
      Height: height,
      Weight: tank,
      Consumption: consumption,
      Transmission: transmission,
      Engine: engine,
    };
  
    return (
      <Paper sx={{ p: 5, borderRadius: 2 }}>
        <Stack direction="row" spacing={2} flexWrap="wrap" mb={10}>
          {features.map((f, index) => (
            <CamperFeatureBadge key={index} label={f.label} icon={f.icon} />
          ))}
        </Stack>
  
        <Typography variant="h5" color="primary" mb={3}>
          Vehicle Details
        </Typography>
        <Divider sx={{ backgroundColor: '#DADDE1', mb: 3 }} />
  
        <Stack spacing={2}>
          {Object.entries(details).map(([key, val]) => (
            <Stack key={key} direction="row" justifyContent="space-between">
              <Typography variant="body2" color="text.secondary">{key}</Typography>
              <Typography variant="body2" color="primary">{val}</Typography>
            </Stack>
          ))}
        </Stack>
      </Paper>
    );
  };
  