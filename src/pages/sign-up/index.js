import React from 'react'
import {
    Box,
    Button,
    Container,
    CssBaseline,
    Grid,
    IconButton,
    TextField,
    Typography, 
  } from "@mui/material";
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useState } from "react";
import app from '../../fierbase/auth';
import { useNavigate } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function SignUp() {
    const navigator = useNavigate();

    const auth = getAuth(app);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const SignUp = () => {
  
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // console.log(user);
            // alert("Siz royxatdan otdingiz!");
            navigator('/drawer')
          })
          .catch((error) => {
            const errorCode = error.code;
            // alert(errorCode)
            // const errorMessage = error.message;
            setError(errorCode);
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
          <Grid item xs={4} borderRadius={2} boxShadow={5}>
          <IconButton onClick={() => navigator('/')}><KeyboardBackspaceIcon/></IconButton>
            <Box pb={3} px={3}>
            <Typography variant="h5" textAlign={"center"}>
            Creating a new account
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
              onClick={SignUp}
              sx={{
                textTransform: "none",
                mt: 2,
              }}
            >
              Sign Up
            </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
  )
}

export default SignUp;