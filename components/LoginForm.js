import { Avatar, Button, TextField, FormControlLabel, Checkbox, Link, Grid, Box, Typography, Container, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

import API_CONFIG from "./api/API_CONFIG";
import { useState, Fragment } from 'react';


const useStyles = makeStyles((theme) => ({
  paperStyle: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatarStyle: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  formStyle: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submitStyle: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);

  const handleLogin = (data, e) => {
    const account = data.account;
    const password = data.password;

    fetch(API_CONFIG.login, {
      method: "POST",
      body: JSON.stringify({
        account,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.msg === "success") {
          console.log("Success");
          // 这里应该将获取到的 token 存储下来，比如以 cookies 的形式存储，需要与后端协定，这里暂时没有处理
          router.push("/");
        } 
        else {
          console.log("Failed");
          setOpen(true);
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <Fragment>
      <Snackbar 
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={open}
        autoHideDuration={6000}
        onClose={() => {setOpen(false)}}
      >
        <Alert onClose={() => {setOpen(false)}} severity="error" elevation={6} variant="filled">
          Login failed. Please check your account and password :(
        </Alert>
      </Snackbar>
      <Container component="main" maxWidth="xs">
        <div className={classes.paperStyle}>
          <Avatar className={classes.avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.formStyle} onSubmit={handleSubmit(handleLogin)}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="account"
              label="Account"
              name="account"
              autoComplete="account"
              autoFocus
              inputRef={register}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              inputRef={register}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submitStyle}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Fragment>
  );
}

export default LoginForm;
