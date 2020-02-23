import React from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'

import Advert from '../Advert'

import '../Advert/advert.css'

const renderAdverts = (t, adverts, isFetching) => {
  if (isFetching) {
    return (
      <Grid container justify="center" alignItems="center" className="card-container">
        <CircularProgress size={80} thickness={3.7} disableShrink className="circular-progress" />
      </Grid>
    )
  }
  if (!isFetching && (!adverts || adverts.length === 0)) {
    return (
      <Grid container justify="center" alignItems="center" className="card-container">
        <Typography className="text" variant="h5" component="h5">
          {t('noAdvertsFound')}
        </Typography>
      </Grid>
    )
  }
  return (
    <>
      <Grid container justify="center" alignItems="center" className="card-container">
        <Typography className="text" variant="h5" component="h5">
          {t('advertsAvailable')}
        </Typography>
      </Grid>
      <Grid container justify="space-around" alignItems="center" className="card-container">
        {adverts.map(advert => (
          <Advert key={advert._id} advert={advert} />
        ))}
      </Grid>
    </>
  )
}

export default function AdvertList({ t, adverts, isFetching }) {
  return <>{renderAdverts(t, adverts, isFetching)}</>
}
