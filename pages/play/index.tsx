import Link from 'next/link';

const Play = () => {
  return (
    <>
      <Link href={'/play/playinduration'}>
        <a className='menu'>play in duration</a>
      </Link>
      <br />
      <Link href={'/play/pointtopoint'}>
        <a className='menu'>point to point</a>
      </Link>
    </>
  );
};

export default Play;
