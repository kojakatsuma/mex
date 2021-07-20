import Link from 'next/link';

const Play = () => {
  console.log('hoge')
  return (
    <>
      <Link passHref href={'/play/playinduration'}>
        <h1 className='menu'>play in duration</h1>
      </Link>
      <br />
      <Link passHref href={'/play/pointtopoint'}>
        <h1 className='menu'>point to point</h1>
      </Link>
    </>
  );
};

export default Play;
