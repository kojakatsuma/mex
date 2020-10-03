
import { Text, Props } from '../../components/Text';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/667a32e920004a9a883f557d97874d41').then((res) =>
    res.json(),
  );
  return {
    props: {
      url: '/text/9',
      blockMap: data,
    },
  };
}

const Text9 = (props: Props) => <Text {...props} />;

export default Text9

