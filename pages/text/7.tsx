
import { Text, Props } from '../../components/Text';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/a0ccc8785ff54937a00f52a3c03654f4').then((res) =>
    res.json(),
  );
  return {
    props: {
      url: '/text/7',
      blockMap: data,
    },
  };
}

const Text7 = (props: Props) => <Text {...props} />;

export default Text7

