import { TABLE_TOKEN } from '../../libs/notion-blog-post';
import { GetStaticPaths } from 'next';
import Link from 'next/link';
import { BlockMapType } from 'react-notion';
import { Text } from '../../components/Text';

export const getStaticProps = async (context) => {
  const paramId = Number(context.params.id);
  const data: { id: string; Name: string }[] = await fetch(
    `https://notion-api.splitbee.io/v1/table/${TABLE_TOKEN}`,
  ).then((res) => res.json());
  const posts: BlockMapType[] = await Promise.all(
    data
      .filter((_, i) => data.length - i === paramId)
      .map(({ id }) => fetch(`https://notion-api.splitbee.io/v1/page/${id}`).then((res) => res.json())),
  );
  const post = await Promise.all(
    Object.entries(posts[0]).map(async ([key, pos]) => {
      if (pos.value.type === 'tweet') {
        const tweetUrl = pos.value.properties.source[0][0] as string;
        const tweetId = tweetUrl.match(/([^\/.]+)$/g)?.pop();
        pos.value.embed = await fetch(
          `https://api.twitter.com/1/statuses/oembed.json?id=${tweetId}`,
        )
          .then((res) => res.json())
          .then((json) => json.html as string);
        return [key, pos];
      }
      return [key, pos];
    }),
  );
  return { props: { id: paramId, post: Object.fromEntries(post) } };
};

export const getStaticPaths: GetStaticPaths<{ paths: string[] }> = async () => {
  const data: { id: string; Name: string }[] = await fetch(
    `https://notion-api.splitbee.io/v1/table/${TABLE_TOKEN}`,
  ).then((res) => res.json());
  const paths = data.map((_, i) => `/text/${data.length - i}`);
  return { paths, fallback: true };
};

const PostText: React.FC<{ id: string; post: BlockMapType }> = ({ id, post }) => {
  return (
    <>
      <Text url={`/text/${id}`} blockMap={post} />
      <hr />
      <Link href='/text'>
        <h3 className='menu'>{'back to text list'}</h3>
      </Link>
      <Link href='/'>
        <h3 className='menu'>{'back to top'}</h3>
      </Link>
    </>
  );
};

export default PostText;
