
import { Text, Props } from '../../components/Text';

export async function getStaticProps() {
  const data = await fetch('https://notion-api.splitbee.io/v1/page/3971ab2530bb446bae2dea0c415ed536').then((res) =>
    res.json(),
  );
  return {
    props: {
      url: '/text/8',
      blockMap: data,
    },
  };
}

export default (props: Props) => <Text {...props} />;

