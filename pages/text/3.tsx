import { Text, Props } from '../../components/Text';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/af5e175f6cc04f67bf64f9f8e4808a4c').then((res) =>
    res.json(),
  );
  return {
    props: {
      url: '/text/3',
      blockMap: data,
    },
  };
}

const Text3 = (props: Props) => <Text {...props} />;

export default Text3
