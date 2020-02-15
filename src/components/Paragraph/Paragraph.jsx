import React from 'react'
import Typography from '@material-ui/core/Typography'

const Paragraph = props => {
  return (
    <Typography
      component={props.component}
      variant={props.variant}
      color={props.color}
      align={props.align}
    >
      {props.children}
    </Typography>
  )
}

export default Paragraph
