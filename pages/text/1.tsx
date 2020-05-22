import { NotionRenderer, BlockMapType } from 'react-notion';

export async function getStaticProps() {
  const data: BlockMapType = await fetch(
    'https://notion-api.splitbee.io/v1/page/7134d8e3adfa47cea6b693b26d226639',
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
    Created: {createdTime} <br />
    Last Edited: {lastEditedTime}
    <NotionRenderer blockMap={blockMap} />
  </>
);
