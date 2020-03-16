import { Posts } from './mdx';
import { Typography, Divider, Container, Paper } from '@material-ui/core';
import { Lazy } from './Lazy';

const App = () => (
  <Container maxWidth={false} style={{ maxWidth: 680 }}>
    <Paper elevation={0}>
      {
        Posts.map((Post, i) => {
          return (
            <Paper key={i} style={{ marginBottom: '2em' }} square={true} elevation={0} >
              <Lazy>
                <Typography component='article' >
                  <Post />
                  <Divider />
                </Typography>
              </Lazy>
            </Paper>
          )
        })
      }
    </Paper>
  </Container >
)

export default App
