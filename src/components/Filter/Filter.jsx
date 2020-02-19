import React, { useState } from 'react'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormHelperText from '@material-ui/core/FormHelperText'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'

import './filter.css'

const initialState = {
  type: 'buy',
  name: '',
  description: '',
  price: 0,
  tagSelected: [],
}

export default function Filter({ t, tags, onFilterChange }) {
  const [formValue, setFormValue] = useState(initialState)
  const { type, name, description, price, tagSelected } = formValue

  const handleChange = event => {
    const { name, value } = event.target

    setFormValue(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }

  const resetForm = () => {
    initialState.type = ''
    setFormValue(initialState)
  }

  const handleSubmit = () => {
    onFilterChange(formValue)
  }

  return (
    <>
      <div className="bodyContainer">
        <Typography className="text" variant="h6" component="h6">
          {t('advertFilter')}
        </Typography>
        <Grid container id="paper-no-material" className="paperFilter">
          <div className="adType">
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<ShoppingBasketOutlinedIcon />}
                    checkedIcon={<ShoppingBasketIcon />}
                    value="buy"
                    name="type"
                    onChange={handleChange}
                    checked={type === 'buy'}
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
                    checked={type === 'sell'}
                  />
                }
                label={t('sell')}
              />
            </FormGroup>
          </div>
          <Grid container className="inputs">
            <Grid item xs={6} sm={6} className="priceItem">
              <TextField
                id="name"
                name="name"
                label={t('name')}
                autoComplete="name"
                value={name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6} sm={6} className="priceItem">
              <TextField
                id="description"
                name="description"
                label={t('description')}
                autoComplete="desc"
                value={description}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container id="input-no-material" className="inputs">
            <Grid item xs={6} sm={6} className="priceItem">
              <FormControl fullWidth>
                <InputLabel htmlFor="adornment-amount">{t('price')}</InputLabel>
                <Input
                  id="adornment-amount"
                  value={price}
                  name="price"
                  onChange={handleChange}
                  startAdornment={<InputAdornment position="start">€</InputAdornment>}
                />
                <FormHelperText>min-max | -max | min-</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} className="tagItem">
              <FormControl fullWidth>
                <InputLabel htmlFor="tag-native-simple">{t('tags')}</InputLabel>
                <Select
                  multiple
                  value={tagSelected}
                  name="tagSelected"
                  onChange={handleChange}
                  input={<Input id="select-multiple-checkbox" />}
                  renderValue={selected => selected.join(', ')}
                >
                  {tags.map(tag => (
                    <MenuItem key={tag} value={tag}>
                      <Checkbox checked={tagSelected.indexOf(tag) > -1} />
                      <ListItemText primary={tag} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
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
          >
            {t('filter')}
          </Button>
          <Button variant="contained" id="submit-no-material" color="primary" onClick={resetForm}>
            {t('reset')}
          </Button>
        </Grid>
      </div>
    </>
  )
}
