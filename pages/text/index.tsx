import { GetStaticProps } from 'next';
import Link from 'next/link';
import { BlockMapType } from 'react-notion';
import { OGPHeader } from '../../components/OGPHeader';

export const getStaticProps: GetStaticProps<{ links: { url: string; title: string; id: string }[] }> = async () => {
  const data: BlockMapType = await fetch(
    'https://notion-api.splitbee.io/v1/page/3495da64c3fa419a83d0f53cd8a671df',
  ).then((res) => res.json());
  const links: { url: string; title: string; id: string }[] = await Promise.all(
    Object.entries(data)
      .filter(([_key, { value }], i) => i !== 0 && value.type === 'page')
      .map(([key, { value }], index, pages) => {
        const title = value.properties.title[0][0];
        return { url: `text/${pages.length - index}`, title, id: `text/${key}` };
      }),
  );
  return {
    props: {
      links,
    },
    revalidate: 10,
  };
};

const Text: React.FC<{ links: { url: string; title: string; id: string }[] }> = ({ links }) => (
  <>
    <OGPHeader url={'/log'} title='log' metaDescription={'日記です'} />
    {links.map(({ url: href, title, id }, i) => (
      <Link key={i} href='/text/[id]' as={href}>
        <h3 className='menu'>{title}</h3>
      </Link>
    ))}
  </>
);

export default Text;
