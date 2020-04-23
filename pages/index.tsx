import Link from 'next/link';

export default () => {
  return (
    <>
      <Link href='log'>
        <h1>log</h1>
      </Link>
      <br />
      <Link href='text'>
        <h1>text</h1>
      </Link>
    </>
  );
};
