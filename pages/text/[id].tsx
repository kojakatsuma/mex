import { GetStaticPaths } from 'next';
import { BlockMapType } from 'react-notion';
import { Text } from '../../components/Text';

export const getStaticProps = async (context) => {
  const id = Number(context.params.id);
  const data: BlockMapType = await fetch(
    'https://notion-api.splitbee.io/v1/page/3495da64c3fa419a83d0f53cd8a671df',
  ).then((res) => res.json());
  const posts: BlockMapType[] = await Promise.all(
    Object.entries(data)
      .filter(([_key, { value }], i) => i !== 0 && value.type === 'page')
      .filter(([_key], i, pages) => {
        return pages.length - i === id;
      })
      .map(([key]) => {
        return fetch(`https://notion-api.splitbee.io/v1/page/${key}`).then((res) => res.json());
      }),
  );
  return { props: { id, post: posts[0] } };
};

export const getStaticPaths: GetStaticPaths<{ paths: string[] }> = async () => {
  const data: BlockMapType = await fetch(
    'https://notion-api.splitbee.io/v1/page/3495da64c3fa419a83d0f53cd8a671df',
  ).then((res) => res.json());
  const paths = await Promise.all(
    Object.entries(data)
      .filter(([_key, { value }], i) => i !== 0 && value.type === 'page')
      .map((_, index, pages) => {
        return `/text/${pages.length - index}`;
      }),
  );
  return { paths, fallback: true };
};

const PostText: React.FC<{ id: string; post: BlockMapType }> = ({ id, post }) => {
  return <Text url={`/text/${id}`} blockMap={post} />;
};

export default PostText;
