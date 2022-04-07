import { Paper, Grid, Avatar, Divider, Box, TextareaAutosize } from '@mui/material'
import React from 'react'

import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';
import { width } from '@mui/system';

const ViewIdeas = () => {
    return (
        <>
            <Box>
                <Paper elevation={8} sx={{ width: '95%', margin: "0px auto", height: 'auto', padding: 2, marginTop: 1 }}  >
                    <Grid display={'flex'}  >
                        <Avatar />
                        <Grid display={'block'}  >
                            <Typography >Username</Typography>
                            <Typography >Hours</Typography>
                        </Grid>
                        <Grid marginLeft={'auto'} display={'flex'}>
                            <Typography variant='h6' marginRight={5} >
                                Department
                            </Typography>
                            <Typography variant='h6' >
                                Category
                            </Typography>
                        </Grid>
                    </Grid>
                    <Divider sx={{ mb: 1 }} />
                    <Box>
                        <TextareaAutosize
                            maxRows={2}
                            minRows={2}
                            defaultValue="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                            disabled
                            style={{ width: "100%", fontSize: 20, border: 0, background: 'white', p: 1 }} />
                    </Box>

                    <Link to={'/home'}>
                        See more details...
                    </Link>
                    <Divider />
                    <Box textAlign='-webkit-center'  >
                        <Grid xs={10} display={"flex"} justifyContent='space-between' marginTop={1} mb={-1}>
                            <Box display={"flex"} width={'40%'} justifyContent='space-between' >
                                <Box alignItems={'center'} display={"flex"}>
                                    <ThumbUpIcon fontSize='large' />

                                    <Typography>100</Typography>
                                </Box>
                                <Box alignItems={'center'} display={"flex"}>
                                    <ThumbDownIcon fontSize='large' />
                                    100
                                </Box>
                                <Box alignItems={'center'} display={"flex"}>
                                    <CommentIcon fontSize='large' />
                                    100
                                </Box>
                            </Box>
                            <FileDownloadIcon fontSize='large' />
                        </Grid>
                    </Box>
                </Paper>

            </Box >
        </>
    )
}
export default ViewIdeas