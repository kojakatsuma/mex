import { Posts } from './mdx';
import { OGPHeader } from './OGPHeader';

const App = () => {
  return (
    <>
      <OGPHeader url={'/log'} title='log' metaDescription={'日記です'} />
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
