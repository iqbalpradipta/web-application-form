import { Box, Link, Typography } from '@mui/material';
import {Link as RouterLink} from 'react-router-dom'
import Grid from '@mui/material/Grid2';

function Headers() {
  return (
    <>
      <Box sx={{ borderBottom: '1px solid #ddd', padding: '20px 0' }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid>
            <Link component={RouterLink} underline='none' sx={{color: 'black', display: "flex", alignItems: "center" }}>
              <Box
                component="img"
                src="https://rec-data.kalibrr.com/www.kalibrr.com/logos/J7TT7UDMC97HJVUS98ANYKNZXAXWS8WYMWE3CRXN-60597688.png"
                alt="Company Logo"
                sx={{ width: 50, height: 50 }}
              />
              <Typography variant="subtitle1" sx={{ marginLeft: '10px' }}>
                PT. Maju Gemilang Indotech
              </Typography>
            </Link>
          </Grid>
          <Grid >
            <Box textAlign="center" sx={{mr: '450px'}}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                FORMULIR LAMARAN KERJA
              </Typography>
              <Typography variant="subtitle2">APPLICATION FORM</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Headers