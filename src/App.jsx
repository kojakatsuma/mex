import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Post } from './Post';
import example from './example.html';

export default () => {
  console.log(example)
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" >mex</Typography>
      <Typography variant="h2" >here is mexico.</Typography>
      <Container maxWidth="md">
        {[...Array(60).keys()].map(i => <Post key={i} caption={`CAPTION No.${i}`} date={"2019.12.09"} summary={'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'} 
        html={example}
        />)}
      </Container>
    </Container>
  )
}
