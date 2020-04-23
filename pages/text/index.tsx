import Link from 'next/link';

export default () => {
  return (
    <div style={{ paddingTop: '2em' }}>
      <Link href='text/1'>
        <h2 style={{ cursor: 'pointer' }}>生活を改善する3月</h2>
      </Link>
    </div>
  );
};
