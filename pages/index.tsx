import Link from 'next/link';

const Top =  () => {
  return (
    <>
      <Link passHref href='log'>
        <h1 className='menu'>log</h1>
      </Link>
      <br />
      <Link passHref href='text'>
        <h1 className='menu'>text</h1>
      </Link>
      <br />
      <Link passHref href='whoami'>
        <h1 className='menu'>who am i?</h1>
      </Link>
    </>
  );
};


export default Top