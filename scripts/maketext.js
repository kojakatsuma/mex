const fs = require('fs');

const textFiles = fs.readdirSync('pages/text');
const pageid = process.argv[2];
if (!pageid) {
  return;
}

const filename =
  textFiles.map((file) => file.split('.').slice(0, -1).join('.')).filter((name) => !isNaN(name)).length + 1;

const template = `
import { Text, Props } from '../../components/Text';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/${pageid}').then((res) =>
    res.json(),
  );
  return {
    props: {
      url: '/text/${filename}',
      blockMap: data,
    },
  };
}

export default (props: Props) => <Text {...props} />;

`;

fs.appendFileSync(`pages/text/${filename}.tsx`, template, 'utf8');
