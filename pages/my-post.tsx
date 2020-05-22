import { NotionRenderer } from 'react-notion';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/af5e175f6cc04f67bf64f9f8e4808a4c').then((res) =>
    res.json(),
  );
  return {
    props: { blockMap: data },
  };
}

export default ({ blockMap }) => (
  <div>
    <NotionRenderer blockMap={blockMap} />
  </div>
);
