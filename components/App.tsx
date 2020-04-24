import { Posts } from './mdx';

const App = () =>
  Posts.map((Post, i) => {
    return (
      <div key={i}>
        <Post />
        <hr />
      </div>
    );
  });

export default App;
