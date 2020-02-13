import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MySnackbarContentWrapper from '../StatusMessages/StatusMessages';

import Form, { Input } from '../Form';

import './register.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '} {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Register({ t, userLogin }) {
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = event => {
    const { name, email, password } = event;
    if (name && email && password) {
      userLogin(name, email, password);
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
          {t('signUp')}
        </Typography>
        <Form
          className="form"
          noValidate
          initialValue={{
            name: '',
            email: '',
            password: ''
          }}
          onSubmit={handleSubmit}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Input
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label={t('labelName')}
                autoFocus
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                variant="outlined"
                required
                fullWidth
                id="email"
                label={t('labelEmail')}
                name="email"
                autoComplete="lname"
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Input
                variant="outlined"
                required
                fullWidth
                id="password"
                label={t('labelPassword')}
                name="password"
                autoComplete="lname"
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              {statusMessage}
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
            {t('register')}
          </Button>
        </Form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
