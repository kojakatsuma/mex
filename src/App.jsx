import React from 'react';
import { Container, Typography, Paper, Divider, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { Posts } from './mdx';
import 'github-markdown-css'
import './index.css'


const theme = createMuiTheme({
  typography: {
    fontFamily: "'M PLUS Rounded 1c'",
  },
})

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <Typography variant="h2" >mex</Typography>
        <Typography variant="subtitle2" paragraph>here is mexico.</Typography>
        {
          Posts.map((Post, i) => {
            return (
              <React.Fragment key={i}>
                <Divider />
                <Paper style={{ marginBottom: '2em' }} square elevation={0} className='markdown-body' >
                  <Typography>
                    <Post />
                  </Typography>
                </Paper>
              </React.Fragment>
            )
          })
        }

      </Container>
    </ThemeProvider>
  )
}
