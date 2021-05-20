import Link from 'next/link';

const Top =  () => {
  return (
    <>
      <Link href='log'>
        <h1 className='menu'>log</h1>
      </Link>
      <br />
      <Link href='text'>
        <h1 className='menu'>text</h1>
      </Link>
      <br />
      <Link href='whoami'>
        <h1 className='menu'>who am i?</h1>
      </Link>
    </>
  );
};


export default Top