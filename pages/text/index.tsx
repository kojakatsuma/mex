import Link from 'next/link';

export default () => {
  return (
    <>
      <Link href='text/1'>
        <h3 className='menu'>生活を改善する3月</h3>
      </Link>
      <Link href='text/2'>
        <h3 className='menu'>オンラインセッションを録音する</h3>
      </Link>
      <Link href='text/3'>
        <h3 className='menu'>「可傷的な歴史(ロードムービー)」を観た</h3>
      </Link>
      <Link href='text/4'>
        <h3 className='menu'>react-router-domのSwitchは必要？</h3>
      </Link>
      <Link href='text/5'>
        <h3 className='menu'>react-routerとreact-router-domの違い</h3>
      </Link>
      <a className='menu' href='https://qiita.com/koja1234'>
        <h3>Qiitaの投稿記事</h3>
      </a>
    </>
  );
};
