import Header from './Header';
import dynamic from 'next/dynamic'
const Posts = dynamic(() => import('./mdx'), { loading: () => <p>...</p>})

const App = () => (
  <main>
    <Header />
    <Posts />
  </main>
)

export default App
