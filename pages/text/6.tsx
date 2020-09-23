
import { Text, Props } from '../../components/Text';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/072bb257ff29426d868d5dafc120cac8').then((res) =>
    res.json(),
  );
  return {
    props: {
      url: '/text/6',
      blockMap: data,
    },
  };
}

const Text6 = (props: Props) => <Text {...props} />;

export default Text6
