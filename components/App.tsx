import { Posts } from './mdx';
import { OGPHeader } from './OGPHeader';

const App = () => {
  return (
    <>
      <OGPHeader url={'/log'} title='log' />
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
