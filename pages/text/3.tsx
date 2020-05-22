import { NotionRenderer, BlockMapType } from 'react-notion';
import { OGPHeader } from '../../components/OGPHeader';

export async function getStaticProps() {
  const data: BlockMapType = await fetch(
    'https://notion-api.splitbee.io/v1/page/af5e175f6cc04f67bf64f9f8e4808a4c',
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
    <OGPHeader
      url={'/text/3'}
      title={'「可傷的な歴史(ロードムービー)」を観た'}
      description={'「可傷的な歴史(ロードムービー)」を観た感想'}
    />
    Created: {createdTime} <br />
    Last Edited: {lastEditedTime}
    <NotionRenderer blockMap={blockMap} />
  </>
);
