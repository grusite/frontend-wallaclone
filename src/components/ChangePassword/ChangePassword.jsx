import React, { useState, useEffect } from 'react'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import IconButton from '@material-ui/core/IconButton'
import InputLabel from '@material-ui/core/InputLabel'
import Visibility from '@material-ui/icons/Visibility'
import FormControl from '@material-ui/core/FormControl'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'

import Form, { Input } from '../Form'

import './changePassword.css'

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
  )
}

export default function ChangePassword({
  t,
  enqueueSnackbar,
  ui,
  history,
  userChangePassword,
  match,
}) {
  const [isSending, setIsSending] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const error = ui.error

  /* eslint-disable*/
  // Error control
  useEffect(() => {
    if (error) {
      if (error.data.reason === 'userNotFound') {
        enqueueSnackbar(t('userNotFound'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        })
      } else if (error.data.reason === 'invalidforgotPasswordToken') {
        enqueueSnackbar(t('invalidforgotPasswordToken'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        })
      } else if (error.data) {
        enqueueSnackbar(t('genericError'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'right',
          },
        })
      }
    }
  }, [error])

  const handleSubmit = async event => {
    const { password } = event
    const token = match.params.token

    setIsSending(true)
    await userChangePassword(token, password)
    setIsSending(false)
  }

  const goToLogin = event => {
    event.preventDefault()
    history.push('/login')
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar id="avatar-no-material" className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('resetPassword')}
        </Typography>
        <Typography variant="body2" align="center">
          {t('resetPasswordHeader')}
        </Typography>
        <Form
          className="form"
          noValidate
          validate={({ password }) => {
            if (!password) {
              return t('fillAllFieldsMessage')
            }
          }}
          initialValue={{
            password: '',
          }}
          onSubmit={handleSubmit}
          onError={error =>
            enqueueSnackbar(error, {
              variant: 'error',
              anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'center',
              },
            })
          }
        >
          <FormControl required fullWidth margin="normal" variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">{t('labelPassword')}</InputLabel>
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
          <Button
            id="submit-no-material"
            type="submit"
            className="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSending}
          >
            {t('changePassword')}
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link onClick={goToLogin} href="#" variant="body2">
                {t('rememberPassword')}
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
