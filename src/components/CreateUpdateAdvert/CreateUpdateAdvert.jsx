import React, { useState, useEffect } from 'react'

import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined'
import Input from '@material-ui/core/Input'
import Avatar from '@material-ui/core/Avatar'
import ArtTrackIcon from '@material-ui/icons/ArtTrack'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import InputAdornment from '@material-ui/core/InputAdornment'
import CircularProgress from '@material-ui/core/CircularProgress'
import ArrowBackIosOutlinedIcon from '@material-ui/icons/ArrowBackIosOutlined'
import IconButton from '@material-ui/core/IconButton'

import NavBar from '../Navbar'

import './createUpdateAdvert.css'

const initialState = {
  type: 'buy',
  name: '',
  description: '',
  price: 0,
  picture: '',
  tags: [],
}

export default function CreateUpdateAdvert({
  t,
  tags,
  history,
  ui,
  enqueueSnackbar,
  match,
  advert,
  fetchAdverts,
  updateAdvert,
  createAdvert,
}) {
  const selectedAdvert = advert ? advert : initialState
  const [value, setValue] = useState(selectedAdvert)
  const [submitted, setSubmitted] = useState(false)
  const { error, status } = ui

  /* eslint-disable*/
  // Error control
  useEffect(() => {
    if (status && submitted) {
      enqueueSnackbar(t('successfull'), {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      })
    }
  }, [status])

  /* eslint-disable*/
  useEffect(() => {
    if (error && error.data && submitted) {
      enqueueSnackbar(t('genericError'), {
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
      })
    }
  }, [error])

  const handleChange = event => {
    const { name, value } = event.target
    setValue(prevValue => {
      return { ...prevValue, [name]: value }
    })
  }

  const comeFromUpdate = () => {
    return match.url.match(/^(\/update\/)(\w+$)/g)
  }

  const resetForm = () => {
    setValue(initialState)
  }

  const handleSubmit = async event => {
    setSubmitted(true)
    event.preventDefault()
    if (comeFromUpdate()) {
      const { _id, __v, createdAt, updateAt, ...adContent } = value
      await updateAdvert(adContent, _id)
    } else {
      await createAdvert(value)
    }
    setSubmitted(false)
    await fetchAdverts()
  }

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          <Avatar id="avatar-no-material" className="avatar">
            <ArtTrackIcon />
          </Avatar>
          <Typography variant="h6" gutterBottom>
            {comeFromUpdate() ? t('editAdvertHeader') : t('createAd')}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} container justify="space-around">
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<ShoppingBasketOutlinedIcon />}
                      checkedIcon={<ShoppingBasketIcon />}
                      value="buy"
                      name="type"
                      onChange={handleChange}
                      checked={value.type === 'buy'}
                    />
                  }
                  label={t('buy')}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<AttachMoneyOutlinedIcon />}
                      checkedIcon={<AttachMoneyOutlinedIcon />}
                      value="sell"
                      name="type"
                      onChange={handleChange}
                      checked={value.type === 'sell'}
                    />
                  }
                  label={t('sell')}
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label={t('labelName')}
                fullWidth
                autoComplete="name"
                value={value.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                name="description"
                label={t('description')}
                fullWidth
                autoComplete="desc"
                value={value.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel required htmlFor="adornment-amount">
                  {t('price')}
                </InputLabel>
                <Input
                  id="adornment-amount"
                  value={value.price}
                  name="price"
                  onChange={handleChange}
                  startAdornment={<InputAdornment position="start">€</InputAdornment>}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="picture"
                name="picture"
                label={t('pictureURL')}
                fullWidth
                autoComplete="url picture"
                value={value.picture}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel required htmlFor="select-multiple-checkbox">
                  {t('tags')}
                </InputLabel>
                <Select
                  multiple
                  value={value.tags}
                  name="tags"
                  onChange={handleChange}
                  input={<Input id="select-multiple-checkbox" />}
                  renderValue={selected => selected.join(', ')}
                >
                  {tags.map(tag => (
                    <MenuItem key={tag} value={tag}>
                      <Checkbox checked={value.tags.indexOf(tag) > -1} />
                      <ListItemText primary={tag} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
          <Grid item xs={12} container justify="space-around">
            <Button
              id="submit-no-material"
              type="submit"
              className="submit"
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={ui.isFetching}
            >
              {comeFromUpdate() ? t('updateButton') : t('create')}
              {ui.isFetching && <CircularProgress size={20} thickness={3.5} disableShrink />}
            </Button>
            <Button variant="contained" id="submit-no-material" color="primary" onClick={resetForm}>
              {t('reset')}
            </Button>
          </Grid>
          <IconButton
            aria-label="go Back"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={() => {
              history.push('/')
            }}
            color="primary"
          >
            <ArrowBackIosOutlinedIcon />
          </IconButton>
        </div>
      </Container>
    </>
  )
}
