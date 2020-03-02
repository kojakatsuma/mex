import dynamic from 'next/dynamic';
import Header from './Header';

const Posts = dynamic(() => import('./mdx'), { loading: () => <p>...</p>})

const App = () => (
  <main>
    <Header />
    <Posts />
  </main>
)

export default App
