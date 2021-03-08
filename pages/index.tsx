import Link from 'next/link';

const Top =  () => {
  return (
    <>
      <Link href='log'>
        <a className='menu'>log</a>
      </Link>
      <br />
      <Link href='text'>
        <a className='menu'>text</a>
      </Link>
      <br />
      <Link href='whoami'>
        <a className='menu'>who am i?</a>
      </Link>
    </>
  );
};


export default Top