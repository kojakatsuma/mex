import { Posts } from './mdx';
import { OGPHeder } from './OGPHeder';

const App = () => {
  return (
    <>
      <OGPHeder url={'/log'} title='log' />
      {Posts.map((Post, i) => {
        return (
          <div key={i}>
            <Post />
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default App;
