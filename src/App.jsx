import React from 'react';
import { Container, Typography } from '@material-ui/core';
import { Post } from './Post';
import Knowledge from './mdx/today-knowledge-20200129.mdx';

export default () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" >mex</Typography>
      <Typography variant="h2" >here is mexico.</Typography>
      <Container maxWidth="md">
        {[...Array(60).keys()].map(i => <Post key={i} caption={`CAPTION No.${i}`} date={"2019.12.09"} summary={'HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH'}
        ><Knowledge /></Post>)}
      </Container>
    </Container>
  )
}
