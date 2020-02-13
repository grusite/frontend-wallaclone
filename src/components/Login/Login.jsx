import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MySnackbarContentWrapper from '../StatusMessages/StatusMessages';

import Form, { Input } from '../Form';

import './login.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '} {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Login({ t, userLogin }) {
  const [statusMessage, setStatusMessage] = useState('');
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    const { email, password, remindMe } = event;
    if (email && password) {
      userLogin(email, password, remindMe);
    } else {
      setStatusMessage(
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="warning"
          className="margin"
          message={t('statusMessage')}
        />
      );
    }
  };

  const handleClose = () => {
    setStatusMessage('');
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar id="avatar-no-material" className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('logIn')}
        </Typography>
        <Form
          className="form"
          noValidate
          initialValue={{
            name: '',
            password: '',
            remindMe: false
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label={t('labelEmail')}
                autoFocus
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                variant="outlined"
                required
                fullWidth
                label={t('labelPassword')}
                name="password"
                component={TextField}
                value={values.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item xs={12}>
              {statusMessage}
            </Grid>
            <Grid item xs={12}>
              <Input
                type="checkbox"
                name="remindMe"
                control={<Checkbox value="remindMe" color="primary" />}
                label={t('remindMe')}
                component={FormControlLabel}
              />
            </Grid>
          </Grid>
          <Button
            id="submit-no-material"
            type="submit"
            className="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            {t('login')}
          </Button>
        </Form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
