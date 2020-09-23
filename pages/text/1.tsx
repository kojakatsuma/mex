import { NotionRenderer, BlockMapType } from 'react-notion';
import { OGPHeader } from '../../components/OGPHeader';
import { fmtDateTime } from '../../utils/index';

export async function getStaticProps() {
  const data: BlockMapType = await fetch(
    'https://notion-api.splitbee.io/v1/page/7134d8e3adfa47cea6b693b26d226639',
  ).then((res) => res.json());
  const { created_time, last_edited_time } = Object.values(data)[0].value;

  return {
    props: {
      createdTime: fmtDateTime(created_time),
      lastEditedTime: fmtDateTime(last_edited_time),
      blockMap: data,
    },
  };
}

const Text1 = ({ createdTime, lastEditedTime, blockMap }) => (
  <>
    <OGPHeader url={'/text/1'} title={'生活を改善する3月'} metaDescription={'生活を改善するための月報'} />
    Created: {createdTime} <br />
    Last Edited: {lastEditedTime}
    <NotionRenderer blockMap={blockMap} />
  </>
);

export default Text1;