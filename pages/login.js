import Grid from '@material-ui/core/Grid';


import LoginForm from '../components/LoginForm';


const Login = (props) => {

  return (
    <Grid container justify="center" alignItems="center">
      <Grid item xs={false} sm={2} />
      <Grid item container justify="center" alignItems="center" xs={12} sm={8} >
          <LoginForm />
      </Grid>
      <Grid item xs={false} sm={2} />
    </Grid>
    );
}

export default Login;
