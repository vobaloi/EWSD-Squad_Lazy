import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Avatar, Divider, Grid, InputAdornment, Paper, TextField, Button, Box } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import { AuthContext } from "../../contexts/AuthContext"
import { red } from '@mui/material/colors';

function Login() {
  const { loginUser } = useContext(AuthContext)

  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })

  const { email, password } = loginForm

  const onChangeLoginForm = event => setLoginForm({ ...loginForm, [event.target.name]: event.target.value })

  const login = async event => {
    event.preventDefault()
    try {
      const LoginData = await loginUser(loginForm)
      console.log(LoginData);
    } catch (error) {
      console.log(error)
    }

  }
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  return (
    <>

      <form onSubmit={login}>
        <Grid  >
          <Paper elevation={10} style={stylePaper} >
            <Grid align="center" >
              <Avatar ><FaceIcon /></Avatar>
              <h1>Log In</h1>
              <h4>Enter your email and password to Log-in</h4>
            </Grid>
            <Divider orientation='horizontal' />
            <Grid style={{ marginTop: '20px' }} >
              <TextField
                required
                label='Email'
                name='email'
                fullWidth
                placeholder='Your email...'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' >
                      <EmailIcon style={{ color: "black" }} />
                    </InputAdornment>
                  )
                }}
                value={email}
                onChange={onChangeLoginForm}
              />
            </Grid>
            <Grid sx={{ marginTop: '20px', position: 'relative' }} display={'flex'}   >
              <TextField
                required
                label='Password'
                name='password'
                type={'password'}
                fullWidth
                placeholder='Your Password...'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start' >
                      <LockIcon style={{ color: "black" }} />
                    </InputAdornment>
                  )
                }}
                value={password}
                onChange={onChangeLoginForm}
              />
              <Grid >
                <Button style={{ cursor: 'pointer', marginTop: 5, position: 'absolute', right: 0 }} ><VisibilityIcon style={{ color: 'black' }} fontSize='large' /></Button>
              </Grid>
            </Grid>

            <Grid display={'flex'}>
              <Grid style={{ margin: '0px 50px 30px 50px' }} >
                <h4 className='forgot'>Forgot your password?</h4>
                <Link to={'/'} style={{ marginLeft: 25, marginTop: 0, alignItems: 'center', justifyContent: 'center' }} >Click here</Link>
              </Grid>
              <Grid >
                <Button variant='contained' type='submit' style={{ width: 200, height: 50, cursor: "pointer", marginTop: 30, backgroundColor: 'green' }}>
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid lineHeight={'alignItems'} >
              <Button variant='contained' fullWidth style={{ height: 40, backgroundColor: "blue" }} startIcon={<FacebookIcon />} >Login by FaceBook</Button>
              <Button variant='contained' fullWidth style={{ height: 40, backgroundColor: "red" }} startIcon={<GoogleIcon />} >Login by Gmail</Button>
            </Grid>
          </Paper>
        </Grid >
      </form>

    </>
  )
}
export default Login
const stylePaper = { padding: 20, height: '70vh', width: 480, margin: '50px auto' }
