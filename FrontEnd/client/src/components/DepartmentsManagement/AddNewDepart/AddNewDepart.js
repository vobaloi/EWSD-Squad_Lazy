import React from 'react'
import { Box, Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';

const AddNewDepart = () => {
    return (

        <Box>
            <Box>
                <Typography>Add new department</Typography>
            </Box>
            <Box component={Paper} elevation={12} padding={2}>
                <Box display={'block'}>
                    <Box display={'flex'} sx={{ width: '100%' }} alignItems='center'>
                        <Box mr={2} sx={{ width: '20%' }} >
                            <Typography>Name:</Typography>
                        </Box>
                        <Box sx={{ width: '80%' }} >
                            <TextField fullWidth placeholder='name department' />
                        </Box>
                    </Box>
                    <Box display={'flex'} sx={{ width: '100%' }} alignItems='center'>
                        <Box mr={2} sx={{ width: '20%' }}  >
                            <Typography>Description:</Typography>
                        </Box>
                        <Box sx={{ width: '80%' }} mt={1}>
                            <TextareaAutosize placeholder='description' style={{ width: '100%', fontSize: 17 }} minRows={3} />
                        </Box>
                    </Box>
                    <Box display={'flex'} sx={{ width: '100%' }} alignItems='center'>
                        <Box mr={2} sx={{ width: '20%' }}  >
                            <Typography>Owner:</Typography>
                        </Box>
                        <Box sx={{ width: '80%' }}>
                            <TextField fullWidth placeholder='Owner' />
                        </Box>
                    </Box>
                    <Box sx={{ textAlign: '-webkit-center' }} mt={1}>
                        <Box display={'flex'} alignItems='center' width={'50%'} justifyContent='space-between'>
                            <Box>
                                <Button sx={{ background: 'green' }} variant='contained'>Submit</Button>
                            </Box>
                            <Box>
                                <Button sx={{ background: 'red' }} variant='contained'>Cancel</Button>
                            </Box>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Box>
    )
}

export default AddNewDepart