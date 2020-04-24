import Link from 'next/link';

export default () => {
  return (
    <>
      <Link href='log'>
        <h1 className='menu'>log</h1>
      </Link>
      <br />
      <Link href='text'>
        <h1 className='menu'>text</h1>
      </Link>
    </>
  );
};
