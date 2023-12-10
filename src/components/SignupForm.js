import { Copyright, LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Checkbox, Container, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';

function SignupForm() {
    const [userData,setuserData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const handleChange=(e)=>{
        const value=e.target.value;
        setuserData({
            ...userData,
            [e.target.name]:value
        })
        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(userData.password!==userData.confirmPassword){
            alert('Your password and confirm password are not same');
            return;
        }
        console.log(userData)
        axios.post("http://localhost:5000/signup",userData)
        .then((res)=>{
            console.log(res.data);
            setuserData({
                username:"",
                email:"",
                password:"",
                confirmPassword:""
            })
        }).catch((err)=>{
            console.log('errrrrr',err)
        })
        
    }
  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlined />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <Box component="form" validate="true" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          
          <Grid item xs={12} >
            <TextField
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              value={userData.username}
              autoComplete="username"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type='email'
              value={userData.email}
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={userData.password}
              onChange={handleChange}
              autoComplete="new-password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="confirm Password"
              type="password"
              id="confirmPassword"
              value={userData.confirmPassword}
              autoComplete="confirmPassword"
              onChange={handleChange}
            />
          </Grid>
          
         
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
    <Copyright sx={{ mt: 5 }} />
  </Container>

  )
}

export default SignupForm