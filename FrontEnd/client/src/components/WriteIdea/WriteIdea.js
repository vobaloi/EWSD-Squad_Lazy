import { Button, FormControl, TextField, Typography, Grid, Box, Input } from '@mui/material'
import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextareaAutosize from '@mui/base/TextareaAutosize';


const WriteIdea = () => {

    const [ideaForm, setIdeaForm] = useState({
        title: '',
        short_description: '',
        description: '',
        image: null,
        category: '',
        created_by: '',
        blog_comments: '',
        blog_likes: ''
    })

    const { title, short_description, description, image } = ideaForm


    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ textAlign: '-webkit-center' }} >
                <FormControl sx={{ padding: 5, marginTop: 1, borderRadius: 2, border: 1 }} >
                    <Typography>Topic title:</Typography>
                    <TextField
                        placeholder='Choose your topic title' sx={{ marginBottom: 1 }} />
                    <Typography>Department:</Typography>
                    <TextField
                        placeholder='Your department' sx={{ marginBottom: 1 }} />
                    <Typography>Contents:</Typography>
                    <TextareaAutosize
                        minRows={4}
                        aria-label="maximum height"
                        placeholder="your contents here"

                        style={{ fontSize: 18, padding: 5 }}
                    />
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    </label>
                    <Grid display={'flex'} >
                        <Grid >
                            <FormControlLabel sx={{ marginRight: 1 }} control={<Checkbox />} label="Agree Terms" />
                            <Link to={'/'}>Link terms agree</Link>
                        </Grid>
                        <FormControlLabel sx={{ marginLeft: 'auto' }} control={<Checkbox />} label="Anonymous" />
                    </Grid>
                    <Grid display={'flex'} >
                        <Button onClick={() => navigate('/home/viewideas')} sx={{ border: 1, marginTop: 1, width: 200, marginRight: 'auto' }} >
                            Submit
                        </Button>
                        <Button sx={{ border: 1, marginTop: 1, width: 200, marginLeft: 'auto' }} >
                            Cancel
                        </Button>
                    </Grid>
                </FormControl>
            </Box>

        </>
    )
}

export default WriteIdea