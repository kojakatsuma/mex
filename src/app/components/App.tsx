import Header from './Header';
import { Posts } from './mdx';
import { Typography, Divider } from '@material-ui/core';

const App = () => (
  <main>
    <Header />
    {
      Posts.map((Post, i) => {
        return (
          <Typography component='article' key={i}>
            <Post />
            <Divider />
          </Typography>
        )
      })
    }
  </main>
)

export default App
