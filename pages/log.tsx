import { GetStaticProps } from 'next';
import { BlockMapType } from 'react-notion-dev';
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
  const blocksWithTweet = await Promise.all(
    pages
      .map((page) => {
        return Promise.all(
          Object.entries(page).map(async ([key, block]) => {
            if (block.value.type === 'tweet') {
              block.value.embed = await getTweet(block);
              return [key, block];
            }
            return [key, block];
          }),
        );
      })
      .map(async (block) => Object.fromEntries(await block)),
  );

  const metaDescription = pages
    .map((page) =>
      Object.values(page)
        .filter(({ value }) => value.properties)
        .map(({ value }) => value.properties?.title),
    )
    .join('');
  return {
    props: {
      metaDescription,
      blockMaps: blocksWithTweet,
    },
    revalidate: 10,
  };
};

const Logs = ({ metaDescription, blockMaps }) => (
  <>
    <OGPHeader url={'/log'} title='log' metaDescription={metaDescription} />
    <Log blockMaps={blockMaps} />
  </>
);

export default Logs;

async function getTweet(block) {
  const tweetUrl = block.value.properties.source[0][0] as string;
  const tweetId = tweetUrl.match(/([^\/.]+)$/g)?.pop();
  return fetch(`https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`)
    .then((res) => res.json())
    .then((json) => json.html as string);
}
