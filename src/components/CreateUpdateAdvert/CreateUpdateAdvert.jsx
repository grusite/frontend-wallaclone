import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';

import NavBar from '../Navbar';

import './createUpdateAdvert.css';

export default function createUpdateAdvert({
  tags,
  history,
  ui,
  enqueueSnackbar,
  match,
  advert,
  updateAdvert,
  createAdvert
}) {
  const initialState = {
    advert: {
      type: 'buy',
      name: '',
      description: '',
      price: 0,
      picture: '',
      tags: []
    },
    ui: {
      isFetching: true,
      error: ''
    },
    allTags: [],
    success: false,
    error: false,
    infoMessage: false
  };

  const [initState, setInitState] = useState(initialState);

  const comeFromUpdate = () => {
    return match.url.match(/^(\/update\/)(\w+$)/g);
  };

  const resetForm = () => {
    this.setState(initialState);
  };

  const handleSubmit = async () => {
    const { id, ...adContent } = advert;

    if (this.comeFromUpdate()) {
      // const id = match.params.id
      await updateAdvert(adContent, id);
    } else {
      await createAdvert(adContent);
    }
  };

  let title = (
    <Typography variant="h6" gutterBottom>
      {t('createAd')}
    </Typography>
  );

  let buttonText = t('create');

  if (comeFromUpdate()) {
    title = (
      <Typography variant="h6" gutterBottom>
        {t('editAdvertHeader')}
      </Typography>
    );
    buttonText = t('updateButton');
  }

  return (
    <>
      <NavBar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="paper">
          {title}
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
                      onChange={this.handleChange}
                      checked={type === 'buy'}
                    />
                  }
                  label="Comprar"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={<AttachMoneyOutlinedIcon />}
                      checkedIcon={<AttachMoneyOutlinedIcon />}
                      value="sell"
                      name="type"
                      onChange={this.handleChange}
                      checked={type === 'sell'}
                    />
                  }
                  label="Vender"
                />
              </FormGroup>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="name"
                name="name"
                label="Nombre"
                fullWidth
                autoComplete="name"
                value={name}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="description"
                name="description"
                label="Descripción"
                fullWidth
                autoComplete="desc"
                value={description}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel required htmlFor="adornment-amount">
                  Precio
                </InputLabel>
                <Input
                  id="adornment-amount"
                  value={price}
                  name="price"
                  onChange={this.handleChange}
                  startAdornment={
                    <InputAdornment position="start">€</InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                id="picture"
                name="picture"
                label="Inserte la url de la imagen"
                fullWidth
                autoComplete="url picture"
                value={picture}
                onChange={this.handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel required htmlFor="select-multiple-checkbox">
                  Tags
                </InputLabel>
                <Select
                  multiple
                  value={tags}
                  name="tags"
                  onChange={this.handleChange}
                  input={<Input id="select-multiple-checkbox" />}
                  renderValue={selected => selected.join(', ')}
                >
                  {allTags.map(tag => (
                    <MenuItem key={tag} value={tag}>
                      <Checkbox checked={tags.indexOf(tag) > -1} />
                      <ListItemText primary={tag} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {/* {statusMessage} */}
            </Grid>
          </Grid>
          <Grid item xs={12} container justify="space-around">
            <Button
              id="submit-no-material"
              type="submit"
              className="submit"
              variant="contained"
              color="primary"
              onClick={this.handleSubmit}
            >
              {buttonText}
            </Button>
            <Button
              variant="contained"
              id="submit-no-material"
              color="primary"
              onClick={this.resetForm}
            >
              Restaurar
            </Button>
          </Grid>
        </div>
      </Container>
    </>
  );
}
