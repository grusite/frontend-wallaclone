import React from 'react'

import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import NavBar from '../Navbar'
import Advert from '../Advert'

import '../Advert/advert.css'

export default function AdvertDetail({ t, ui, advert, match, history }) {
  const goBack = event => {
    event.preventDefault()
    history.push('/')
  }

  const body = (ui, advert) => {
    if (ui.isFetching) {
      return (
        <Grid container justify="center" alignItems="center" className="card-container">
          <CircularProgress size={80} thickness={3.7} disableShrink className="circular-progress" />
        </Grid>
      )
    } else {
      return (
        <>
          <Grid container justify="center" alignItems="center" className="card-container">
            <Typography className="text" variant="h5" component="h5">
              {t('advertHeader')}
            </Typography>
          </Grid>
          <Grid container justify="space-around" alignItems="center" className="card-container">
            <Advert advert={advert} />
          </Grid>
          <Grid container justify="space-around" alignItems="center" className="card-container">
            <Button variant="contained" color="primary" className="button" onClick={goBack}>
              {t('back')}
            </Button>
          </Grid>
        </>
      )
    }
  }

  return (
    <>
      <NavBar />
      {advert && body(ui, advert)}
    </>
  )
}
