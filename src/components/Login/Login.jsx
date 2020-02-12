import React, { useState } from "react";
// import { useTranslation } from 'react-i18next';

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MySnackbarContentWrapper from "../StatusMessages/StatusMessages";

import Form, { Input } from "../Form";

import "./login.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "} {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login({ t, userLogin }) {
  const [statusMessage, setStatusMessage] = useState("");

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
    setStatusMessage("");
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
            name: "",
            password: "",
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
