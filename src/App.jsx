import React from 'react';
import { Container, Typography, Paper, Divider } from '@material-ui/core';
import { Posts } from './mdx';
import 'github-markdown-css'

export default () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h1" >mex</Typography>
      <Typography variant="subtitle2" paragraph>here is mexico.</Typography>
      {
        Posts.map((Post, i) => {
          return (
            <>
              <Divider />
              <Paper style={{ marginBottom: '2em' }} square elevation={0} key={i} className="markdown-body">
                <Post />
              </Paper>
            </>
          )
        })
      }

    </Container>
  )
}
