import { Posts } from './mdx';
import { Typography, Divider, Paper } from '@material-ui/core';

const App = () => (
  <Paper elevation={0}>
    {
      Posts.map((Post, i) => {
        return (
          <Paper key={i} style={{ marginBottom: '2em' }} square={true} elevation={0} >
            <Typography component='article' >
              <Post />
              <Divider />
            </Typography>
          </Paper>
        )
      })
    }
  </Paper>
)

export default App
