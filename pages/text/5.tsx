
import { Text, Props } from '../../components/Text';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/65e0edf385b544aba98f89a709fd2197').then((res) =>
    res.json(),
  );
  return {
    props: {
      url: '/text/5',
      blockMap: data,
    },
  };
}

const Text5 = (props: Props) => <Text {...props} />;

export default Text5

