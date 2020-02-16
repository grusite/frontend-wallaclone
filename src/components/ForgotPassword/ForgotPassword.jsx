import React, { useState, useEffect } from 'react'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import Form, { Input } from '../Form'

import './forgotPassword.css'

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

export default function ForgotPassword({ t, enqueueSnackbar, ui, history, userForgotPassword }) {
  const [isSending, setIsSending] = useState(false)
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
    setIsSending(true)
    const { email } = event
    await userForgotPassword(email)
    setIsSending(false)
  }

  const goToLogin = event => {
    event.preventDefault()
    history.push('/login')
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar id="avatar-no-material" className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('forgotPassword')}
        </Typography>
        <Typography variant="body2" align="center">
          {t('forgotPasswordHeader')}
        </Typography>
        <Form
          className="form"
          noValidate
          validate={({ email }) => {
            if (!email) {
              return t('fillAllFieldsMessage')
            }
          }}
          initialValue={{
            email: '',
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
          <Input
            variant="outlined"
            required
            fullWidth
            id="email"
            label={t('labelEmail')}
            name="email"
            autoComplete="lname"
            component={TextField}
            disabled={isSending}
          />
          <Button
            id="submit-no-material"
            type="submit"
            className="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={isSending}
          >
            {t('sendEmail')}
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
