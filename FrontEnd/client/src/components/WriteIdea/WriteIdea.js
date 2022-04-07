import { Button, FormControl, Select, MenuItem, Typography, Grid, Box, Input, InputLabel, FormHelperText, Divider } from '@mui/material'
import React, { useState } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Paper } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { Label } from '@mui/icons-material';


const WriteIdea = () => {

    const [ideaForm, setIdeaForm] = useState({
        department: '',
        description: '',
        image: null,
        file: null,
        category: '',
        anonymous: false,

        error: false

    })

    const { deparmemt, description, image, file, category, anonymous } = ideaForm


    const navigate = useNavigate()
    return (
        <>
            <Box sx={{ textAlign: '-webkit-center' }} >
                <Box component={Paper} elevation={12} width="60%" border={2} sx={{ mt: 5, borderRadius: 4, p: 2 }} display={"block"} >
                    <Grid xs={10} display={'flex'} sx={{ alignItems: 'center', mb: 5, paddingLeft: 3, justifyContent: 'space-between' }}>
                        <Box display={'flex'} >
                            <Typography variant='h6' fontWeight={800}>Department:</Typography>
                        </Box>
                        <FormControl sx={{ width: '30%' }}>
                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>

                        </FormControl>
                        <Box display={'flex'} >
                            <Typography variant='h6' fontWeight={800}>Category:</Typography>
                        </Box>
                        <FormControl sx={{ width: '30%' }}>
                            <Select
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}>
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid xs={10} display={'flex'} sx={{ mb: 5, alignItems: 'center', paddingLeft: 3, justifyContent: 'space-between' }}>
                        <Box display={'flex'} >
                            <Typography variant='h6' fontWeight={800}>Content:</Typography>
                        </Box>
                        <FormControl sx={{ width: '80%' }}>
                            <TextareaAutosize
                                placeholder='Content'
                                style={{ fontSize: 18 }}
                                minRows={3}
                            />
                        </FormControl>
                    </Grid>
                    <Grid xs={10} display={'flex'} sx={{ mb: 2, alignItems: 'center', paddingLeft: 3 }}>
                        <Box display={'flex'} >
                            <Typography variant='h6' mr={4} fontWeight={800}>Upload file:</Typography>
                        </Box>
                        <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    </Grid>
                    <Grid xs={6} display={'flex'} sx={{ alignItems: 'center', paddingLeft: 3, justifyContent: 'space-between' }}>
                        <Box>
                            <Checkbox defaultChecked /> <Link to={'/'}> Terms Agree</Link>
                        </Box>
                        <Box display={"flex"} alignItems="center">
                            <Checkbox defaultChecked /> <Typography>Anonymous</Typography>
                        </Box>

                    </Grid>
                    <Divider />

                    <Grid xs={8} display={'flex'} sx={{ mt: 2, alignItems: 'center', paddingLeft: 3, justifyContent: 'space-between' }}>
                        <Button sx={{ background: 'green' }} variant='contained' size='large'>
                            Submit
                        </Button>
                        <Button sx={{ background: 'red' }} variant='contained' size='large'>
                            Cancel
                        </Button>
                    </Grid>
                </Box>
            </Box>


        </>
    )
}

export default WriteIdea