import { Paper, Box, Grid, } from '@mui/material'
import React from 'react'


import Typography from '@mui/material/Typography';

const Dashboard = () => {
    return (
        <>
            <Paper elevation={8} sx={{ height: 'auto', padding: 1, marginTop: 1 }}  >
                <Typography>
                    something here
                </Typography>
                <Grid display={'flex'} justifyContent='space-between' >
                    <Box sx={{ border: 1, borderRadius: 2, marginTop: 0, marginRight: 1, marginLeft: 6, width: 240, height: 240, background: 'pink' }}>
                        <Typography >
                            500
                        </Typography>
                    </Box>
                    <Box sx={{ border: 1, borderRadius: 2, marginTop: 0, marginRight: 1, width: 240, height: 240, background: 'pink' }}>
                        <Typography >
                            500
                        </Typography>
                    </Box>
                    <Box sx={{ border: 1, borderRadius: 2, marginTop: 0, marginRight: 1, width: 240, height: 240, background: 'pink' }}>
                        <Typography >
                            500
                        </Typography>
                    </Box>
                    <Box sx={{ border: 1, borderRadius: 2, marginTop: 0, marginRight: 6, width: 240, height: 240, background: 'pink' }}>
                        <Typography >
                            500
                        </Typography>
                    </Box>
                </Grid>


                <Typography>
                    Chart
                </Typography>

            </Paper>
        </>
    )
}

export default Dashboard