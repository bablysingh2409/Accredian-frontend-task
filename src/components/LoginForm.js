import { Copyright, LockOutlined } from '@mui/icons-material'
import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios'

function LoginForm() {
    const [userLoginData, setUserLoginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setUserLoginData({
            ...userLoginData,
            [e.target.name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log(userLoginData)
        axios.post("http://localhost:5000/login", userLoginData)
            .then((res) => {
                // console.log(res.data)
                if(res.status==200) alert("login successfully")
                setUserLoginData({
                    email: "",
                    password: "",
                })
            }).catch((err) => {
               
                if (err.response && err.response.status === 404) {
                    // User not found
                    alert('Incorrect email and password');
                } else if (err.response && err.response.status === 401) {
                    // Incorrect password
                    alert('Incorrect password');
                } else {
                    // Other errors
                    alert('An error occurred');
                }
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
                <Typography component="h1" variant="h4">
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        type='email'
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={userLoginData.email}
                        onChange={handleChange}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={userLoginData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="/signup" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            
        </Container>
    )
}

export default LoginForm