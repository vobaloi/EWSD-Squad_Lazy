import { Button, FormControl, FormGroup, TextField, Typography, Grid } from '@mui/material'
import React from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

const WriteIdea = () => {
    return (
        <>
            <FormControl sx={{ padding: 5, marginTop: 1, borderRadius: 2, border: 1 }} fullWidth>
                <Typography>Topic title:</Typography>
                <TextField
                    placeholder='Choose your topic title' sx={{ marginBottom: 1 }} />
                <Typography>Department:</Typography>
                <TextField
                    placeholder='Your department' sx={{ marginBottom: 1 }} />
                <Typography>Contents:</Typography>
                <TextField
                    placeholder='abc'
                    multiline
                    rows={4}
                    sx={{ marginBottom: 1 }} />
                <Typography>Upload file:</Typography>
                <Button sx={{ border: 1, marginTop: 1, width: 200, marginRight: 'auto' }} >Choose file</Button>
                <Grid display={'flex'} >
                    <Grid >
                        <FormControlLabel sx={{ marginRight: 1 }} control={<Checkbox />} label="Agree Terms" />
                        <Link to={'/'}>Link terms agree</Link>
                    </Grid>
                    <FormControlLabel sx={{ marginLeft: 'auto' }} control={<Checkbox />} label="Anonymous" />
                </Grid>
                <Grid display={'flex'} >
                    <Button sx={{ border: 1, marginTop: 1, width: 200, marginRight: 'auto' }} >
                        Submit
                    </Button>
                    <Button sx={{ border: 1, marginTop: 1, width: 200, marginLeft: 'auto' }} >
                        Cancel
                    </Button>
                </Grid>
            </FormControl>
        </>
    )
}

export default WriteIdea