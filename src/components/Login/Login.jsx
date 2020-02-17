import React, { useState, useEffect } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import Visibility from '@material-ui/icons/Visibility';
import FormControl from '@material-ui/core/FormControl';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import {
  FacebookLoginButton,
  GoogleLoginButton
} from 'react-social-login-buttons';
// import FacebookLoginButton from './FacebookLoginButton';
// import GoogleLoginButton from './GoogleLoginButton';
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { facebookId, googleId } from '../../parameters';

import Form, { Input } from '../Form';

// import './login.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Wallaclone
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh'
  },
  image: {
    backgroundImage: 'url(wallaclone-1300x650.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

export default function Login({
  t,
  ui,
  history,
  enqueueSnackbar,
  userTraditionalLogin,
  userFacebookLogin,
  userGoogleLogin
}) {
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const { error, status } = ui;

  /* eslint-disable*/
  // Error control
  useEffect(() => {
    if (status) {
      enqueueSnackbar(t('loginSuccessful'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center'
        }
      });
    }
  }, [status]);

  /* eslint-disable*/
  useEffect(() => {
    if (error) {
      if (error.data) {
        if (error.data.reason === 'userNotVerified') {
          enqueueSnackbar(t('userNotVerified'), {
            variant: 'error',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            }
          });
        } else if (error.data.reason === 'userNotFound') {
          enqueueSnackbar(t('userNotFound'), {
            variant: 'error',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            }
          });
        } else if (error.data.reason === 'invalidPassword') {
          enqueueSnackbar(t('invalidPassword'), {
            variant: 'error',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            }
          });
        } else if (error.data) {
          enqueueSnackbar(t('genericError'), {
            variant: 'error',
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right'
            }
          });
        }
      }
    }
  }, [error]);

  const goToRegister = event => {
    event.preventDefault();
    history.push('/register');
  };

  const goToForgotPassword = event => {
    event.preventDefault();
    history.push('/forgot-password');
  };

  const goToResendEmail = async event => {
    event.preventDefault();
    history.push('/resend-email');
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const responseGoogle = async response => {
    console.log(response);
  };

  const responseFacebook = response => {
    console.log(response);
  };

  const handleSubmit = async event => {
    const { email, password, remindMe } = event;
    await userTraditionalLogin(email, password, remindMe);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {t('logIn')}
          </Typography>
          <Form
            className={classes.form}
            noValidate
            validate={({ email, password }) => {
              if (!email || !password) {
                return t('fillAllFieldsMessage');
              }
            }}
            initialValue={{
              email: '',
              password: '',
              remindMe: false
            }}
            onSubmit={handleSubmit}
            onError={error =>
              enqueueSnackbar(error, {
                variant: 'warning',
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'right'
                }
              })
            }
          >
            <Input
              name="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label={t('labelEmail')}
              autoComplete="email"
              autoFocus
              component={TextField}
            />
            <FormControl required fullWidth margin="normal" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                {t('labelPassword')}
              </InputLabel>
              <Input
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                autoComplete="current-password"
                component={OutlinedInput}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={85}
              />
            </FormControl>
            <Input
              name="remindMe"
              control={<Checkbox value="remindMe" color="primary" />}
              label={t('remindMe')}
              component={FormControlLabel}
            />
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FacebookLogin
                  appId={facebookId}
                  fields="name,email,picture"
                  autoLoad={false}
                  render={() => (
                    <FacebookLoginButton>
                      <Typography variant="button">FACEBOOK</Typography>
                    </FacebookLoginButton>
                  )}
                  callback={responseFacebook}
                />
              </Grid>
              <Grid item xs={6}>
                <GoogleLogin
                  clientId={googleId}
                  render={() => (
                    <GoogleLoginButton>
                      <Typography variant="button">GOOGLE</Typography>
                    </GoogleLoginButton>
                  )}
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
              </Grid>
            </Grid>
            <Button
              id="submit-no-material"
              type="submit"
              className={classes.submit}
              fullWidth
              variant="contained"
              color="primary"
              disabled={ui.isFetching}
            >
              {t('login')}
              {ui.isFetching && (
                <CircularProgress size={20} thickness={3.5} disableShrink />
              )}
            </Button>
          </Form>
          <Grid container>
            <Grid item xs>
              <Link onClick={goToForgotPassword} href="#" variant="body2">
                {t('forgotPassword')}
              </Link>
              <Link onClick={goToResendEmail} href="#" variant="body2">
                {t('resendEmail')}
              </Link>
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <Link onClick={goToRegister} href="#" variant="body2">
                {t('noAccount')}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}
