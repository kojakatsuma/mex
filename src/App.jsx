import React from 'react';
import { Container, Typography, Paper } from '@material-ui/core';

export default () => {
  document.title = 'mex'
  return (
    <Container maxWidth="lg">
      <Typography component={'div'} variant="h1" >mex</Typography>
      <Container maxWidth="md">
        {[...Array(60).keys()].map(i => <Paper square  elevation={0} key={i}>
          <Typography variant="h3" >Caption{i}</Typography>
          <Typography variant="body2">{"2020.01.29"}</Typography>
          <Typography variant="body1">H</Typography>
        </Paper>)}
      </Container>
    </Container>
  )
}
