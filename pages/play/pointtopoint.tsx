import dynamic from 'next/dynamic';
import Link from 'next/link';

const PointToPoint = dynamic(() => import('../../components/play/PointToPoint'), { ssr: false });

const PointToPointIndex = () => {
  return (
    <>
      <PointToPoint />
      <Link href='/'>
        <h3 className='menu'>{'back to top'}</h3>
      </Link>
    </>
  );
};

export default PointToPointIndex;
