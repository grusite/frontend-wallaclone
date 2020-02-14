import React, { useState } from 'react';
// import { useTranslation } from 'react-i18next';

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

export default function Login({ t, userTraditionalLogin }) {
  const [statusMessage, setStatusMessage] = useState('');
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleSubmit = event => {
    const { email, password, remindMe } = event;
    if (email && password) {
      // userLogin(email, password, remindMe);
      userTraditionalLogin(email, password, remindMe);
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
            email: '',
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
              <FormControl required fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  {t('labelPassword')}
                </InputLabel>
                <Input
                  id="outlined-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
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
