import { NotionRenderer, BlockMapType } from 'react-notion';
import { OGPHeader } from '../../components/OGPHeader';

export async function getStaticProps() {
  const data: BlockMapType = await fetch(
    'https://notion-api.splitbee.io/v1/page/42392e719d594fa58f0e1efd34021862',
  ).then((res) => res.json());
  const { created_time, last_edited_time } = Object.values(data)[0].value;
  return {
    props: {
      createdTime: new Date(created_time).toString(),
      lastEditedTime: new Date(last_edited_time).toString(),
      blockMap: data,
    },
  };
}

export default ({ createdTime, lastEditedTime, blockMap }) => (
  <>
    <OGPHeader url={'/text/2'} title={'オンラインセッションを録音する'} description={'オンラインセッションを録音する方法を検証する'}/>
    Created: {createdTime} <br />
    Last Edited: {lastEditedTime}
    <NotionRenderer blockMap={blockMap} />
  </>
);
