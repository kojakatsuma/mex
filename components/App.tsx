import { Posts } from './mdx';
import { OGPHeader } from './OGPHeader';
import Link from 'next/link';
import { Fragment } from 'react';

const App = () => {
  return (
    <>
      <OGPHeader url={'/log'} title='log' metaDescription={'日記です'} />
      {Posts.map((Post, i) => {
        return (
          <Fragment key={i}>
            <Post />
            <Link href='/'>
              <h3 className='menu'>{'back to top'}</h3>
            </Link>
            <hr />
          </Fragment>
        );
      })}
    </>
  );
};
export default App;
