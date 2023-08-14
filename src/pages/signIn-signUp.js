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
import app from "../fierbase/auth";
  
  function SignInSignUp() {
    const auth = getAuth(app);
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const SignIn = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("Siz tizimga kirdingiz!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          // const errorMessage = error.message;
          alert(errorCode);
        });
    };
  
    const SignUp = () => {
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          alert("Siz royxatdan otdingiz!");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          alert(errorCode)
          // const errorMessage = error.message;
          // ..
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
              Sign in and Sign up
            </Typography>
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
              onClick={SignIn}
            >
              Sign in
            </Button>
            <Button
              variant="contained"
              fullWidth
              onClick={SignUp}
              sx={{
                textTransform: "none",
              }}
            >
              Create account
            </Button>
          </Grid>
        </Grid>
      </Container>
    );
  }
  
  export default SignInSignUp;
  