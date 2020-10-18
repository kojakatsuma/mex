import { GetStaticPaths } from 'next';
import { BlockMapType } from 'react-notion';
import { Text } from '../../components/Text';

export const getStaticProps = async (context) => {
  const paramId = Number(context.params.id);
  const data: { id: string; Name: string }[] = await fetch(
    'https://notion-api.splitbee.io/v1/table/ab46b7d1f5ce4bc48588c475b2682624',
  ).then((res) => res.json());
  const posts: BlockMapType[] = await Promise.all(
    data
      .filter((_, i) => data.length - i === paramId)
      .map(({ id }) => fetch(`https://notion-api.splitbee.io/v1/page/${id}`).then((res) => res.json())),
  );
  return { props: { id: paramId, post: posts[0] } };
};

export const getStaticPaths: GetStaticPaths<{ paths: string[] }> = async () => {
  const data: { id: string; Name: string }[] = await fetch(
    'https://notion-api.splitbee.io/v1/table/ab46b7d1f5ce4bc48588c475b2682624',
  ).then((res) => res.json());
  const paths = data.map((_, i) => `/text/${data.length - i}`);
  return { paths, fallback: true };
};

const PostText: React.FC<{ id: string; post: BlockMapType }> = ({ id, post }) => {
  return <Text url={`/text/${id}`} blockMap={post} />;
};

export default PostText;
