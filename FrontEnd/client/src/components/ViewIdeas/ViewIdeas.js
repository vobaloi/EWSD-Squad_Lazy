import { Paper, Grid, Avatar, Divider, } from '@mui/material'
import React from 'react'

import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';

const ViewIdeas = () => {
    return (
        <>
            <Paper elevation={8} sx={{ height: 'auto', padding: 1, marginTop: 1 }}  >
                <Grid display={'flex'} >
                    <Avatar />
                    <Grid display={'block'}  >
                        <Typography >Username</Typography>
                        <Typography >Hours</Typography>
                    </Grid>
                    <Grid marginLeft={'auto'} display={'flex'}>
                        <Typography marginRight={5} >
                            Topics
                        </Typography>
                        <Typography >
                            Category
                        </Typography>
                    </Grid>
                </Grid>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
                <Link to={'/home'}>
                    See more details...
                </Link>
                <Divider />
                <Grid display={"flex"} justifyContent='space-between' marginTop={1}>

                    <Grid xs={4} >
                        <ThumbUpIcon sx={{ marginRight: 1, marginLeft: 1 }} />
                        1000
                        <ThumbDownIcon sx={{ marginRight: 1, marginLeft: 1 }} />
                        1000
                        <CommentIcon sx={{ marginRight: 1, marginLeft: 1 }} />
                        1000
                    </Grid>
                    <FileDownloadIcon />
                </Grid>
            </Paper>


        </>
    )
}

export default ViewIdeas