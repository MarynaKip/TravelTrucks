import {Paper, Stack, Typography, Divider, Box, List, ListItem} from '@mui/material';
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
      <Paper sx={{ p: 5, borderRadius: 2, width: 631, boxSizing: 'border-box', backgroundColor: 'primary.light', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Stack direction="row" gap={1} flexWrap="wrap" >
          {features.map((f, index) => (
            <CamperFeatureBadge key={index} label={f.label} icon={f.icon} />
          ))}
        </Stack>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3}}>
        <Typography variant="h3" color="text.primary">
          Vehicle Details
        </Typography>
        <Divider/>
  
        <List spacing={2} sx={{display: 'flex', flexDirection: 'column'}}>
          {Object.entries(details).map(([key, val]) => (
            <ListItem key={key} sx={{ display: 'flex', direction: "row", justifyContent: "space-between" }}>
              <Typography variant="body2" color="text.primary">{key}</Typography>
              <Typography variant="body2" color="text.primary">{val}</Typography>
            </ListItem>
          ))}
        </List>
        </Box>
      </Paper>
    );
  };
  