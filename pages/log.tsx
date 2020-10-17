import { GetStaticProps } from 'next';
import { BlockMapType } from 'react-notion';
import { Log } from '../components/Log';
import { OGPHeader } from '../components/OGPHeader';

export const getStaticProps: GetStaticProps<{ blockMaps: BlockMapType[] }> = async () => {
  const data: BlockMapType = await fetch(
    'https://notion-api.splitbee.io/v1/page/7e94045672674171ab6c8bafc4682fa8',
  ).then((res) => res.json());
  const pages: BlockMapType[] = await Promise.all(
    Object.entries(data)
      .filter(([_key, { value }], i) => i !== 0 && value.type === 'page')
      .map(([key]) => fetch(`https://notion-api.splitbee.io/v1/page/${key}`).then((res) => res.json())),
  );
  return {
    props: {
      blockMaps: pages,
    },
    revalidate: 10
  };
};

const Logs = (props) => (
  <>
    <OGPHeader url={'/log'} title='log' metaDescription={'日記です'} />
    <Log {...props} />
  </>
);

export default Logs;
