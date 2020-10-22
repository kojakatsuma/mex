import { GetStaticProps } from 'next';
import Link from 'next/link';
import { OGPHeader } from '../../components/OGPHeader';

export const getStaticProps: GetStaticProps<{ links: { url: string; title: string }[] }> = async () => {
  const data: { id: string; Name: string }[] = await fetch(
    'https://notion-api.splitbee.io/v1/table/ab46b7d1f5ce4bc48588c475b2682624',
  ).then((res) => res.json());
  const links = data.map(({ Name }, i) => ({ url: `text/${data.length - i}`, title: Name }));
  return {
    props: {
      links,
    },
    revalidate: 10,
  };
};

const Text: React.FC<{ links: { url: string; title: string }[] }> = ({ links }) => (
  <>
    <OGPHeader url={'/text'} title='text' metaDescription={'記事一覧'} />
    {links.map(({ url: href, title }, i) => (
      <Link key={i} href='/text/[id]' as={href}>
        <h3 className='menu'>{title}</h3>
      </Link>
    ))}
    <hr />
    <Link href='/'>
      <h3 className='menu'>{'back to top'}</h3>
    </Link>
  </>
);

export default Text;
