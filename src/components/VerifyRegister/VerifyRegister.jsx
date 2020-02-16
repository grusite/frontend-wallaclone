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
import CircularProgress from '@material-ui/core/CircularProgress'

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
  userVerifyRegister,
  match,
}) {
  const { error, status } = ui

  /* eslint-disable*/
  // Error control
  useEffect(() => {
    if (status) {
      enqueueSnackbar(t('emailVerifiedSuccessful'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      })
    }
  }, [status])

  // Error control
  useEffect(() => {
    if (error) {
      if (error.data.reason === 'userNotFound') {
        enqueueSnackbar(t('userNotFound'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
        })
      } else if (error.data.reason === 'userVerified') {
        enqueueSnackbar(t('userVerified'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
        })
      } else if (error.data.reason === 'invalidVerifyEmailToken') {
        enqueueSnackbar(t('invalidToken'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
        })
      } else if (error.data) {
        enqueueSnackbar(t('genericError'), {
          variant: 'error',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
        })
      }
    } else if (ui.status) {
      enqueueSnackbar(t('All good!'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      })
    }
  }, [error])

  const goToLogin = event => {
    event.preventDefault()
    history.push('/login')
  }

  const goToResendEmail = async event => {
    event.preventDefault()
    history.push('/resend-email')
  }

  const handleSubmit = async () => {
    const token = match.params.token
    await userVerifyRegister(token)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className="paper">
        <Avatar id="avatar-no-material" className="avatar">
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t('verifyEmail')}
        </Typography>
        <Typography variant="body2" align="center">
          {t('verifyEmailHeader')}
        </Typography>
        <Button
          id="submit-no-material"
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          color="primary"
          disabled={ui.isFetching}
        >
          {t('verifyEmail')}
          {ui.isFetching && <CircularProgress size={20} thickness={3.5} disableShrink />}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link onClick={goToLogin} href="#" variant="body2">
              {t('login')}
            </Link>
          </Grid>
          <Grid item>
            <Link onClick={goToResendEmail} href="#" variant="body2">
              {t('resendEmail')}
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
