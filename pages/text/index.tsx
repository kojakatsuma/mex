import Link from 'next/link';

export default () => {
  return (
    <>
      <Link href='text/1'>
        <h2 className='menu'>生活を改善する3月</h2>
      </Link>
      <Link href='text/2'>
        <h2 className='menu'>オンラインセッションを録音する</h2>
      </Link>
      <Link href='text/3'>
        <h2 className='menu'>「可傷的な歴史(ロードムービー)」を観た</h2>
      </Link>
      <a className='menu' href='https://qiita.com/koja1234'>
        <h2>Qiitaの投稿記事</h2>
      </a>
    </>
  );
};
