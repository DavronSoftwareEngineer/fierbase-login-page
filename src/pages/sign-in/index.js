import React from 'react'
import {
    Button,
    Container,
    CssBaseline,
    Grid,
    TextField,
    Typography, 
  } from "@mui/material";
  import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
  import { useState } from "react";
import app from '../../fierbase/auth';
import MiniDrawer from '../drawer';
import { Link, useNavigate } from 'react-router-dom';


function SignIn() {

    const navigator = useNavigate();
    const auth = getAuth(app);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
  
    const SignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setError(false)
        //   console.log(user);
        //   alert("Siz tizimga kirdingiz!");
        navigator('/drawer')
    })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          setError(errorCode)
        });
    };
  return (
    <Container>
        <CssBaseline />
        <Grid
          container
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Grid item xs={4} borderRadius={2} p={3} boxShadow={5}>
            <Typography variant="h5" textAlign={"center"}>
              Sign In
            </Typography>
            {error && <Typography variant='body1' color='error' textAlign={'center'} mt={2}>{error}</Typography>}
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="outlined-basic"
              fullWidth
              label="Email"
              variant="outlined"
              size="small"
              sx={{
                my: 2,
              }}
            />
            <TextField
              type="password"
              id="outlined-basic"
              fullWidth
              label="Password"
              variant="outlined"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              fullWidth
              sx={{
                my: 2,
                textTransform: "none",
              }}
              onClick={() => {
                SignIn();                
                }}>
              Sign in
            </Button>
            <Typography variant='body1'
                sx={{
                    fontWeight: "bold",
                    textAlign: 'center',
                }}
            >
                Create a new account: 
            <Link
                to={'./sign-up'}
                style={{
                    textTransform: "none",
                    marginLeft: "10px",
                }}
            >
              Sign Up
            </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
  )
}

export default SignIn