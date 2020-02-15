import React, { useState } from 'react'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import IconButton from '@material-ui/core/IconButton'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import MySnackbarContentWrapper from '../StatusMessages/StatusMessages'

import Form, { Input } from '../Form'

import './register.css'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Wallaclone
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function Register({ t, userRegister }) {
  const [statusMessage, setStatusMessage] = useState('')
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleSubmit = event => {
    const { name, email, password } = event
    if (name && email && password) {
      userRegister(name, email, password)
    } else {
      setStatusMessage(
        <MySnackbarContentWrapper
          onClose={handleClose}
          variant="warning"
          className="margin"
          message={t('statusMessage')}
        />
      )
    }
  }

  const handleClose = () => {
    setStatusMessage('')
  }

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
            password: '',
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
              <FormControl required fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">{t('labelPassword')}</InputLabel>
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
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                {t('yesAccount')}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
