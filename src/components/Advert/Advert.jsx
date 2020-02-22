import React, { useState } from 'react'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined'
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined'
import Grid from '@material-ui/core/Grid'
import EditIcon from '@material-ui/icons/Edit'

import './advert.css'

export default function Advert({ advert, history }) {
  const [imgUrl, setimgUrl] = useState(advert.picture)
  const formattedDate = new Date(advert.createdAt).toDateString()

  if (imgUrl.startsWith('/images/adverts'))
    setimgUrl(`https://ancient-depths-90365.herokuapp.com/${advert.picture}`)

  const goToDetail = () => {
    history.push(`/advert/${advert._id}`)
  }

  const goToUpdate = () => {
    history.push(`/update/${advert._id}`)
  }

  const avatar = type => {
    if (type === 'buy') {
      return (
        <Avatar id="avatar-green-no-material" aria-label="adv" className="avatar">
          <ShoppingBasketOutlinedIcon />
        </Avatar>
      )
    } else if (type === 'sell') {
      return (
        <Avatar id="avatar-no-material" aria-label="adv" className="avatar">
          <AttachMoneyOutlinedIcon />
        </Avatar>
      )
    }
  }

  return (
    <>
      <Grid item id="item-no-material" className="card-item">
        <Card className="card">
          <CardHeader
            avatar={avatar(advert.type)}
            title={advert.name}
            action={
              <IconButton onClick={goToUpdate} aria-label="settings">
                <EditIcon />
              </IconButton>
            }
            subheader={formattedDate}
          />
          <CardMedia className="media" image={imgUrl} title={advert.name} onClick={goToDetail} />
          <CardContent onClick={goToDetail}>
            <Typography id="card-description" variant="body2" color="textSecondary" component="p">
              {advert.description}
            </Typography>
            <Typography id="card-price" variant="h5" component="p">
              {advert.price} €
            </Typography>
          </CardContent>
          <CardActions disableSpacing onClick={goToDetail}>
            {advert.tags.map(tag => (
              <Button
                key={tag}
                variant="outlined"
                id="button-no-material"
                disabled
                className="button"
              >
                {tag}
              </Button>
            ))}
          </CardActions>
        </Card>
      </Grid>
    </>
  )
}
