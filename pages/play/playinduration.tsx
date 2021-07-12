import dynamic from 'next/dynamic';
import Link from 'next/link';

const PlayInDuration = dynamic(() => import('../../components/play/PlayInDuration'), { ssr: false });

const PlayInDurationPage = () => {
  return (
    <>
      <PlayInDuration />{' '}
      <Link passHref href='/'>
        <h3 className='menu'>{'back to top'}</h3>
      </Link>
    </>
  );
};

export default PlayInDurationPage;
