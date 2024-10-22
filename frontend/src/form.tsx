import React, { SyntheticEvent, useState } from 'react';
import { Box, TextField, Button, MenuItem, Typography, Tabs, Tab, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Education from './education';

function Form() {
  const [tabValue, setTabValue] = useState<number>(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleNextTab = () => {
    setTabValue((prevValue) => prevValue + 1);
  };


  return (
    <Box sx={{ width: '80%', margin: '0 auto', mt: 2 }}>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Data Diri" />
        <Tab label="Education" />
      </Tabs>

      {tabValue === 0 && (
        <Box sx={{ width: '80%', margin: '0 auto', mt: 2 }}>
          <Box
            component="form"
            sx={{
              mt: 1,
              '& .MuiTextField-root': { mb: 3, width: '100%' },
            }}
          >
            <Box sx={{ mb: 2 }}>
              <Typography variant='h6'>Data Diri</Typography>
              <Divider sx={{ backgroundColor: 'black' }} />
            </Box>
            <Grid spacing={2} sx={{ mx: 'auto', justifyContent: 'center' }}>
              <Grid sx={{ xs: 12, sm: 6 }}>
                <Typography variant='caption'>Full Name</Typography>
                <TextField placeholder='Name' variant="outlined" fullWidth />
              </Grid>
              <Grid sx={{ xs: 12, sm: 6 }}>
                <Typography variant='caption'>Tempat/Tanggal Lahir</Typography>
                <TextField placeholder="Place, Date Month Years" variant="outlined" fullWidth />
              </Grid>
              <Grid sx={{ xs: 12, sm: 6 }}>
                <Typography variant='caption'>Email</Typography>
                <TextField placeholder="email" variant="outlined" fullWidth />
              </Grid>
              <Grid sx={{ xs: 12, sm: 6 }}>
                <Typography variant='caption'>Telephone</Typography>
                <TextField placeholder="Telephone" variant="outlined" fullWidth />
              </Grid>
              <Grid sx={{ xs: 12, sm: 6 }}>
                <Typography variant='caption'>Agama</Typography>
                <TextField placeholder="Agama" variant="outlined" fullWidth />
              </Grid>
            </Grid>

            <Box textAlign="center" mt={3}>
              <Button variant="contained" sx={{ backgroundColor: 'gray' }} onClick={handleNextTab}>
                Next
              </Button>
            </Box>
          </Box>
        </Box>
      )}

      {tabValue === 1 && (
        <Box
          component="form"
          sx={{
            mt: 1,
            '& .MuiTextField-root': { mb: 3, width: '100%' },
          }}
        >
          <Education />

          <Box textAlign="center" mt={3}>
            <Button variant="contained" sx={{ backgroundColor: 'gray' }}>
              Submit
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Form;