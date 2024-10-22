import { Box, TextField, Typography, Divider } from '@mui/material';
import Grid from '@mui/material/Grid2';

function Education() {
    return (
        <>
            <Box sx={{ mb: 2 }}>
                <Typography variant='h6'>Pendidikan</Typography>
                <Divider sx={{ backgroundColor: 'black' }} />
            </Box>
            <Grid spacing={2} sx={{ mx: 'auto', justifyContent: 'center' }}>
                <Grid sx={{ xs: 12, sm: 6 }}>
                    <Typography variant='caption'>Formal Education</Typography>
                    <TextField placeholder="Formal Education" variant="outlined" fullWidth />
                </Grid>
                <Grid sx={{ xs: 12, sm: 6 }}>
                    <Typography variant='caption'>Name & Location</Typography>
                    <TextField placeholder="Name & Location" variant="outlined" fullWidth />
                </Grid>
                <Grid sx={{ xs: 12, sm: 6 }}>
                    <Typography variant='caption'>Major</Typography>
                    <TextField placeholder="Major" variant="outlined" fullWidth />
                </Grid>
                <Grid sx={{ xs: 12, sm: 6 }}>
                    <Typography variant='caption'>Year of education</Typography>
                    <TextField placeholder="MM-YYYY / MM-YYYY" variant="outlined" fullWidth />
                </Grid>
            </Grid>
        </>
    )
}

export default Education