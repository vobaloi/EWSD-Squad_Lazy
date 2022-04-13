import { Paper, Grid, Avatar, Divider, Box, TextareaAutosize, IconButton, Button } from '@mui/material'
import React, { useContext, useState } from 'react'

import Typography from '@mui/material/Typography';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import CommentIcon from '@mui/icons-material/Comment';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Link } from 'react-router-dom';

import { BlogContext } from '../../contexts/BlogContext';

const ViewIdeas = () => {

    const [valueThum_Up, setValueThumpUp] = useState(0)
    const [valueThum_Down, setValueThumpDown] = useState(0)
    const [stateThumUp, setStateThumUp] = useState(false)
    const [stateThumDown, setStateThumDown] = useState(false)
    const [openInput, setOpenInput] = useState('none')

    //view all ideas
    const { BlogState: { blogs }, getAllBlogs } = useContext(BlogContext)
    //React.useEffect(() => getAllBlogs, [])



    const changeValueThumpUp = () => {
        if (changeValueThumpUp) {
            setValueThumpUp(valueThum_Up + 1)
            setStateThumUp(!stateThumUp)
            setStateThumDown(false)
            setValueThumpDown(valueThum_Down - 1)
            if (valueThum_Down <= 0) {
                setValueThumpDown(0)
            }
            if (stateThumUp && changeValueThumpUp) { setValueThumpUp(valueThum_Up - 1) }
        }

    }
    const changeValueThumpDown = () => {
        if (changeValueThumpDown) {
            setValueThumpDown(valueThum_Down + 1)
            setStateThumDown(!stateThumDown)
            //console.log('value thumpup', valueThum_Up)
            setStateThumUp(false)
            setValueThumpUp(valueThum_Up - 1)
            if (valueThum_Up <= 0) {
                setValueThumpUp(0)
            }
            if (stateThumDown && changeValueThumpDown) { setValueThumpDown(valueThum_Down - 1) }

        }
    }

    const showInputComment = () => {
        setOpenInput("initial")
    }
    const loseInputComment = () => {
        setOpenInput('none')
    }
    console.log("state up", stateThumUp, "state down", stateThumDown, "value up ", valueThum_Up, 'value down', valueThum_Down)


    return (
        <>
            {blogs.map((data) => (
                <Box>
                    <Paper elevation={8} sx={{ width: '95%', margin: "0px auto", height: 'auto', padding: 2, marginTop: 1 }}   >
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
                        <Box >
                            <TextareaAutosize
                                maxRows={2}
                                minRows={2}
                                defaultValue="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
                                disabled
                                style={{ width: "100%", fontSize: 20, border: 0, background: 'white', p: 1 }} />
                        </Box>

                        <Link to=''>
                            See more details...
                        </Link>
                        <br />
                        <Link download to='/sachPDF.txt'  >
                            Down load file
                        </Link>
                        <Divider />
                        <Box textAlign='-webkit-center'  >
                            <Grid display={"flex"} justifyContent='space-between' marginTop={1} mb={-1}>
                                <Box display={"flex"} width={'40%'} justifyContent='space-between' >
                                    <Box alignItems={'center'} display={"flex"}>
                                        <IconButton onClick={() => changeValueThumpUp()}>
                                            {!stateThumUp ? <ThumbUpIcon fontSize='large' /> : <ThumbUpIcon fontSize='large' sx={{ color: 'blue' }} />}
                                        </IconButton>
                                        {valueThum_Up < 0 ? <Typography>0</Typography> : <Typography>{valueThum_Up}</Typography>}
                                    </Box>
                                    <Box alignItems={'center'} display={"flex"}>
                                        <IconButton onClick={() => changeValueThumpDown()}>
                                            {!stateThumDown ? <ThumbDownIcon fontSize='large' /> : <ThumbDownIcon sx={{ color: 'blue' }} fontSize='large' />}
                                        </IconButton>
                                        {valueThum_Down < 0 ? <Typography>0</Typography> : <Typography>{valueThum_Down}</Typography>}
                                    </Box>
                                    <Box alignItems={'center'} display={"flex"}>
                                        <CommentIcon fontSize='large' onClick={() => showInputComment()} />
                                        <Typography>100</Typography>
                                    </Box>
                                </Box>
                                <FileDownloadIcon fontSize='large' />
                            </Grid>

                        </Box>

                        <Box display={openInput} mt={1}>
                            <Divider sx={{ mb: 1 }} />
                            <Typography variant='h5'>Comment content</Typography>
                            <TextareaAutosize
                                style={{ width: '100%' }}
                                minRows={3} />
                            <Box display={"flex"}>
                                <Box>
                                    <Button sx={{ mr: 5 }} variant='contained'>Submit</Button>
                                    <Button onClick={() => loseInputComment()} variant='contained'>Cancel</Button>
                                </Box>
                            </Box>
                        </Box>

                    </Paper>

                </Box >
            ))}
        </>
    )
}
export default ViewIdeas